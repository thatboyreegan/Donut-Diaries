import React from 'react';
import CommonNavBar from '../components/NavBar';
//import pexels-amanda-hemphill-7440350.png from '../assets'


const LandingPage = () => {

  

  return (
    <div style={{
          backgroundColor: 'green'
        }}>
    <CommonNavBar></CommonNavBar>
      <header>
        <div className='landingPage' >
            <h2>Welcome to Donut dairies!</h2>
            <h3>We are committed to ensuring your donut cravings attended to without any hitches whatsoever.</h3>
            <h1>Login</h1>
            <h1>Sign up</h1>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
