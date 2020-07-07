import React from 'react';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import BrandLogo from './components/brandlogo'
import Home from './components/Home_page'
import Grid from './component2/Grid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div id='page'>
        <Header />      {/** Fixed Component */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/grid' exact component={Grid} />
        </Switch>
        <BrandLogo />   {/** Fixed Component */}
        <Footer />      {/** Fixed Component */}
        </div>
      </div>
    </Router>
  );
}

export default App;
