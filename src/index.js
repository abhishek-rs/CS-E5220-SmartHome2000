import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubMenu from './components/SubMenu.jsx';
import { createHashHistory } from 'history';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import './index.css';
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
    </Router>,
    document.getElementById('root')
);
