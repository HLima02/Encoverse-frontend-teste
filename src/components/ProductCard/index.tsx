import React from 'react'
import './style.scss'

interface ProductCardProps {
  image: string
  name: string
  oldPrice: number
  currentPrice: number
}

export default function ProductCard({ image, name, oldPrice, currentPrice }: ProductCardProps) {
  const installment = (currentPrice / 2).toFixed(2).replace('.', ',')
  const formattedOld = oldPrice.toFixed(2).replace('.', ',')
  const formattedCurrent = currentPrice.toFixed(2).replace('.', ',')

  return (
    <div className='product_card'>
      <div className='product_card_image'>
        <img src={image} alt={name} />
      </div>
      <div className='product_card_info'>
        <p className='product_card_name'>{name}</p>
        <span className='product_card_old_price'>R$ {formattedOld}</span>
        <span className='product_card_price'>R$ {formattedCurrent}</span>
        <span className='product_card_installment'>ou 2x de R$ {installment} sem juros</span>
        <span className='product_card_shipping'>Frete grátis</span>
        <button className='product_card_buy'>COMPRAR</button>
      </div>
    </div>
  )
}
