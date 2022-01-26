import Image from 'next/image'
import React from 'react'
import styles from './Style.module.css'

export default function Usuario() {
  const username: string = 'gabrielborel'
  return (
    <section className={styles.usuarioContainer}>
      <Image
        className={styles.img}
        alt='User photo'
        src={'https://github.com/gabrielborel.png'}
        width='180px'
        height='170px'
      />
      <div className={styles.usernameContainer}>
        <p className={styles.username}>{username}</p>
      </div>
    </section>
  )
}
