import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/coffee.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/Breakfast'
import LunchTime from "./LunchTime/LunchTime";
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'

import AddToCart from './AddToCart/AddToCart'

const Menu = () => {
  return (
    <div>
      
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
  
      <MenuOfTheDay />
      <AddToCart/>
      <Breakfast />
      <LunchTime />
      <CoffeeSelection />
      <Beverages />
      
    </div>
  );
};

export default Menu;
