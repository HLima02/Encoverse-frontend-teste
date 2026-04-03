import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../../lib/supabase'
import { getProfile, updateProfile } from '../../lib/profileService'
import { useUserStore } from '../../store/useUserStore'
import type { Profile } from '../../types'
import './style.scss'
import econverseLogo from '../../assets/econverse-logo.png'


export default function Profile() {
  const { user } = useUserStore()
  const navigate = useNavigate()

  const [profile, setProfile] = useState<Profile | null>(null)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  })

  useEffect(() => {
    if (!user) return
    getProfile(user.id).then((data) => {
      if (data) {
        setProfile(data)
        setForm({
          nome: data.nome || '',
          email: data.email || '',
          telefone: data.telefone || '',
          rua: data.rua || '',
          bairro: data.bairro || '',
          cidade: data.cidade || '',
          estado: data.estado || '',
          cep: data.cep || '',
        })
      }
    })
  }, [user])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('Logout realizado.')
    navigate('/login')
  }

  const handleEdit = (section: string) => {
    setEditingSection(section)
  }

  const handleCancel = () => {
    if (profile) {
      setForm({
        nome: profile.nome || '',
        email: profile.email || '',
        telefone: profile.telefone || '',
        rua: profile.rua || '',
        bairro: profile.bairro || '',
        cidade: profile.cidade || '',
        estado: profile.estado || '',
        cep: profile.cep || '',
      })
    }
    setEditingSection(null)
  }

  const handleSave = async () => {
    if (!user) return

    const fields = editingSection === 'pessoais'
      ? { nome: form.nome, telefone: form.telefone }
      : { rua: form.rua, bairro: form.bairro, cidade: form.cidade, estado: form.estado, cep: form.cep }

    const success = await updateProfile(user.id, fields)

    if (success) {
      setProfile((prev) => {
        if (prev) return { ...prev, ...fields }
        return {
          id: user.id,
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          rua: form.rua,
          bairro: form.bairro,
          cidade: form.cidade,
          estado: form.estado,
          cep: form.cep,
        }
      })
      toast.success('Dados atualizados!')
      setEditingSection(null)
    } else {
      toast.error('Erro ao salvar.')
    }
  }

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const displayName = profile?.nome || user?.nome || ''
  const displayEmail = profile?.email || user?.email || ''

  return (
    <div className='profile_page'>
      <div className='profile_header'>
        <Link to="/">
          <img src={econverseLogo} alt="Econverse" className='profile_logo' />
        </Link>
      </div>

      <div className='w_1280 profile_container'>
        <div className='profile_sidebar'>
          <div className='profile_avatar'>
            <span>{displayName.charAt(0) || '?'}</span>
          </div>
          <h2>{displayName}</h2>
          <p>{displayEmail}</p>
          <button className='profile_logout' onClick={handleLogout}>Sair da conta</button>
          <Link to="/" className='profile_back'>Voltar à loja</Link>
        </div>

        <div className='profile_content'>
          <section className='profile_section'>
            <div className='profile_section_header'>
              <h3>Dados pessoais</h3>
              {editingSection !== 'pessoais' ? (
                <button className='profile_edit_btn' onClick={() => handleEdit('pessoais')}>Editar</button>
              ) : (
                <div className='profile_edit_actions'>
                  <button className='profile_save_btn' onClick={handleSave}>Salvar</button>
                  <button className='profile_cancel_btn' onClick={handleCancel}>Cancelar</button>
                </div>
              )}
            </div>
            <div className='profile_grid'>
              <div className='profile_field'>
                <label>Nome</label>
                {editingSection === 'pessoais' ? (
                  <input value={form.nome} onChange={(e) => handleChange('nome', e.target.value)} />
                ) : (
                  <span>{displayName || '-'}</span>
                )}
              </div>
              <div className='profile_field'>
                <label>E-mail</label>
                <span>{displayEmail || '-'}</span>
              </div>
              <div className='profile_field'>
                <label>Telefone</label>
                {editingSection === 'pessoais' ? (
                  <input value={form.telefone} onChange={(e) => handleChange('telefone', e.target.value)} placeholder='(00) 00000-0000' />
                ) : (
                  <span>{profile?.telefone || '-'}</span>
                )}
              </div>
            </div>
          </section>

          <section className='profile_section'>
            <div className='profile_section_header'>
              <h3>Endereço</h3>
              {editingSection !== 'endereco' ? (
                <button className='profile_edit_btn' onClick={() => handleEdit('endereco')}>Editar</button>
              ) : (
                <div className='profile_edit_actions'>
                  <button className='profile_save_btn' onClick={handleSave}>Salvar</button>
                  <button className='profile_cancel_btn' onClick={handleCancel}>Cancelar</button>
                </div>
              )}
            </div>
            <div className='profile_grid'>
              <div className='profile_field'>
                <label>Rua</label>
                {editingSection === 'endereco' ? (
                  <input value={form.rua} onChange={(e) => handleChange('rua', e.target.value)} placeholder='Rua, número' />
                ) : (
                  <span>{profile?.rua || '-'}</span>
                )}
              </div>
              <div className='profile_field'>
                <label>Bairro</label>
                {editingSection === 'endereco' ? (
                  <input value={form.bairro} onChange={(e) => handleChange('bairro', e.target.value)} placeholder='Bairro' />
                ) : (
                  <span>{profile?.bairro || '-'}</span>
                )}
              </div>
              <div className='profile_field'>
                <label>Cidade</label>
                {editingSection === 'endereco' ? (
                  <input value={form.cidade} onChange={(e) => handleChange('cidade', e.target.value)} placeholder='Cidade' />
                ) : (
                  <span>{profile?.cidade || '-'}</span>
                )}
              </div>
              <div className='profile_field'>
                <label>Estado</label>
                {editingSection === 'endereco' ? (
                  <input value={form.estado} onChange={(e) => handleChange('estado', e.target.value)} placeholder='UF' />
                ) : (
                  <span>{profile?.estado || '-'}</span>
                )}
              </div>
              <div className='profile_field'>
                <label>CEP</label>
                {editingSection === 'endereco' ? (
                  <input value={form.cep} onChange={(e) => handleChange('cep', e.target.value)} placeholder='00000-000' />
                ) : (
                  <span>{profile?.cep || '-'}</span>
                )}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
