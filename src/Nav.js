import React from 'react';
//import { Route, NavLink, Redirect } from 'react-router-dom';

//import PhotoList from './PhotoList';



const Nav = ({match}) => (
    <nav className="main-nav">
    <ul>
      <li><a href='#'>Dogs</a></li>
      <li><a href='#'>Koalas</a></li>
      <li><a href='#'>Kangaroos</a></li>
    </ul>
  </nav>
);

export default Nav;
