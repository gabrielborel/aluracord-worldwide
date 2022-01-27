import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import ChatInput from './Input/Input'
import MessageList from './MessageList/MessageList'
import styles from './ChatPage.module.css'
import { createClient, PostgrestResponse } from '@supabase/supabase-js'
import supabaseClient from '../../supabase/index'

export interface Mensagem {
  texto: string
  de: string
  id: string
}

export default function ChatPage() {
  const [mensagens, setListaMensagens] = useState<Mensagem[]>([])

  useEffect(() => {
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false })
      .then((response) => response.data && setListaMensagens(response.data))
  }, [])

  return (
    <div className={styles.chatArea}>
      <Header />
      <MessageList listaMensagens={mensagens} setListaMensagens={setListaMensagens} />
      <ChatInput mensagens={mensagens} setListaMensagens={setListaMensagens} />
    </div>
  )
}
