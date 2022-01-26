import React from 'react'
import Formulario from './Formulario'
import styles from './Style.module.css'
import Usuario from './Usuario'

export default function LoginFormulario() {
  return (
    <section className={styles.containerLogin}>
      <Usuario />
      <Formulario />
    </section>
  )
}
