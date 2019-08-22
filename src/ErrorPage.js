import React from 'react';
//This Component is shown when something incorrect is typed in the browser
const ErrorPage = props => (
  <li className='not-found'>
    <h3>Error 404</h3>
    <p>Sorry... This page doesn't exist</p>
  </li>
);

export default ErrorPage;