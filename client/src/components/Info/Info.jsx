import React from 'react';
import './info.css';
import { assets } from '../../assets/assets';

const Info = () => {
  return (
    <div className='info-bar'>
      <div className='promocodes'>
      <img src={assets.promocode} alt=''/>
        <p>Weekly promocodes Value ksh 300</p>
      </div>
      <div className='promo-info'>
        <p>Get a taste of our delicously fresh and delighfully sweet products</p>
      </div>
      <div className='overall-rating'>
        <img src={assets.creative} alt=''/>
        <p>Overall rating is 4.7</p>
      </div>
    </div>
  );
}

export default Info;
