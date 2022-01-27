import React, { MouseEvent } from 'react'
import styles from './Message.module.css'
import Image from 'next/image'

interface Props {
  mensagem: string
  usuario: string
  handleDelete: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  id: string
}

export default function Message({ mensagem, usuario, handleDelete, id }: Props) {
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
        <button className={styles.deletar} onClick={handleDelete} data-id={id}>
          DELETAR
        </button>
      </div>
      <p className={styles.messageContent}>{mensagem}</p>
    </li>
  )
}
