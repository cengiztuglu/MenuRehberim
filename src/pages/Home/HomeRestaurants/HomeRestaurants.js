

import "./HomeRestaurants.css";

import image1 from "../../../assets/RestaurantImages/Burgerking/Burgerking_Bg.jpeg";
import image2 from "../../../assets/RestaurantImages/Popeyes/Popeyes_Bg.jpeg";
import image3 from "../../../assets/RestaurantImages/Arbys/Arbys_Bg.jpeg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {

  return (
    <div className="section">
      <div className="container">
        <span>
          <h2 className='heading-secondary'>
            <span className='special-word-center'>Restoranlar</span>
          </h2>
        </span>

        <div className="amazing-card-container">

          <div className="amazing-card amazing-card-left">

            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Burger King</span>
                </h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Popeyes</span>
                </h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={image3} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Arbys</span>
                </h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
