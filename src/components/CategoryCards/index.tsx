import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

type CategoryCardsProps = {
	label: string,
	href: string,
	image: string
}

interface Props {
  data: CategoryCardsProps
  active?: boolean
  onClick?: () => void
}

export default function CategoryCards({ data, active, onClick }: Props) {
  return (
    <Link to={data.href} className={`category_card ${active ? 'active' : ''}`} onClick={onClick}>
		<div className='flex_center category_card_img'>
			<img src={data.image} alt={data.label} />
		</div>
		<p>{data.label}</p>
    </Link>
  )
}
