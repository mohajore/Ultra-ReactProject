import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';


import Index from './Component/index';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';
class App extends Component {
  render(){
  return (
    <BrowserRouter >
     <NavBar/>
     <Route exact path='/' component={Index}></Route>
     <Route path='/Contact' component={Contact} ></Route>
     
     
    
    </BrowserRouter>
  );
}
}
export default App;
