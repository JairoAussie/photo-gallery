import React from 'react';
//with the prop gets the url and the image is shown
const Photo = props => (
  <li>
    <img src={props.url} alt="" />
  </li>
);

export default Photo;