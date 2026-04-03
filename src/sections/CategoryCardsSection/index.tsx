import React, { useState } from 'react'
import './style.scss'
import CategoryCards from '../../components/CategoryCards'
import { category_cards } from '../../data/category-cards'

export default function CategoryCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className='flex_center category_cards' >
      <div className='flexrow_center_between category_cards_container'>
        {category_cards.map((item, index) => (
          <CategoryCards data={item} key={index} active={index === activeIndex} onClick={() => setActiveIndex(index)}/>
        ))}
      </div>
    </section>
  )
}
