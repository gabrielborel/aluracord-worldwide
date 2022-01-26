import React, { useState } from 'react'
import Header from './Header/Header'
import ChatInput from './Input/Input'
import MessageList from './MessageList/MessageList'
import styles from './ChatPage.module.css'

export interface Mensagem {
  conteudo: string
  usuario: string
  id: number
}

export default function ChatPage() {
  const [mensagens, setListaMensagens] = useState<Mensagem[]>([])

  return (
    <div className={styles.chatArea}>
      <Header />
      <MessageList listaMensagens={mensagens} setListaMensagens={setListaMensagens} />
      <ChatInput mensagens={mensagens} setListaMensagens={setListaMensagens} />
    </div>
  )
}
