import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../../lib/supabase'
import './style.scss'
import econverseLogo from '../../assets/econverse-logo.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      toast.warn('Preencha todos os campos.')
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)

    if (error) {
      toast.error('E-mail ou senha incorretos.')
      return
    }

    toast.success('Login realizado com sucesso!')
    navigate('/')
  }

  return (
    <div className='auth_page'>
      <div className='auth_card'>
        <Link to="/"><img src={econverseLogo} alt="Econverse" className='auth_logo' /></Link>
        <h2>Entrar na sua conta</h2>

        <div className='auth_demo'>
          <p>Acesso para visitantes:</p>
          <span>E-mail: admin@admin.com</span>
          <span>Senha: admin@123</span>
        </div>

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
          <button type="submit" className='auth_submit' disabled={loading}>
            {loading ? 'ENTRANDO...' : 'ENTRAR'}
          </button>
        </form>

        <p className='auth_switch'>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  )
}
