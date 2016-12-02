import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubMenu from './components/SubMenu.jsx';
import { createHashHistory } from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import './index.css';
import Login from './components/Login.jsx';
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
ReactDOM.render(
    <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App } />
        <Route path="/submenu/(:subId)" component= { SubMenu } />
        <Route path="/login" component={ Login } />
    </Router>,
    document.getElementById('root')
);
