import Image from 'next/image'
import React from 'react'
import styles from './Usuario.module.css'

interface Props {
  username: string
  name: string
}

export default function Usuario({ username, name }: Props) {
  return username ? (
    <section className={styles.usuarioContainer}>
      <Image
        className={styles.img}
        alt='User photo'
        src={`https://github.com/${username}.png`}
        width='250px'
        height='250px'
      />
      <div className={styles.usernameContainer}>
        <a href={`https://github.com/${username}`} className={styles.username}>
          {username}
        </a>
      </div>
      <p className={styles.name}>{name}</p>
    </section>
  ) : (
    <section className={styles.usuarioContainer}>
      <p className={styles.mensagemErro}>Usuário não encontrado</p>
      <p className={styles.erro}>X</p>
    </section>
  )
}
