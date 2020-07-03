import React from 'react';
import Header from './components/Header/header'
import Slider from './components/Slider/slider'
import Features from './components/features'
import BrandLogo from './components/brandlogo'
import Footer from './components/Footer/footer'
import NewProducts from './components/NewProducts/newproducts'
import BestProducts from './components/BestSellers/bestseller'
import CustomerReviews from './components/customerreviews'
import FeaturedProducts from './components/FeaturedProducts/featuredproducts';
import LatestBlog from './components/latestblog'
//import './App.css';

function App() {
  return (
    <div className="App">
      <div id='page'>
        <Header />      {/** Fixed Component */}
        <Slider />
        <Features />
        <NewProducts />
        <BestProducts />
        <CustomerReviews />
        <FeaturedProducts />
        <LatestBlog />
        <BrandLogo />   {/** Fixed Component */}
        <Footer />      {/** Fixed Component */}
      </div>
    </div>
  );
}

export default App;
