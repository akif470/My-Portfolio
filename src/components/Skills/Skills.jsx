import React from 'react';
import graphImg from '../../assets/graph1.svg';
import './Skills.css';
// import Resume from '../../assets/resumeNov2023.pdf';
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
            {/*my forever skills*/}my skills
          </h2>
          <p className='skills-para'>
            Front End web Development
            <p className='skills-para_child'>
              i am still at the stage of learning
            </p>
          </p>
          {SkillsData.map((item) => (
            <div className='skills-box'>
              <div className='details'>
                <span className='skillName'>{item.skills}</span>
                <span className='percentage'>{item.percentage}</span>
              </div>
              <div className='bar'>
                <div className='skill-bar' id={item.id}></div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '14px' }}>
            {/* <a href={Resume} download className='resume-btn'>
              download resume
            </a> */}
            <a href={''} download className='resume-btn'>
              download resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
