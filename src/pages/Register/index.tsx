import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './style.scss'
import econverseLogo from '../../assets/econverse-logo.png'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
      toast.warn('Preencha todos os campos.')
      return
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }
    setError('')
  }

  return (
    <div className='auth_page'>
      <div className='auth_card'>
        <img src={econverseLogo} alt="Econverse" className='auth_logo' />
        <h2>Criar sua conta</h2>

        <form onSubmit={handleSubmit}>
          <div className='auth_field'>
            <label htmlFor='name'>Nome</label>
            <input
              id='name'
              type="text"
              placeholder='Digite seu nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className='auth_field'>
            <label htmlFor='confirmPassword'>Confirmar senha</label>
            <input
              id='confirmPassword'
              type="password"
              placeholder='Confirme sua senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <span className='auth_error'>{error}</span>}
          <button type="submit" className='auth_submit'>CADASTRAR</button>
        </form>

        <p className='auth_switch'>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </div>
  )
}
