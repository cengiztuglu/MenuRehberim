import React from 'react'
import Hero from './Hero/Hero'
import AboutMenuRehberim from './AboutMenuRehberim/AboutMenuRehberim'
import OurData from './OurData/OurData'
import FoodCategories from './FoodCategories/FoodCategories'
import HomeRestaurants from './HomeRestaurants/HomeRestaurants'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMenuRehberim />
      <OurData/>
      <FoodCategories/>
      <HomeRestaurants/>
    </div>
  )
}

export default Home