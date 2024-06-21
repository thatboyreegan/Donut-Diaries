import React from 'react';
import './Features.css';
import { assets } from '../../assets/assets';

const Features = () => {
  return (
    <div>
    <button>Features of our products</button>
    <div className='features'>
    
      <div className='feature'>
        <img src={assets.creative} alt=''/>
        <p>Creative and playful product packaging</p>
      </div>
      <div className='feature'>
        <img src={assets.flavourful} alt=''/>
        <p>Flavourful products!</p>
      </div>
      <div className='feature'>
        <img src={assets.bread} alt=''/>
        <p>Freshly baked products</p>
      </div>
    </div>
    </div>
    
  );
}

export default Features;
