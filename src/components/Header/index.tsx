import { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

import security_buy from '../../assets/ShieldCheck.png'
import truck from '../../assets/Truck.png'
import creditCard from '../../assets/CreditCard.png'
import econveseLogo from '../../assets/econverse-logo.png'
import box from '../../assets/box.png'
import favorites from '../../assets/Heart.png'
import user from '../../assets/UserCircle.png'
import cart from '../../assets/ShoppingCart.png'

import { navLinks } from '../../data/nav-links'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      {/* Seção ícones do Topbar */}
      <section className='flex_center w_1280 top_bar'>
        <div className='flexrow_center_between top_bar_content'>
          <div className="top_bar_content_item">
            <img src={security_buy} alt='ícone de escudo' />
            <p>Compra <span>100% segura</span> </p>
          </div>
           <div className="top_bar_content_item">
            <img src={truck} alt='ícone de caminhão' />
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </div>
           <div className="top_bar_content_item">
            <img src={creditCard} alt='ícone cartão de credito' />
            <p><span>Parcele</span> suas compras</p>
          </div>
        </div>
      </section>

      <section className='flex_center w_1280 middle'>
        <div className='flexrow_center_between middle_content'>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
          <div className='logo'>
            <img src={econveseLogo} alt="Econverse Logo. Lê-se: Econverse" />
          </div>
          <div className='input_search'>
            <input type='text' placeholder='O que você está buscando?' />
          </div>
          <div className='flexrow_center_between nav_links'>
            <Link to="/">
              <img src={box} alt='Ícone' />
            </Link >
            <Link to="/">
              <img src={favorites} alt='Ícone de coração para favoritos' />
            </Link >
            <Link to="/">
              <img src={user} alt='Ícone de pessoa para usuarios' />
            </Link >
            <Link to="/">
              <img src={cart} alt='Ícone de carrinho de shopping para carrinho' />
            </Link >
          </div>
        </div>
      </section>

      <section className={`flex_center w_1280 bottom ${menuOpen ? 'bottom--open' : ''}`}>
        <div className='flexrow_center_between bottom_content'>
          { navLinks.map((item, index) => (
            <Link to={item.href} key={index} onClick={() => setMenuOpen(false)}> {item.label} </Link>
          ))}
        </div>
      </section>

    </header>
  )
}
