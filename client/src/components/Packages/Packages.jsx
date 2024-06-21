import React from 'react';
import './Packages.css';
import { packages } from '../../assets/assets';

const Packages = () => {
  return (
    <div className='packages'>
    <button>Delightful temptations</button>
    <div className='packages-display'>
        {packages.map((item)=> {
            return(
                <div>
                    <img src={item.image} alt='' className='package-image'/>
                    <p>{item.name}</p>
                    <p>{item.total}</p>
                </div>
            )
        })}
    </div>
      
    </div>
  );
}

export default Packages;
