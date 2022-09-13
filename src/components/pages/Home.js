import React from 'react'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import LastSection from '../LastSection'
import Midsection from '../Midsection'
import Maillist from './mailList/Maillist'

function Home() {
  return (
    <>
            <HeroSection />
            <Midsection />
            <LastSection />
            <Maillist />
            <Footer />
            
            
        </>
  )
}

export default Home