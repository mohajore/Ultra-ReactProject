import React, { Component } from 'react';


import Home from './../Home';
import Portfolio from './../Portfolio';
import NavBar from './../NavBar';

import Profile from './../Profile';
import SocialMeadia from './../SocialMeadia';
import About from './../About';
import Footer from './../Footer';
import Work from './../Work';
class Index extends Component {
  render(){
  return (
    <div className="App">
     
     <Home/>
     <Work/>
     <Portfolio/>
     <Profile/>
     <About/>
     <SocialMeadia/>
     <Footer/>
    
    </div>
  );
}
}
export default Index;
