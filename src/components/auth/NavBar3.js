import React from 'react';
import './NavBar.css';
import logo from '../auth/logo.png';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Import Link

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' />
      <div className='haute-gauche'>
        <div className='rect'>
          <p id="date">Depuis 1898</p>
        </div>
        <h1>INSTITUT NATIONAL AGRONOMIQUE DE TUNISIE</h1>
        <h2>UN PÔLE D’EXCELLENCE</h2>
      </div>
      <div className='haute-droit'>

      </div>
    </nav>
  );
};

export default NavBar;
