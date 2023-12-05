import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Delivery from './pages/Delivery/Delivery'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'

function App() {
  return (
    <div>
     <Login/>
    </div>
  );
}

export default App;
