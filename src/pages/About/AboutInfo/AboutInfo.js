import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of{" "}
              <span className="special-word">classical</span> Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words,{" "}
              <span className="special-word">consectetur,</span> from a Lorem
              Ipsum passage
            </p>

            <blockquote>
              Nulla consequat massa quis enim. Doncus ut, imperdiet a.
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
              <span className="special-word">Aenean massa.</span> Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO WINE, A PLACE <span>TO DINE</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Lorem ipsum dolor sit amet,{" "}
              <span className="special-word">consectetuer </span>adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis.
            </p>

            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </blockquote>

            <p>
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
