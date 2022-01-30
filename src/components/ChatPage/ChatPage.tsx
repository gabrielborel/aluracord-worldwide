import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import ChatInput from './Input/Input'
import MessageList from './MessageList/MessageList'
import styles from './ChatPage.module.css'
import supabaseClient from '../../services/supabase'

export interface Mensagem {
  texto: string
  de: string
  id: string
}

function escutaMensagensEmTempReal(adicionaMensagem: (mensagem: Mensagem) => void) {
  return supabaseClient
    .from('mensagens')
    .on('INSERT', (response) => {
      adicionaMensagem(response.new)
    })
    .subscribe()
}

export default function ChatPage() {
  const [mensagens, setListaMensagens] = useState<Mensagem[]>([])

  useEffect(() => {
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false })
      .then((response) => response.data && setListaMensagens(response.data))

    escutaMensagensEmTempReal((novaMensagem: Mensagem) => {
      setListaMensagens((listaMensagem: Mensagem[]) => {
        return [novaMensagem, ...listaMensagem]
      })
    })
  }, [])

  return (
    <div className={styles.chatArea}>
      <Header />
      <MessageList listaMensagens={mensagens} setListaMensagens={setListaMensagens} />
      <ChatInput />
    </div>
  )
}
