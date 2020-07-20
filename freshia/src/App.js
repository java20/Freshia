import React from 'react';
import Header from './FixedComponent/Header/header'
import Footer from './FixedComponent/Footer/footer'
import Features from './Home/features'
import BrandLogo from './FixedComponent/brandlogo'
import Home from './Home/Home_page'
import Grid from './Grid/grid'
import List from './List/list'
import ProductDetails from './ProductDetails/productdetails'
import ShoppingCart from './ShoppingCart/cart'
import Blog from './Blog/blog'
import BlogDetail from './BlogDetail/blogdetail'
import Checkout from './Checkout/checkout'
import WishList from './WishList/wishlist'
import Dashboard from './DashBoard/dashboard'
import MultipleAddresses from './MultipleAddresses/multipleaddresses'
import Compare from './Compare/compare'
import Login from './Login/login'
import AboutUs from './AboutUs/aboutus'
import Faq from './Faq/faq'
import ContactUs from './ContactUs/contactus'
import SiteMap from './SiteMap/sitemap';
import NewsLetter from './NewsLetter/newsletter'
import QuickView from './QuickView/quickview'
import PageNotFound from './404Error/pagenotfound'
import MobileMenu from './MobileMenu/mobilemenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  if(!window.location.pathname.includes('quickview')){
  return (
    <Router>
      <div className="App">
        <div id='page'>
        <Header />      {/** Fixed Component */}
        <Switch>
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
