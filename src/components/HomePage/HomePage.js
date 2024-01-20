import React from 'react'
import Hero from '../Hero/Hero'
import TodaySpecials from '../TodaySpecials/TodaySpecials'
import AboutUs from '../AboutUs/AboutUs'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Join from '../Join/Join'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <TodaySpecials/>
        <AboutUs/>
        <Testimonials/>
        <Contact/>
        <Join/>
    </>
  )
}

export default HomePage