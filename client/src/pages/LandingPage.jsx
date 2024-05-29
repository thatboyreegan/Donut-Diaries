import React from 'react';


const LandingPage = () => {

  

  return (
    <div className='landingPage'>
    <div className='nav'>
    <div className='home'><h1>Home</h1></div>
    <div className='menu'><h1>Menu</h1></div>
    <div className='search'><h1>search</h1></div>
    <div className='basket'><h1>basket</h1></div>
    <div className='sign-up'><h1>sign up</h1></div>
    <div className='sign-in'><h1>sign in</h1></div>
    </div>
    <div className='text-component'>
    <h2>This is the vision statement</h2>
    <p>Order some of the best pastries and beverages from us and get to satisfy your cravings</p>
    </div>
    <div className='ellipse'>
      this is an ellipse
    </div>
    <div className='sample-order'>
      <ul>
        <li>food item 1</li>
        <li>food item 2</li>
        <li>food item 3</li>
        <li>food item 4</li>
        <li>food item 5</li>
      </ul>
    </div>
    <div className='carousel'>
      <div className='food-item'>item 1</div>
      <div className='food-item'>item 2</div>
      <div className='food-item'>item 3</div>
    </div>
    <div className='customer-reviews'>
      <div className='review'>review 1</div>
      <div className='review'>review 2</div>
      <div className='review'>review 3</div>
    </div>
    <div className='footer'>
    <div className='media-icons'>
      media-icons
    </div>
      <div className='about'>
        About
      </div>
      <div className='support'>
        Support
      </div>
      <div className='blog'>
        Blog
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
