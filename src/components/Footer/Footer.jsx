import React from 'react';
import './Footer.css';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className='mYcontainer footer-box'>
        <div className='copyright' data-aos='fade-right' data-aos-delay='400'>
          &copy; Copyright
          <span className='footer-brand'> Aakif.Coder </span>
          all rights reserved
        </div>
        <div className='footer-links'>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
