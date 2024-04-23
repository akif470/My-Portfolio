import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SocialLinks from '../SocialLinks';

const Nav = () => {
  {
    /*const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);*/
  }
  return (
    <div className='mYcontainer nav-container container'>
      <Link to='/' className='nav-brand' data-aos='fade-right'>
        <span className='nav-brand large'>A</span>
        <span className='nav-brand'>a</span>
        <span className='nav-brand large'>kif.</span>
        coder
      </Link>
      <SocialLinks />
    </div>
  );
};

export default Nav;

{
  /* import { FaBars, FaTimes } from 'react-icons/fa'
<nav className={click ? 'nav' : 'nav-notactive'}>
	<Link to='/Nav' className='nav-links' onClick={handleClick}>01 Intro</Link>
	<Link to='/skills' className='nav-links' onClick={handleClick}>02 About me</Link>
	<Link to='skills' className='nav-links' onClick={handleClick}>03 my skills</Link>
	<Link to='contact' className='nav-links' onClick={handleClick}>04 contact me</Link>
</nav>
<div className="hamburger" onClick={handleClick}>
	{click ? (<FaTimes className='nav-btn' />)
		: (<FaBars className='nav-btn' />)}
</div> */
}
