import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({setShowPopUp}) => {
    const [menu, setMenu] = useState('');
  return (
    <div className='navbar'>
      <img className='logo' src={assets.navbarlogo} alt=''/>
      <ul className='navbar-menu'>
        <li className={menu==='home'? 'active': 'not-active'} onClick={()=> setMenu('home')}>Home</li>
        <li className={menu==='about us'? 'active': 'not-active'} onClick={()=> setMenu('about us')}>About us</li>
        <li className={menu==='contact us'? 'active': 'not-active'} onClick={()=> setMenu('contact us')}>Contact us</li>
      </ul>
      <div className='navbar-right'>
      <div className='navbar-basket-icon'>
        <img src={assets.basket} alt='' className='basket-icon'/>
        <div className='dot'></div>
      </div>
        <button onClick={()=> setShowPopUp(true)}>OUR SHOP</button>
      </div>
    </div>
  );
}

export default Navbar;
