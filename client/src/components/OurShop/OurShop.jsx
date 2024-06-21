import React, { useState } from 'react';
import './OurShop.css';
import { assets } from '../../assets/assets';

const OurShop = ({setShowPopUp}) => {
    const [currentState, setCurrentState] = useState('Login')
  return (
    <div className='our-shop'>
      <form className='ourshop-popup'>
        <div className='ourshop-popup-title'>
            <h2>{currentState}</h2>
            <img onClick={()=> setShowPopUp(false)} src={assets.cross} alt=''/>
        </div>
        <div className='ourshop-popup-inputs'>
        {currentState==="Login"? <></>: <input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button>{currentState==='Sign up'? "Create account":"Login"}</button>
        <div className='ourshop-popup-condition'>
            <input type='checkbox'/>
            <p>Agree to the terms and conditions & privacy policy</p>
        </div>
        {currentState==='Login'?
        <p>Create a new account? <span onClick={()=> setCurrentState('Sign up')}>Click here!</span></p>:
        <p>Already have an account? <span onClick={()=> setCurrentState('Login')}>Click here!</span></p>
        }
        
        
      </form>
    </div>
  );
}

export default OurShop;
