import React from 'react'
import './style.scss'
import Header from '../../sections/Header'
import MainBanner from '../../sections/MainBanner'
import CategoryCardsSection from '../../sections/CategoryCardsSection'

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <CategoryCardsSection />
    </main>
  )
}
