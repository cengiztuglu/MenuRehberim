import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'>
                <span>Menu</span> <span className='special-word'>Rehberim</span>
            </h1>

            <p className='text-white'>Menu Rehberim ile bütün menüler elinizn altında !</p>

            <p className='text-white'>
                Güncel fiyatlar <span className='special-word'>tek bir yerde !</span>
            </p>
        </div>
    </div>
  )
}

export default Hero