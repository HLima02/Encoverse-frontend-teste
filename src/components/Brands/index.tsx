import './style.scss'
import { Link } from 'react-router-dom'

type BrandsCardProps = {
  image: string,
  href: string
}

export default function BrandsCard({ data }:{ data: BrandsCardProps }) {
  return (
    <Link to={data.href} className='brand_card'>
      <div className='card_flex'>
        <img src={data.image} alt="logo marca" />
      </div>
    </Link>
  )
}
