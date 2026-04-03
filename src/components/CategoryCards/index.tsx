import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

type CategoryCardsProps = {
	label: string,
	href: string,
	image: string
}

export default function CategoryCards({ data }:{data:CategoryCardsProps}) {
  return (
    <Link to={data.href} className='category_card'>
		<div className='flex_center category_card_img'>
			<img src={data.image} alt={data.label} />
		</div>
		<p>{data.label}</p>
    </Link>
  )
}
