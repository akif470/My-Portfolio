import React from 'react';
import AboutSkillsData from '../../Data/AboutSkillsData';
import AboutToolsData from '../../Data/AboutToolsData';
import Resume from '../../assets/resume.pdf';
import './AboutSkills.css';

const AboutSkills = () => {
  return (
    <div className='mYcontainer container skills' data-aos='zoom-in'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <h2 className='skills-h2 heading'>
            about me, <span className='hire-span'>Who I am</span>
          </h2>
          <p
            className='pro-heading'
            style={{
              textAlign: 'justify',
              width: '95%',
              marginBottom: '1.2rem',
            }}
          >
            As a front-end deveoloper, I am skilled in Javascript, React.Js,
            HTML, CSS, Bootstrap, Sass. I have a meticulous eye for design which
            allows me to create beautiful, responsive websites from the ground
            up. My specialty involes utilizing my creativity and problem-solving
            skills to create unique and engaging user experiences.
          </p>
          <a href={Resume} download className='resume-btn'>
            download resume
          </a>
        </div>
        <div className='col-lg-6 col-md-6'>
          <h2 className='skills-h2 heading'>
            skill stack
            {/* <span className='hire-span'>What I'm good at</span> */}
          </h2>
          <div className='row skills-container d-flex'>
            <h4 className='pro-heading'>Technical skills</h4>
            {AboutSkillsData.map((item) => {
              return (
                <div className={item.className}>
                  <div className='skills-box'>
                    <img
                      src={item.skillImg}
                      alt={item.skillName}
                      className='skills-icon'
                    />
                    <p className='skills-name'>{item.skillName}</p>
                  </div>
                </div>
              );
            })}
            <h4 className='pro-heading mt-4'>Technical tools</h4>
            {AboutToolsData.map((item) => {
              return (
                <div className={item.className}>
                  <div className='skills-box'>
                    <img
                      src={item.toolImg}
                      alt={item.skillName}
                      className='skills-icon'
                    />
                    <p className='skills-name'>{item.skillName}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
