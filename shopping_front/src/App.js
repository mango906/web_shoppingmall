import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './components/Main/Main';
import Category from './components/Category/Category';

const App = () => (
  <BrowserRouter>
    <div className="header-name">쇼핑몰</div>
    <header className="app-header">
      <ul className="menu-bar">
        <li>
          <Link to="/category">상의(남)</Link>
        </li>
        <li>
          <Link to="/">하의(남)</Link>
        </li>
        <li>
          <Link to="/">상의(여)</Link>
        </li>
        <li>
          <Link to="/">하의(여)</Link>
        </li>
        <li>
          <Link to="/">구두</Link>
        </li>
        <li>
          <Link to="/">가방</Link>
        </li>
        <li>
          <Link to="/">소품</Link>
        </li>
      </ul>
    </header>

    <section className="app-body">
      <Route exact path="/main" component={Main} />
      <Route path="/category" component={Category} />
    </section>
  </BrowserRouter>
);

export default App;
