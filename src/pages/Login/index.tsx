import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './style.scss'
import econverseLogo from '../../assets/econverse-logo.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      toast.warn('Preencha todos os campos.')
      return
    }
  }

  return (
    <div className='auth_page'>
      <div className='auth_card'>
        <img src={econverseLogo} alt="Econverse" className='auth_logo' />
        <h2>Entrar na sua conta</h2>

        <form onSubmit={handleSubmit}>
          <div className='auth_field'>
            <label htmlFor='email'>E-mail</label>
            <input
              id='email'
              type="email"
              placeholder='Digite seu e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='auth_field'>
            <label htmlFor='password'>Senha</label>
            <input
              id='password'
              type="password"
              placeholder='Digite sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className='auth_forgot'>Esqueceu sua senha?</a>
          <button type="submit" className='auth_submit'>ENTRAR</button>
        </form>

        <p className='auth_switch'>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  )
}
