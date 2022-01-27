import React, { Dispatch, SetStateAction } from 'react'
import { Mensagem } from '../ChatPage'
import Message from './Message/Message'
import styles from './MessageList.module.css'
import supabaseClient from '../../../services/supabase'

interface Props {
  listaMensagens: Mensagem[]
  setListaMensagens: Dispatch<SetStateAction<Mensagem[]>>
}

export default function MessageList({ listaMensagens, setListaMensagens }: Props) {
  function deletarMensagem(index: number) {
    supabaseClient
      .from('mensagens')
      .delete()
      .match({ id: index })
      .then(({ data }) => data && setListaMensagens(listaMensagens.filter((mensagem) => mensagem.id !== data[0].id)))
  }

  function handleDelete(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    const index = Number(event.currentTarget.dataset.id)
    deletarMensagem(index)
  }

  return (
    <ul className={styles.messageList}>
      {listaMensagens.map(({ de, texto, id }) => (
        <Message handleDelete={handleDelete} usuario={de} mensagem={texto} key={id} id={id} />
      ))}
    </ul>
  )
}
