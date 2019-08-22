import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => { 
  const results = props.data;
  let photos;
  if (results.length > 0){
      //gets the photo data and maps the array, it builds the url as Flicker says.
      //Each photo is loaded in a Photo component
    photos = results.map(photo =>    
        <Photo url={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } key={ photo.id }/>
    );
  } else {
      //calls the NotFound component if we haven't get any data
    photos = <NotFound />
  }
  return(
      //displays in the browser the result
    <div className="photo-container">
        <h2>{props.title}</h2>
        <ul>
            {photos}
        </ul> 
    </div> 
  );
}

export default PhotoList;