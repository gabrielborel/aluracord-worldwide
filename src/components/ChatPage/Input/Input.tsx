import React, { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction, useState } from 'react'
import { Mensagem } from '../ChatPage'
import styles from './Input.module.css'
import { v4 as uuidv4 } from 'uuid'
import supabaseClient from '../../../services/supabase'

interface Props {
  mensagens: Mensagem[]
  setListaMensagens: Dispatch<SetStateAction<Mensagem[]>>
}

export default function ChatInput({ mensagens, setListaMensagens }: Props) {
  const [mensagem, setMensagem] = useState<string>('')

  function getUser() {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('usuario') as string) || 'gabrielborel'
    }
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
      <button className={styles.button} onClick={novaMensagem}>
        Enviar
      </button>
    </div>
  )
}
