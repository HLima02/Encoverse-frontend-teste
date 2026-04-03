import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Header from '../../sections/Header'

const mockCart = [
  {
    id: 1,
    name: 'Iphone 13 PRO MAX',
    image: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 15000,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Iphone 11 PRO',
    image: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 8999,
    quantity: 2,
  },
]

export default function Cart() {
  const formatPrice = (value: number) => value.toFixed(2).replace('.', ',')
  const subtotal = mockCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const frete = subtotal >= 20000 ? 0 : 2990
  const total = subtotal + frete

  return (
    <div className='cart_page'>
      <Header />
      <div className='flex_center'>
        <div className='w_1280 cart_container'>
          <h2>Meu Carrinho</h2>

          <div className='cart_content'>
            <div className='cart_items'>
              {mockCart.map((item) => (
                <div className='cart_card' key={item.id}>
                  <div className='cart_card_image'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='cart_card_info'>
                    <h4>{item.name}</h4>
                    <span className='cart_card_price'>R$ {formatPrice(item.price)}</span>
                  </div>
                  <div className='cart_card_quantity'>
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                  <div className='cart_card_total'>
                    <span>R$ {formatPrice(item.price * item.quantity)}</span>
                  </div>
                  <button className='cart_card_remove'>Remover</button>
                </div>
              ))}
            </div>

            <div className='cart_summary'>
              <h3>Resumo do pedido</h3>
              <div className='cart_summary_row'>
                <span>Subtotal</span>
                <span>R$ {formatPrice(subtotal)}</span>
              </div>
              <div className='cart_summary_row'>
                <span>Frete</span>
                <span>{frete === 0 ? 'Grátis' : `R$ ${formatPrice(frete)}`}</span>
              </div>
              <div className='cart_summary_row cart_summary_total'>
                <span>Total</span>
                <span>R$ {formatPrice(total)}</span>
              </div>
              <button className='cart_checkout'>FINALIZAR COMPRA</button>
              <Link to="/" className='cart_continue'>Continuar comprando</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
