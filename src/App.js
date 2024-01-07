import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hire from './components/Hire/Hire'
import ProjectHead from './components/Project/ProjectHead'
import HireData from './Data/HireData'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import GotoTop from './components/GotoTop'

function App() {
  return (
    <>
      <Router>
        {/*Nav*/}
        <Nav />
        {/*Home*/}
        <Home />
        {/* Hire */}
        <Hire {...HireData} />
        {/*Skills*/}
        <Skills />
        {/*ProjectHead*/}
        <ProjectHead />
        {/*Project*/}
        <Project />
        {/* Contact */}
        <Contact />
        {/* <GotoTop /> */}
        {/* Footer */}
        <Footer />
        <Routes>
          <Route exact path='/'></Route>
        </Routes>
      </Router>
      {/* SHAPES */}
      <div class="shape-1" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="900" data-aos-duration="500"></div>
      <div class="shape-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="900" data-aos-duration="500"></div>
      <div class="shape-3" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="900" data-aos-duration="500"></div>
      <div className='onNotSupportedDevice'>
        <span className='onNotSupportedDevice-span'>The Portfolio isn't Supported on your device please try it on a different device</span>
      </div>
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </>
  );
}

export default App;
