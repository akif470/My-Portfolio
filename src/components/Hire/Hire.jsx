import React from 'react';
import './Hire.css';

const Hire = ({ heading, span, para }) => {
  return (
    <div className='mYcontainer container hire'>
      <div className='row hire-box'>
        <div className='col-lg-9 col-sm-8 col-md-9 col-8' data-aos='fade-right'>
          <h2 className='hire-h2 heading'>
            {heading}
            <span className='hire-span'>{span}</span>
          </h2>

          <p className='hire-para'>{para}</p>
        </div>
        <div className='col-lg-3 col-sm-4 col-md-3 col-4 hire-col'>
          <a href='#contact'>
            <button className='hire-button' data-aos='fade-left'>
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hire;
