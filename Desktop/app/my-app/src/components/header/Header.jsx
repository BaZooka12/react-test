import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className='head'>
    <nav>
      <ul>
        <li><NavLink activeClassName='active' to={'/home'}>home</NavLink></li>
        <li><NavLink activeClassName='active' to={'/profile'}>Profile</NavLink></li>
        <li><NavLink activeClassName='active' to={'/login'}>login</NavLink></li>
        <li><NavLink activeClassName='active' to={'/registration'}>registration</NavLink></li>
      </ul>
    </nav>
    <h1>{props.title}</h1>
  </header>
)

export default Header;