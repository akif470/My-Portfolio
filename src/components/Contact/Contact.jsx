import React from 'react';
import './Contact.css';
import Mansion from '../../assets/mansion-img.svg';
import ContactHeadData from '../../Data/ContactHeadData';
import Hire from '../Hire/Hire';

const Contact = () => {
  return (
    <>
      <Hire {...ContactHeadData} />
      <div
        id='contact'
        className='mYcontainer container contact'
        data-aos='zoom-in'
        data-aos-delay='400'
      >
        <div className='row'>
          <div className='col-lg-6 col-md-6 contact-col'>
            <div className='contact-box'>
              <form
                action='https://formspree.io/f/xayrykbl'
                method='POST'
                className='contact-form'
              >
                <input
                  type='text'
                  name='username'
                  placeholder='Your Name'
                  autoComplete='off'
                  required
                  className='contact-input'
                  style={{ height: '55px' }}
                />

                <input
                  type='email'
                  name='Email'
                  placeholder='Your Email'
                  autoComplete='off'
                  required
                  className='contact-input'
                  style={{ height: '55px' }}
                />

                <textarea
                  name='message'
                  cols='30'
                  rows='6'
                  autoComplete='off'
                  required
                  placeholder='Your Message'
                  className='contact-input textarea'
                ></textarea>
                <input type='submit' value='Send' className='contact-btn' />
              </form>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 contact-img-col'>
            <img
              src={Mansion}
              style={{ width: '100%', background: '#ffddcc' }}
              className='graph-img'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
