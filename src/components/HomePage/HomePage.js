import React from 'react'
import Hero from '../Hero/Hero'
import TodaySpecials from '../TodaySpecials/TodaySpecials'
import AboutUs from '../AboutUs/AboutUs'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Join from '../Join/Join'
import Menu from '../Menu/Menu'

const HomePage = () => {
  return (
    <div id="mainContent">
        <Hero/>
        <TodaySpecials/>
        <Menu/>
        <AboutUs/>
        <Testimonials/>
        <Contact/>
        <Join/>
    </div>
  )
}

export default HomePage