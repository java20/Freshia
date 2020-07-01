import React from 'react';
import Header from './components/Header/header'
import Slider from './components/Slider/slider'
import Features from './components/features'
import BrandLogo from './components/brandlogo'
import Footer from './components/Footer/footer'
import NewProducts from './components/newproducts';
//import './App.css';

function App() {
  return (
    <div className="App">
      <div id='page'>
        <Header />
        <Slider />
        <Features />
        {/* <NewProducts /> */}
        <BrandLogo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
