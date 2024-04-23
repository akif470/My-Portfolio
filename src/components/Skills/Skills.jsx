import React from 'react';
import graphImg from '../../assets/graph1.svg';
import './Skills.css';
import Resume from '../../assets/resume/resume3.pdf';
import SkillsData from '../../Data/SkillsData.json';

const Skills = () => {
  return (
    <div className='mYcontainer container skills' data-aos='zoom-in'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <img src={graphImg} className='graph-img' />
        </div>
        <div className='col-lg-6 col-md-6'>
          <h2 className='skills-h2 heading'>
            {/*my forever skills*/}my best skills
          </h2>
          {/* <p className='skills-para'>I am still learning</p> */}
          {SkillsData.map((item) => {
            return (
              <div className='skills-box'>
                <div className='details'>
                  <span className='skillName'>{item.skills}</span>
                  <span className='percentage'>{item.percentage}</span>
                </div>
                <div className='bar'>
                  <div className='skill-bar' id={item.id}></div>
                </div>
              </div>
            );
          })}
          <div style={{ marginTop: '14px' }}>
            <a href={Resume} download className='resume-btn'>
              download resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
