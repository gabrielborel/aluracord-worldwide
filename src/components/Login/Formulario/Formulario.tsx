import React, { FormEvent, ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import styles from './Style.module.css'
import { useRouter } from 'next/router'
import { User } from '../Login'

interface Props {
  setUser: Dispatch<SetStateAction<User>>
}

export default function Formulario({ setUser }: Props) {
  const roteamento = useRouter()
  let timer: any = 0

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    event.stopPropagation()
    clearTimeout(timer)
    timer = setTimeout(() => getUserData(event.target.value), 700)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    roteamento.push('/chat')
  }

  function handleError(response: Response) {
    if (response.status !== 200) return
  }

  async function getUserData(username: string) {
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url)
    handleError(response)
    const userData = await response.json()
    setUser({ username: userData.login, name: userData.name })
  }

  return (
    <form className={styles.containerFormulario} onSubmit={handleSubmit}>
      <h1 className={styles.titulo}>Se conecte com o mundo !</h1>
      <p className={styles.subtitulo}>WorldCord - Chat with the world</p>
      <input
        className={styles.input}
        type='text'
        placeholder='Entre com o seu usuário no github...'
        onChange={handleChange}
      />
      <button className={styles.botao} type='submit'>
        Entrar
      </button>
    </form>
  )
}
