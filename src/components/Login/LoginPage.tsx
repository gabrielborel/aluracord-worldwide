import React, { useState } from 'react'
import Formulario from './Formulario/Formulario'
import styles from './Login.module.css'
import Usuario from './Usuario/Usuario'

export interface User {
  username: string
  name: string
}

export default function LoginFormulario() {
  const [user, setUser] = useState<User>({ username: 'gabrielborel', name: 'Gabriel Borel' })

  return (
    <section className={styles.containerLogin}>
      <Usuario username={user.username} name={user.name} />
      <Formulario setUser={setUser} user={user} />
    </section>
  )
}
