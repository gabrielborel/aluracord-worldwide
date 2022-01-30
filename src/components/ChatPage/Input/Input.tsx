import React, { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { Mensagem } from '../ChatPage'
import styles from './Input.module.css'
import supabaseClient from '../../../services/supabase'
import { useRouter } from 'next/router'
import BotaoSticker from './BotaoSticker/BotaoSticker'

export default function ChatInput() {
  const [mensagem, setMensagem] = useState<string>('')
  const roteamento = useRouter()

  useEffect(() => {
    if (!mensagem.startsWith(':sticker:')) return
    novaMensagem()
  }),
    [mensagem]

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
      .then()

    setMensagem('')
  }

  function novaMensagemSticker(sticker: string) {
    setMensagem(`:sticker:${sticker}`)
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
      <BotaoSticker onStickerClick={novaMensagemSticker} />
      <button className={styles.buttonEnviar} onClick={novaMensagem}>
        Enviar
      </button>
    </div>
  )
}
