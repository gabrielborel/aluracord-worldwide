import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Header() {
  const roteamento = useRouter()
  const usuario = roteamento.query.username

  return (
    <div className={styles.header}>
      <h5 className={styles.title}>Chat</h5>
      <p className={styles.usuarioLogado}>
        <p className={styles.online}>ONLINE:</p>{' '}
        <Image
          className={styles.usuarioImg}
          src={`https://github.com/${usuario}.png`}
          alt='Foto do usuário logado'
          width='30px'
          height='30px'
        />
        {usuario}
      </p>
      <button className={styles.logoutButton} type='submit'>
        <Link href='/'>Logout</Link>
      </button>
    </div>
  )
}
