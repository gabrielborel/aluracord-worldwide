import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
      <h5 className={styles.title}>Chat</h5>
      <button className={styles.logoutButton} type='submit'>
        <Link href='/'>Logout</Link>
      </button>
    </div>
  )
}
