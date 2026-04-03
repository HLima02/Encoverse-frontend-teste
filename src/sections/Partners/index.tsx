import React from 'react'
import './style.scss'

import partnerBg from '../../assets/partner_bg.png'

export default function Partners() {
  return (
    <div className='flex_center partners'>
      <div className='w_1280 partners_containers'>
        <div className='partners_card' style={{ backgroundImage: `url(${partnerBg})`}}>
          <div className='partners_card_content'>
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>

        <div className='partners_card' style={{ backgroundImage: `url(${partnerBg})`}}>
          <div className='partners_card_content'>
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>Confira</button>
          </div>
        </div>
      </div>
    </div>
  )
}
