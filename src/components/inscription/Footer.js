import React from 'react';
import './Footer.css';

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Footer = ({ text }) => {
  return (
    <div className='Footer'>
      <div className='bande'>
        <h3>Publiez votre offre de stage et trouvez des candidats de tous horizons.</h3>
      </div>

      <div className='titres'>
        <div className='recta'>
          <p>Depuis 1898</p>
        </div>
        <h1>INSTITUT NATIONAL  AGRONOMIQUE DE TUNISIE</h1>
        <h2>UN PÔLE D’EXCELLENCE</h2>
      </div>

      <div className='compte'>
        <h4>Mon compte</h4>
      </div>

      <div className='contact'>
        <h4>Contactez nous <br></br>(+216) 71 287 110 </h4>
      </div>

      <div className='sec'>
        <h4>Politique de confidentialité et <br></br>de securité de données</h4>
      </div>

      <div className='links'>
        <a href='https://www.facebook.com/INATunisie/'><FaFacebook className='icon2'/></a>
        <a href='https://www.facebook.com/INATunisie/'><FaInstagram className='icon1'/></a>
        <a href='mailto:dg@inat.ucar.tn '><ImMail4 className='icon3'/></a>
     
      </div>
    </div>
  )
  
};

export default Footer;