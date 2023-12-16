import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PlaceEdit from './pages/PlaceEdit/PlaceEdit'
import { useLocation } from 'react-router-dom';
import MenuEdit from './pages/MenuEdit/MenuEdit'

function App() {

  const location = useLocation();


  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/PlaceEdit" element={<PlaceEdit location={location} />} />
      <Route path="/MenuEdit" element={<MenuEdit />} />


    </Routes>
    <Footer />
  </div>
  );
}

export default App;
