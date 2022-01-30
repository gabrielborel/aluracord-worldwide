import React, { MouseEvent } from 'react'
import styles from './Message.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
  mensagem: string
  usuario: string
  handleDelete: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  id: string
}

export default function Message({ mensagem, usuario, handleDelete, id }: Props) {
  const roteamento = useRouter()
  const usuarioLogado = roteamento.query.username

  return (
    <li className={styles.message}>
      <div className={styles.userArea}>
        <Image
          className={styles.img}
          width='28px'
          height='28px'
          src={`https://github.com/${usuario}.png`}
          alt='User photo'
        />
        <p className={styles.userName}>{usuario}</p>
        <p className={styles.data}>{new Date().toLocaleDateString()}</p>
        {usuarioLogado === usuario ? (
          <button className={styles.deletar} onClick={handleDelete} data-id={id}>
            DELETAR
          </button>
        ) : (
          ''
        )}
      </div>
      {mensagem.startsWith(':sticker:') ? (
        <Image
          className={styles.sticker}
          src={mensagem.replace(':sticker:', '')}
          alt='sticker'
          width='150px'
          height='120px'
        />
      ) : (
        <p className={styles.messageContent}>{mensagem}</p>
      )}
    </li>
  )
}
