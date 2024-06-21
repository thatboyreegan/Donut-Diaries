import React from 'react';
import './LandingPage.css';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import AboutUs from '../../components/AboutUs/AboutUs';
import Packages from '../../components/Packages/Packages';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Info/>
      <AboutUs/>
      <Packages/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
