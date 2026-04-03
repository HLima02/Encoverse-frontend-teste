import React from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../../store/useCartStore'
import { formatPrice } from '../../lib/formatPrice'
import './style.scss'
import Header from '../../sections/Header'

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore()

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const frete = subtotal >= 20000 ? 0 : 2990
  const total = subtotal + frete

  return (
    <div className='cart_page'>
      <Header />
      <div className='flex_center'>
        <div className='w_1280 cart_container'>
          <h2>Meu Carrinho</h2>

          {items.length === 0 ? (
            <div className='cart_empty'>
              <p>Seu carrinho está vazio.</p>
              <Link to="/" className='cart_continue'>Continuar comprando</Link>
            </div>
          ) : (
            <div className='cart_content'>
              <div className='cart_items'>
                {items.map((item) => (
                  <div className='cart_card' key={item.name}>
                    <div className='cart_card_image'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='cart_card_info'>
                      <h4>{item.name}</h4>
                      <span className='cart_card_price'>R$ {formatPrice(item.price)}</span>
                    </div>
                    <div className='cart_card_quantity'>
                      <button onClick={() => updateQuantity(item.name, Math.max(1, item.quantity - 1))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                    </div>
                    <div className='cart_card_total'>
                      <span>R$ {formatPrice(item.price * item.quantity)}</span>
                    </div>
                    <button className='cart_card_remove' onClick={() => removeItem(item.name)}>Remover</button>
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
          )}
        </div>
      </div>
    </div>
  )
}
