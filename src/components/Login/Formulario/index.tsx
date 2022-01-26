import React from 'react'
import styles from './Style.module.css'

export default function Formulario() {
  return (
    <form className={styles.containerFormulario}>
      <h1 className={styles.titulo}>Se conecte com o mundo !</h1>
      <p className={styles.subtitulo}>WorldCord - Chat with the world</p>
      <input className={styles.input} type='text' placeholder='Entre com o seu usuário no github...' />
      <button className={styles.botao} type='submit'>
        Entrar
      </button>
    </form>
  )
}
