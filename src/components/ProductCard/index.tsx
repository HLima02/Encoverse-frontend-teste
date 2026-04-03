import { formatPrice } from '../../lib/formatPrice'
import './style.scss'

interface ProductCardProps {
  image: string
  name: string
  oldPrice: number
  currentPrice: number
  onBuy?: () => void
}

export default function ProductCard({ image, name, oldPrice, currentPrice, onBuy }: ProductCardProps) {
  const installment = formatPrice(currentPrice / 2)
  const formattedOld = formatPrice(oldPrice)
  const formattedCurrent = formatPrice(currentPrice)

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
        <button className='product_card_buy' onClick={onBuy}>COMPRAR</button>
      </div>
    </div>
  )
}
