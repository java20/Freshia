import React from 'react';
import Header from './Components/FixedComponent/Header/header'
import Footer from './Components/FixedComponent/Footer/footer'
import Features from './Components/Home/features'
import BrandLogo from './Components/FixedComponent/brandlogo'
import Home from './Components/Home/Home_page'
import Grid from './Components/Grid/grid'
import List from './Components/List/list'
import ProductDetails from './Components/ProductDetails/productdetails'
import ShoppingCart from './Components/ShoppingCart/cart'
import Blog from './Components/Blog/blog'
import BlogDetail from './Components/BlogDetail/blogdetail'
import Checkout from './Components/Checkout/checkout'
import WishList from './Components/WishList/wishlist'
import Dashboard from './Components/DashBoard/dashboard'
import MultipleAddresses from './Components/MultipleAddresses/multipleaddresses'
import Compare from './Components/Compare/compare'
import Login from './Components/Login/login'
import AboutUs from './Components/AboutUs/aboutus'
import Faq from './Components/Faq/faq'
import ContactUs from './Components/ContactUs/contactus'
import SiteMap from './Components/SiteMap/sitemap';
import NewsLetter from './Components/NewsLetter/newsletter'
import QuickView from './Components/QuickView/quickview'
import PageNotFound from './Components/404Error/pagenotfound'
import MobileMenu from './Components/MobileMenu/mobilemenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  if(!window.location.pathname.includes('quickview')){
  return (
    <Router>
      <div className="App">
        <div id='page'>
        <Header />      {/** Fixed Component */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/grid' component={Grid} />
          <Route path='/list' component={List} />
          <Route path='/productdetails' component={ProductDetails} />
          <Route path='/shoppingcart' component={ShoppingCart} />
          <Route path='/blog' component={Blog} />
          <Route path='/blogdetail' component={BlogDetail} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/wishlist' component={WishList} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/multipleaddresses' component={MultipleAddresses} />
          <Route path='/compare' component={Compare} />
          <Route path='/login' component={Login} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/faq' component={Faq} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/sitemap' component={SiteMap} />
          <Route path='/newsletter' component={NewsLetter} />
          <Route path='/404error' component={PageNotFound} />
        </Switch>
        <BrandLogo />   {/** Fixed Component */}
        {
          !window.location.pathname.includes('home') && <Features />
        }
        <Footer />      {/** Fixed Component */}
        </div>
        <MobileMenu />  {/** Fixed and component for mobile menu only */}
      </div>
    </Router>
  )
  }
  else{
    return(
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/quickview' component={QuickView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
