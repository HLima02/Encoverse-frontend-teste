import './style.scss'
import Header from '../../sections/Header'
import MainBanner from '../../sections/MainBanner'
import CategoryCardsSection from '../../sections/CategoryCardsSection'
import Partners from '../../sections/Partners'
import Brands from '../../sections/Brands'
import ProductCarousel from '../../sections/ProductCarousel'
import Newsletter from '../../sections/Newsletter'
import Footer from '../../sections/Footer'
import ProductCarouselSimple from '../../sections/ProductCarouselSimple'

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <CategoryCardsSection />
      <ProductCarousel />
      <Partners />
      <ProductCarouselSimple />
      <Partners />
      <Brands />
      <ProductCarouselSimple />
      <Newsletter />
      <Footer />
    </main>
  )
}
