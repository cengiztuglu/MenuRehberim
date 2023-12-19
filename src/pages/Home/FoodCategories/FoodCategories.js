
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import "./FoodCategories.css";

function PillsExample({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const handleSelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <Nav variant="pills" defaultActiveKey="./menu" className="pill-nav">
      <Nav.Item className="navitem">
        <Nav.Link eventKey="hepsi" onClick={() => handleSelect('Hepsi')} active={selectedCategory === 'Hepsi'}>
          Hepsi
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navitem">
        <Nav.Link eventKey="hamburger" onClick={() => handleSelect('Hamburger')} active={selectedCategory === 'Hamburger'}>
          Hamburger
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="navitem">
        <Nav.Link eventKey="pizza" onClick={() => handleSelect('Pizza')} active={selectedCategory === 'Pizza'}>
          Pizza
        </Nav.Link>
      </Nav.Item>
      {/* Diğer kategoriler burada eklenecek */}
    </Nav>
  );
}

export default PillsExample;