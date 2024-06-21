import React from 'react';
import './Header.css';
import { assets, hot_deal } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
    <div className='header-contents-right'>
        <h2>Where every bite is a delight!</h2>
        <div className='hot-deal'>
            <h3>Today's hot deal</h3>
            <ul className='item-list'>
                {hot_deal.map((item)=> {
                    return (
                        <li>{item.name}</li>
                    )
                })}
            </ul>
            <div className='price-and-order'>
            <p>Ksh {0}</p>
            <button>Order Now!</button>
            </div>
            
        </div>
    </div>
    <div className='header-contents-left'>
        <img  src={assets.first_header_photo} alt=''/>
        <img  src={assets.second_header_photo} alt=''/>
        <img  src={assets.third_header_photo} alt=''/>
    </div>
      
    </div>
  );
}

export default Header;
