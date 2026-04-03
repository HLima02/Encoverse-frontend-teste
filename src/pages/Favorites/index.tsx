import { Link } from 'react-router-dom'
import { formatPrice } from '../../lib/formatPrice'
import './style.scss'
import Header from '../../sections/Header'

const mockFavorites = [
  {
    id: 1,
    name: 'Iphone 13 PRO MAX',
    image: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 15000,
    oldPrice: 15750,
  },
  {
    id: 2,
    name: 'Iphone 11 PRO',
    image: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 8999,
    oldPrice: 9449,
  },
  {
    id: 3,
    name: 'Iphone 14',
    image: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 12500,
    oldPrice: 13125,
  },
]

export default function Favorites() {
  return (
    <div className='favorites_page'>
      <Header />
      <div className='flex_center'>
        <div className='w_1280 favorites_container'>
          <h2>Meus Favoritos</h2>
          <p className='favorites_count'>{mockFavorites.length} itens</p>

          <div className='favorites_list'>
            {mockFavorites.map((item) => (
              <div className='favorite_card' key={item.id}>
                <div className='favorite_card_image'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className='favorite_card_info'>
                  <h4>{item.name}</h4>
                  <span className='favorite_old_price'>R$ {formatPrice(item.oldPrice)}</span>
                  <span className='favorite_price'>R$ {formatPrice(item.price)}</span>
                </div>
                <div className='favorite_card_actions'>
                  <button className='favorite_add_cart'>Adicionar ao carrinho</button>
                  <button className='favorite_remove'>Remover</button>
                </div>
              </div>
            ))}
          </div>

          <Link to="/" className='favorites_back'>Continuar comprando</Link>
        </div>
      </div>
    </div>
  )
}
