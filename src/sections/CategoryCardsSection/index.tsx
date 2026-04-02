import React from 'react'
import './style.scss'
import CategoryCards from '../../components/CategoryCards'
import { category_cards } from '../../data/category-cards'

export default function CategoryCardsSection() {
  return (
    <section className='flex_center category_cards' >
      <div className='flexrow_center_between category_cards_container'>
        {category_cards.map((item, index) => (
          <CategoryCards data={item} key={index}/>
        ))}
      </div>
    </section>
  )
}
