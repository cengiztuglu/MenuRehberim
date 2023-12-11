import Nav from 'react-bootstrap/Nav';
import "./FoodCategories.css";


function PillsExample() {
  return (

    <Nav variant="pills" defaultActiveKey="./menu" class="pill-nav">
      <Nav.Item class="navitem">
        <Nav.Link eventKey="link-1">Hepsi</Nav.Link>
      </Nav.Item>
      <Nav.Item class="navitem">
        <Nav.Link eventKey="link-1">Hamburger</Nav.Link>
      </Nav.Item>
      <Nav.Item class="navitem">
        <Nav.Link eventKey="link-1">Pizza</Nav.Link>
      </Nav.Item>
      <Nav.Item class="navitem"> 
        <Nav.Link eventKey="link-1">Tatlı</Nav.Link>
      </Nav.Item>
      <Nav.Item class="navitem">
        <Nav.Link eventKey="link-1">Tavuk</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default PillsExample;