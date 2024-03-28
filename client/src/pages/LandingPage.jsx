import React from 'react';
import CommonNavBar from '../components/NavBar';


const LandingPage = () => {
  return (
    <div>
    <CommonNavBar></CommonNavBar>
      <header>
        <div className='landingPage'>
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
