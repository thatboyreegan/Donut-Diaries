import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import PlaceOrderPage from './pages/PlaceOrderPage/PlaceOrderPage';
import CartPage from './pages/CartPage/CartPage';
import OurShop from './components/OurShop/OurShop';

const App = () => {

  const [showPopUp, setShowPopUp] = useState(false)
  return (
    <>
    {showPopUp ? <OurShop setShowPopUp={setShowPopUp}/>: <></>}
      <div className='app'> 
      <Navbar setShowPopUp={setShowPopUp}/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/basket' element={<CartPage/>}/>
        <Route path='/order' element={<PlaceOrderPage/>}/>
      </Routes>
    </div>
    
    </>
    
  );
}

export default App;
