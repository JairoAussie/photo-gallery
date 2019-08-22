import React from 'react';
//This Component is shown when there aren't matches with the search
const NotFound = props => (
  <li className='not-found'>
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </li>
);

export default NotFound;