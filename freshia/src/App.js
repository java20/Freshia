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
import Checkout from './checkout/checkout'
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
