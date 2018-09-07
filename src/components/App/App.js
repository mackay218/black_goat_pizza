import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import SelectPage from '../SelectPage/SelectPage.js';
import CustomerPage from '../CustomerPage/CustomerPage.js';
import CheckoutPage from '../CheckoutPage/CheckoutPage.js';
import AdminPage from '../AdminPage/AdminPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <style>
            @import url('https://fonts.googleapis.com/css?family=Fauna+One');
          </style>
          <Header />
          <Route path="/select" component={SelectPage} />
          <Route path="/customer" component={CustomerPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;
