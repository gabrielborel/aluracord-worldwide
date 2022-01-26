import React from 'react'
import styles from './Style.module.css'
import Image from 'next/image'

interface Props {
  mensagem: string
  usuario: string
}

export default function Message({ mensagem, usuario }: Props) {
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
        <p className={styles.data}>{new Date().toLocaleString()}</p>
      </div>
      <p className={styles.messageContent}>{mensagem}</p>
    </li>
  )
}
