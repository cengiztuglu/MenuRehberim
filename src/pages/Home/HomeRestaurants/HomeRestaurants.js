

import "./HomeRestaurants.css";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const AmazingMeal = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // API'den verileri almak için bir istek yapılabilir
    fetch('http://localhost:8081/api/getPlace')
  .then(response => response.json())
  .then(data => {
    // Gelen verileri id'ye göre sırala
    const sortedPlaces = data.sort((a, b) => a.id - b.id);
    setPlaces(sortedPlaces);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }, []);

  return (
    <div className="section">
      <div className="container">
        <span>
          <h2 className='heading-secondary'>
            <span className='special-word-center'>Restoranlar</span>
          </h2>
        </span>

        <div className="amazing-card-container">
          {places.map((place, index) => (
            <div className={`amazing-card amazing-card-${index % 2 === 0 ? 'left' : 'right'}`} key={place.id}>
              {/* Restoran resmi veya diğer özellikler buraya eklenebilir */}
              <div className="amazing-card-content">
                <div className="amazing-card-title">
                  <BsFillStarFill color="#c3512f" />
                  <h3 className="heading-tertiary">
                    <span>{place.restourantName}</span>
                  </h3>
                </div>
                <p>{place.placeDefinition}</p>
                <p>{place.placeAdress}</p>
                <p>{place.category}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;