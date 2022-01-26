import React, { Dispatch, SetStateAction } from 'react'
import { Mensagem } from '../ChatPage'
import Message from './Message/Message'
import styles from './MessageList.module.css'

interface Props {
  listaMensagens: Mensagem[]
  setListaMensagens: Dispatch<SetStateAction<Mensagem[]>>
}

export default function MessageList({ listaMensagens, setListaMensagens }: Props) {
  function handleDelete(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    const id = Number(event.currentTarget.dataset.id)
    const mensagensFiltradas = listaMensagens.filter((mensagem) => mensagem.id !== id)
    setListaMensagens(mensagensFiltradas)
  }

  return (
    <ul className={styles.messageList}>
      {listaMensagens.map(({ conteudo, usuario, id }) => (
        <Message handleDelete={handleDelete} usuario={usuario} mensagem={conteudo} key={id} id={id} />
      ))}
    </ul>
  )
}
