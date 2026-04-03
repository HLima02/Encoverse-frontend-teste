import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import econverseLogo from '../../assets/econverse-logo.png'

const mockUser = {
  nome: 'João Silva',
  email: 'joao.silva@email.com',
  telefone: '(11) 99999-9999',
  endereco: {
    rua: 'Rua das Flores, 123',
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01000-000',
  },
  pedidos: [
    { id: '#1042', data: '28/03/2026', status: 'Entregue', valor: 'R$ 289,90' },
    { id: '#1038', data: '15/03/2026', status: 'Em trânsito', valor: 'R$ 1.499,00' },
    { id: '#1021', data: '02/03/2026', status: 'Entregue', valor: 'R$ 59,90' },
  ],
}

export default function Profile() {
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
            <span>{mockUser.nome.charAt(0)}</span>
          </div>
          <h2>{mockUser.nome}</h2>
          <p>{mockUser.email}</p>
          <Link to="/" className='profile_back'>Voltar à loja</Link>
        </div>

        <div className='profile_content'>
          <section className='profile_section'>
            <h3>Dados pessoais</h3>
            <div className='profile_grid'>
              <div className='profile_field'>
                <label>Nome</label>
                <span>{mockUser.nome}</span>
              </div>
              <div className='profile_field'>
                <label>E-mail</label>
                <span>{mockUser.email}</span>
              </div>
              <div className='profile_field'>
                <label>Telefone</label>
                <span>{mockUser.telefone}</span>
              </div>

            </div>
          </section>

          <section className='profile_section'>
            <h3>Endereço</h3>
            <div className='profile_grid'>
              <div className='profile_field'>
                <label>Rua</label>
                <span>{mockUser.endereco.rua}</span>
              </div>
              <div className='profile_field'>
                <label>Bairro</label>
                <span>{mockUser.endereco.bairro}</span>
              </div>
              <div className='profile_field'>
                <label>Cidade / Estado</label>
                <span>{mockUser.endereco.cidade} - {mockUser.endereco.estado}</span>
              </div>
              <div className='profile_field'>
                <label>CEP</label>
                <span>{mockUser.endereco.cep}</span>
              </div>
            </div>
          </section>

          <section className='profile_section'>
            <h3>Últimos pedidos</h3>
            <div className='profile_orders'>
              <div className='profile_orders_header'>
                <span>Pedido</span>
                <span>Data</span>
                <span>Status</span>
                <span>Valor</span>
              </div>
              {mockUser.pedidos.map((pedido) => (
                <div className='profile_order_row' key={pedido.id}>
                  <span>{pedido.id}</span>
                  <span>{pedido.data}</span>
                  <span className={`order_status ${pedido.status === 'Entregue' ? 'delivered' : 'transit'}`}>
                    {pedido.status}
                  </span>
                  <span>{pedido.valor}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
