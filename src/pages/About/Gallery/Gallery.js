import React from 'react'
import './Gallery.css'

import imageItem1 from "../../../assets/cheese.jpg";
import imageItem2 from "../../../assets/pasta.jpeg";
import imageItem3 from "../../../assets/pizza.jpeg";
import imageItem4 from "../../../assets/coffee-items.jpg";
import imageItem5 from "../../../assets/wine.jpeg";
import imageItem6 from "../../../assets/pasta.jpg";
import imageItem7 from "../../../assets/chef.jpg";
import imageItem8 from "../../../assets/cake.jpg";
import imageItem9 from "../../../assets/coffee.jpg";
import imageItem10 from "../../../assets/burger.jpg";

const Gallery = () => {
  return (
    <div className='gallery'>
        <figure className='gallery__item gallery__item-1'>
            <img src={imageItem1} alt="Gallery 1" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-2'>
            <img src={imageItem2} alt="Gallery  2" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-3'>
            <img src={imageItem3} alt="Gallery  3" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-4'>
            <img src={imageItem4} alt="Gallery  4" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-5'>
            <img src={imageItem5} alt="Gallery  5" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-6'>
            <img src={imageItem6} alt="Gallery  6" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-7'>
            <img src={imageItem7} alt="Gallery  7" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-8'>
            <img src={imageItem8} alt="Gallery  8" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-9'>
            <img src={imageItem9} alt="Gallery  9" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-10'>
            <img src={imageItem10} alt="Gallery  10" className='gallery__img' />
        </figure>
    </div>
  )
}

export default Gallery