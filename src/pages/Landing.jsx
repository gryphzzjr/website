import React from 'react'
import Header from '../components/Header'
import HeroElypsis from '../components/Hero'
import AboutElypsis from '../components/About'
import BannerSection from '../components/Banner'
import PricingSection from '../components/Pricing'
import CTASection from '../components/CTA'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div>
      <Header />
      <HeroElypsis />
      <AboutElypsis />
      <BannerSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}
