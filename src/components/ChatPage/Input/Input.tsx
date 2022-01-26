import React, { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction, useState } from 'react'
import { Mensagem } from '../ChatPage'
import styles from './Input.module.css'

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
      newMensagem()
    }
  }

  function newMensagem() {
    setListaMensagens([
      {
        conteudo: mensagem,
        usuario: getUser(),
        id: mensagens.length,
      },
      ...mensagens,
    ])
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
      <button className={styles.button} onClick={newMensagem}>
        Enviar
      </button>
    </div>
  )
}
