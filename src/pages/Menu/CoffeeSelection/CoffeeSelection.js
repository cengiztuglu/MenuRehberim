import React from "react";

import "./CoffeeSelection.css";

import ListItem from "../../../components/ListItem/ListItem";
import coffeeImage from "../../../assets/coffee-items.jpg";

const menuDataRight = [
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
  },
  {
    title: "American Pancakes",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 21,
  },
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
  },
  {
    title: "Bagel",
    description: "with salmon, cream cheese and salsa",
    price: 8.5,
  },
  {
    title: "American Pancakes",
    description: "with chocolate  sauce or maple syrup, honey and cream",
    price: 21,
  },
  {
    title: "Low Carb CoffeeSelection",
    description: "grilled chicken breast with veggies",
    price: 13,
  },
];

const CoffeeSelection = () => {
  return (
    <div className="container coffee-selection">
      <h1 className="heading-secondary">
        coffee<span> Selection</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={coffeeImage} alt="coffee items" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
