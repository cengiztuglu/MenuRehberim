import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuOfTheDay.css";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";

const menuData = [
  {
    title: "Sesame crusted scotch fillet",
    description: "with honeyed Pedro Ximenez sauce and potato cake",
    price: "7.50",
    img: image1,
  },
  {
    title: "Roast Rack of Lamb",
    description: "with herb crust and fruity mesclun salad and straw potato",
    price: "7.50",
    img: image2,
  },
];

const MenuOfTheDay = () => {
  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          <span>menu </span>of the day
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOfTheDay;
