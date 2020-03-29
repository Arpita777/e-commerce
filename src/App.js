import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import HomePage from './page/HomePage/HomePage'
import ShopPage from './page/ShopPage/shopPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/' component={HomePage} />
         
        </Switch>
       
      </div>
    );
  }
}

export default App;
