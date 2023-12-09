import React, { useState } from "react";

import "./AboutMenuRehberim.css";

import image1 from "../../../assets/MenuRehberAdv01.jpeg";
import image2 from "../../../assets/MenuRehberimAdv02.jpeg";
import image3 from "../../../assets/MenuRehberimAvd03.jpeg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AmazingMeal = () => {
  const [items] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Menu Rehberim <span className="ampersand">&#38;</span>
              <br />
              <span>
                Sizin <br /> Hizmetinizde
              </span>
            </h2>

            <h4>Merak ettiğiniz restorant menuleri elinizin altında !</h4>

            <p>
            Yemek Tutkunları için bir araya getirdiğimiz bu uygulama, 
            damak zevkinize hitap edecek pek çok farklı restoranın menülerini 
            ve güncel fiyatlarını bir arada sunuyor. 
              <br />
              <br />
              Uygulamamızda bulabileceğiniz geniş yelpaze, her damak tadına
               uygun seçenekler sunuyor. Size en yakın veya tercih ettiğiniz 
               restoranın en güncel menüsüne ve fiyatlarına kolayca ulaşmanızı sağlayarak, 
               lezzetli bir deneyim için adım adım rehberlik ediyoruz.
            </p>

            <blockquote>
              Menu Rehberim kullanıcı deneyimini en üst düzeyde tutmayı amaçlar. İşletme ve müşterilerin tek bir platformda birleşmesini sağlar.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
