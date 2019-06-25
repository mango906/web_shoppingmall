import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Detail from './components/Detail/Deatil';

const App = () => (
  <BrowserRouter>
    <div className="header-name">
      <Link to="/main">쇼핑몰</Link>
    </div>
    <header className="app-header">
      <ul className="menu-bar">
        <li>
          <Link to="/category/0">상의(남)</Link>
        </li>
        <li>
          <Link to="/category/1">하의(남)</Link>
        </li>
        <li>
          <Link to="/category/2">상의(여)</Link>
        </li>
        <li>
          <Link to="/category/3">하의(여)</Link>
        </li>
        <li>
          <Link to="/category/4">구두</Link>
        </li>
        <li>
          <Link to="/category/5">가방</Link>
        </li>
        <li>
          <Link to="/category/6">소품</Link>
        </li>
      </ul>
    </header>

    <section className="app-body">
      <Route exact path="/main" component={Main} />
      <Route path="/category/:type" component={Category} />
      <Route path="/detail/:idx" component={Detail} />
    </section>
  </BrowserRouter>
);

export default App;
