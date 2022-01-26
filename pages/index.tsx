import type { NextPage } from 'next'
import LoginFormulario from '../src/components/Login/LoginPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.background}>
      <LoginFormulario />
    </div>
  )
}
