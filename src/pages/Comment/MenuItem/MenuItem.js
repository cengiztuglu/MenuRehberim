import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./MenuItem.css";

import image1 from "../../../assets/burger.jpg";

const menuData = [
  {
    title: "Yorum yapılacak ürün",
    description: "açıklaması",
    price: "7.50",
    img: image1,
  },
];

const MenuItem = () => {
  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
          Yorum yapmak istediğiniz ürün ; 
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

export default MenuItem;
