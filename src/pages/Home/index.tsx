import React from 'react'
import './style.scss'
import Header from '../../sections/Header'
import MainBanner from '../../sections/MainBanner'
import CategoryCardsSection from '../../sections/CategoryCardsSection'
import Partners from '../../sections/Partners'
import Brands from '../../sections/Brands'

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <CategoryCardsSection />
      <Partners />
      <Brands />
    </main>
  )
}
