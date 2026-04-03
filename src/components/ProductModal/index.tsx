import { useState } from 'react'
import { toast } from 'react-toastify'
import { useCartStore } from '../../store/useCartStore'
import { formatPrice } from '../../lib/formatPrice'
import './style.scss'

interface ProductModalProps {
  image: string
  name: string
  price: number
  onClose: () => void
}

export default function ProductModal({ image, name, price, onClose }: ProductModalProps) {
  const { addItem } = useCartStore()
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatPrice(price * quantity)

  const handleBuy = () => {
    addItem({ image, name, price, quantity })
    toast.success('Produto adicionado ao carrinho!')
    onClose()
  }

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increase = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className='product_modal_overlay' onClick={onClose}>
      <div className='product_modal' onClick={(e) => e.stopPropagation()}>
        <button className='product_modal_close' onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className='product_modal_image'>
          <img src={image} alt={name} />
        </div>

        <div className='product_modal_info'>
          <h3 className='product_modal_name'>{name}</h3>
          <span className='product_modal_price'>R$ {formattedPrice}</span>
          <p className='product_modal_description'>
            Many desktop publishing packages and web page editors now many desktop publishing
          </p>
          <a href="#" className='product_modal_details'>Veja mais detalhes do produto &gt;</a>

          <div className='product_modal_actions'>
            <div className='product_modal_quantity'>
              <button onClick={decrease}>-</button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button onClick={increase}>+</button>
            </div>
            <button className='product_modal_buy' onClick={handleBuy}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  )
}
