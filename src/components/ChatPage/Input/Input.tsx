import React, { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction, useState } from 'react'
import { Mensagem } from '../ChatPage'
import styles from './Input.module.css'
import supabaseClient from '../../../services/supabase'
import { useRouter } from 'next/router'

interface Props {
  mensagens: Mensagem[]
  setListaMensagens: Dispatch<SetStateAction<Mensagem[]>>
}

export default function ChatInput({ mensagens, setListaMensagens }: Props) {
  const [mensagem, setMensagem] = useState<string>('')
  const roteamento = useRouter()

  function getUser() {
    return roteamento.query.username
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setMensagem(event.target.value)
  }

  function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      novaMensagem()
    }
  }

  function novaMensagem() {
    if (!mensagem) return
    supabaseClient
      .from('mensagens')
      .insert([
        {
          de: getUser(),
          texto: mensagem,
        },
      ])
      .then(({ data }) => {
        data && setListaMensagens([{ ...data[0] }, ...mensagens])
      })

    setMensagem('')
  }

  return (
    <div className={styles.inputArea}>
      <input
        className={styles.input}
        type='text'
        placeholder='Insira sua mensagem aqui'
        value={mensagem}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      <div className={styles.sticker}>
        <button className={styles.buttonSticker}>😋</button>
      </div>
      <button className={styles.buttonEnviar} onClick={novaMensagem}>
        Enviar
      </button>
    </div>
  )
}
