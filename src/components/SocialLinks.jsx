import React from 'react';
import insta from '../assets/social1.png';
import linkedin from '../assets/social2.png';
import github from '../assets/social3.png';

const SocialLinks = () => {
  return (
    <div className='social-icons' data-aos='fade-left'>
      <a
        className='social-icon'
        href='https://github.com/akif-debug'
        target='_blank'
      >
        <img className='social-img' src={github} />
      </a>
      <a
        className='social-icon'
        href='https://www.linkedin.com/in/aakif-mansoori-091b5413a/'
        target='_blank'
      >
        <img className='social-img' src={linkedin} />
      </a>
      <a
        className='social-icon'
        href='https://www.instagram.com/aakifff.qadri/'
        target='_blank'
      >
        <img className='social-img' src={insta} />
      </a>
    </div>
  );
};

export default SocialLinks;
