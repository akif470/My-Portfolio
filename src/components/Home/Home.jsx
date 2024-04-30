import React from 'react';
import './Home.css';
import hero from '../../assets/me4.png';
import Resume from '../../assets/resume.pdf';
import star from '../../assets/star.png';

const Home = () => {
  return (
    <>
      <div className='mYcontainer container home'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6 col-sm-6 col-md-6 home-col'>
            <h1 className='home-h1'>Hello World!</h1>
            <h1 className='home-h1'>
              {' '}
              I'm <span className='myName'>Aakif </span>{' '}
              <img src={star} className='rooling_star' />
              {/* <span className='surName'>Mansoori</span> */}
            </h1>
            {/* <h1 className='home-h1 primary-text'>UX-UI developer</h1> */}
            <h1 className='home-h1 primary-text'>Front End Web Developer</h1>
            <a href={Resume} download className='resume-btn'>
              download resume
            </a>
          </div>
          <div className='col-lg-6 col-sm-6 col-md-6 home-col'>
            <img src={hero} className='home-img' />{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
