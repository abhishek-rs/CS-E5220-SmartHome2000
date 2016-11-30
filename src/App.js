import React, { Component } from 'react';
import logo from './logos/logo.svg';
import './App.css';
import SubMenu from './components/SubMenu.jsx';
import { createHashHistory } from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';

import SideBar from './components/Side-Bar.jsx';
import MainMenu from './components/MainMenu.jsx';
class App extends Component {


  render() {
    const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
    return (
      <div className="App">
      {/*  <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hell!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <SideBar />
          <MainMenu />



      </div>
    );
  }
}

export default App;
