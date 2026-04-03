import React, { useRef } from 'react'
import '../ProductCarousel/style.scss'
import { useProdutoStore } from '../../store/useProdutoStore'
import ProductCard from '../../components/ProductCard'

export default function ProductCarouselSimple() {
  const { produtos } = useProdutoStore()
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const scrollAmount = 290
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className='flex_center product_carousel_section'>
      <div className='w_1280 product_carousel_container'>
        <h2 className='product_carousel_title'>
          <span className='product_carousel_title_bar'></span>
          <span>Produtos relacionados</span>
          <span className='product_carousel_title_bar'></span>
        </h2>

        <a href="#" className='product_carousel_view_all'>Ver todos</a>

        <div className='product_carousel_wrapper'>
          <button className='carousel_arrow carousel_arrow_left' onClick={() => scroll('left')} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className='product_carousel_track' ref={carouselRef}>
            {produtos.map((produto, index) => (
              <ProductCard
                key={index}
                image={produto.photo}
                name={produto.descriptionShort}
                oldPrice={produto.price * 1.05}
                currentPrice={produto.price}
              />
            ))}
          </div>

          <button className='carousel_arrow carousel_arrow_right' onClick={() => scroll('right')} aria-label="Próximo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
