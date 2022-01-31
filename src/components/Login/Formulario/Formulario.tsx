import React, { FormEvent, ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import styles from './Formulario.module.css'
import { useRouter } from 'next/router'
import { User } from '../LoginPage'

interface Props {
  setUser: Dispatch<SetStateAction<User>>
  user: User
}

export default function Formulario({ setUser, user }: Props) {
  const [podeSubmeter, setPodeSubmeter] = useState<boolean>(false)
  const roteamento = useRouter()
  let timer: any = 0

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    event.stopPropagation()
    clearTimeout(timer)
    timer = setTimeout(() => getUserData(event.target.value), 300)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    roteamento.push(`/chat?username=${user.username}`)
  }

  async function getUserData(username: string) {
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url)
    const userData = await response.json()
    setUser({ username: userData.login, name: userData.name })
    setPodeSubmeter(true)
  }

  return (
    <form className={styles.containerFormulario} onSubmit={handleSubmit}>
      <h1 className={styles.titulo}>Se conecte com o mundo !</h1>
      <p className={styles.subtitulo}>WorldCord - Chat with the world</p>
      <input
        className={styles.input}
        type='text'
        placeholder='Entre com o seu usuário do github...'
        onChange={handleChange}
      />
      {podeSubmeter ? (
        <button className={styles.botao} type='submit'>
          Entrar
        </button>
      ) : (
        <button className={styles.botao} type='submit' disabled>
          Entrar
        </button>
      )}
    </form>
  )
}
