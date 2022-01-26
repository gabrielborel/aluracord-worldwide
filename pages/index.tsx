import type { NextPage } from 'next'
import LoginFormulario from '../src/components/Login/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.background}>
      <LoginFormulario />
    </div>
  )
}
