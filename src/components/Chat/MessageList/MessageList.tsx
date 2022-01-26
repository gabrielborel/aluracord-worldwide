import React from 'react'
import { Mensagem } from '../ChatPage'
import Message from './Message/Message'
import styles from './Style.module.css'

interface Props {
  listaMensagens: Mensagem[]
}

export default function MessageList({ listaMensagens }: Props) {
  return (
    <ul className={styles.messageList}>
      {listaMensagens.map(({ conteudo, usuario, id }) => (
        <Message usuario={usuario} mensagem={conteudo} key={id} />
      ))}
    </ul>
  )
}
