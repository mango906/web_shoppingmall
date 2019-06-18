import React from 'react';
import './styles/base.scss';
import './App.scss';
import Register from './components/Register';
import Login from './components/Login';
import { Provider } from 'mobx-react';
import stores from './stores';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
  <Provider stores={stores}>
    <BrowserRouter>
      <header className="app-header">
        <ul className="menu-bar">
          <li>
            <Link to="/">상의(남)</Link>
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
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
      </section>
    </BrowserRouter>
  </Provider>
);

export default App;
