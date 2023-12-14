import React from "react";
import "./HeroImage.css";

const HeroImage = (props) => {
  return (
    <div
      className="container"
      style={{
        background: `url(${props.bgImage}) no-repeat bottom center/cover`,
        height: "60vh"
      }}
    >
        <div className="banner-content">
            <h1 className="heading-primary">{props.heading}</h1>
            <h4 className="text-white"><br/>{props.text}</h4>
            <p className="text-white"><br/><br/>{props.textadress}</p>
        </div>
    </div>
  );
};

export default HeroImage;
