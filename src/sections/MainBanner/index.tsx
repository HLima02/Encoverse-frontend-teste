import React from 'react'
import './style.scss'
import mainBannerBg from '../../assets/main_banner_bg.png'

export default function MainBanner() {
  return (
    <section className='main_banner' style={{ backgroundImage: `url(${mainBannerBg})` }}>
      <div className='w_1280 main_banner_container'>
        <div className='main_banner_content'>
          <h1>Venha conhecer nossas promoções</h1>
          <h2><span>50% Off</span> nos produtos </h2>
          <button>Ver produto</button>
        </div>
      </div>
    </section>
  )
}
