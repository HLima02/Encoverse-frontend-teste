import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../../lib/supabase'
import { createProfile } from '../../lib/profileService'
import './style.scss'
import econverseLogo from '../../assets/econverse-logo.png'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
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
    setLoading(true)

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nome: name },
      },
    })

    if (signUpError) {
      setLoading(false)
      toast.error(signUpError.message)
      return
    }

    if (data.user) {
      await createProfile({
        id: data.user.id,
        nome: name,
        email,
        telefone: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
      })
    }

    setLoading(false)
    toast.success('Conta criada com sucesso!')
    navigate('/')
  }

  return (
    <div className='auth_page'>
      <div className='auth_card'>
        <Link to="/"><img src={econverseLogo} alt="Econverse" className='auth_logo' /></Link>
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
          <button type="submit" className='auth_submit' disabled={loading}>
            {loading ? 'CADASTRANDO...' : 'CADASTRAR'}
          </button>
        </form>

        <p className='auth_switch'>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </div>
  )
}
