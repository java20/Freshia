import React from 'react';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import BrandLogo from './components/brandlogo'
import Home from './components/Home_page'
import Grid from './component2/Grid'
import List from './listcomponent/list'
import ProductDetails from './productdetailscomp/productdetails'
import ShoppingCart from './shopping_cartComp/cart'
import Blog from './blogcomponent/blog'
import BlogDetail from './blogdetailcomponent/blogdetail'
import Checkout from './checkoutcomponent/checkout'
import WishList from './wishlistcomponent/wishlist'
import Dashboard from './dashboard/dashboard'
import MultipleAddresses from './multipleaddresses/multipleaddresses'
import Compare from './comparecomponent/compare'
import Login from './logincomponent/login'
import AboutUs from './aboutus/aboutus'
import Faq from './faqcomponent/faq'
import ContactUs from './contactus/contactus'
import SiteMap from './sitemap/sitemap';
import MobileMenu from './mobilemenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div id='page'>
        <Header />      {/** Fixed Component */}
        <Switch>
          <Route path='/' exact component={Home} />
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
        </Switch>
        <BrandLogo />   {/** Fixed Component */}
        <Footer />      {/** Fixed Component */}
        </div>
        <MobileMenu />  {/** Fixed and component for mobile menu only */}
      </div>
    </Router>
  );
}

export default App;
