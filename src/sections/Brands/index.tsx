import React from 'react'
import './style.scss'

import { brands } from '../../data/brands'
import BrandsCard from '../../components/Brands'

export default function Brands() {
  return (
    <section className='flex_center brands'>
        <div className='w_1280 brands_container'>
            <h3>Navegue por marcas</h3>

            <div className='flexrow_center_between  brands_cards'>
                {brands.map((item,index) => (
                    <BrandsCard data={item} key={index} />
                ))}
            </div>
        </div>
    </section>
  )
}
