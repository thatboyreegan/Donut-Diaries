import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={assets.footer_logo} alt=''/>
        <p>We invite you to join us on a delectable journey into the world of tasty pastries and delightful drinks!</p>
      </div>
      <div className='footer-info'>
        <div className='reach-us'>
            <h3>Reach us at:</h3>
            <h4>Store Address</h4>
            <p>Random street name</p>
            <p>Random city country code</p>
            <h4>Email</h4>
            <p>arandomemail@gmail.com</p>
        </div>
        <div className='subscribe'>
            <p>Get notified about promotional and features changes</p>
            <input type='email' placeholder='Your email'></input>
            <button>Subscribe</button>
            <hr></hr>
            <ul className='footer-menu'>
                <li>How it works</li>
                <li>About us</li>
                <li>Blog</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
