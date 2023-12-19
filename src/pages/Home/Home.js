import React from 'react'
import Hero from './Hero/Hero'
import AboutMenuRehberim from './AboutMenuRehberim/AboutMenuRehberim'
import OurData from './OurData/OurData'
import HomeRestaurants from './HomeRestaurants/HomeRestaurants'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMenuRehberim />
      <OurData/>

      <HomeRestaurants/>
    </div>
  )
}

export default Home