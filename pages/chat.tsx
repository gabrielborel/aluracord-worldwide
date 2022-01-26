import React from 'react'
import ChatPage from '../src/components/ChatPage/ChatPage'
import styles from '../styles/Home.module.css'

export default function Chat() {
  return (
    <div className={styles.background}>
      <ChatPage />
    </div>
  )
}
