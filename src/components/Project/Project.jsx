import React from 'react';
import './Project.css';
import ProjectData from '../../Data/ProjectData';

const Project = () => {
  return (
    <div className='mYcontainer container project'>
      <div className='row'>
        {ProjectData.map((item) => {
          return (
            <div className='col-lg-6'>
              <div
                className='pro-box'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-delay='300'
                data-aos-duration='1200'
              >
                <img className='pro-img pro-desktop' src={item.imgD} />
                <img className='pro-img pro-mobile' src={item.imgM} />
                <div className='pro-content'>
                  <div className='pro-headings'>
                    <h3 className='pro-heading'>{item.heading}</h3>
                    <p className='pro-para'>
                      <span>{item.span}</span>
                    </p>
                  </div>
                  <div>
                    <a href={item.url} target='_blank'>
                      <button className='pro-btn'>live view</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
