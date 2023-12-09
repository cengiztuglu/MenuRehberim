import React from 'react'
import Hero from './Hero/Hero'
import AboutMenuRehberim from './AboutMenuRehberim/AboutMenuRehberim'
import OurData from './OurData/OurData'
import HomeRestaurants from './HomeRestaurants/HomeRestaurants'
import OurChef from './OurChef/OurChef'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMenuRehberim />
      <OurData/>
      <HomeRestaurants/>
      <OurChef />
    </div>
  )
}

export default Home