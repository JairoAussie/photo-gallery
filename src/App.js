import React, {Component} from 'react';

import './css/index.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoList from './PhotoList';
import config from './config.js';



export default class App extends Component {
  
  constructor() {
    super();
    this.state={
      photos: [], 
      loading: true
    }
  }
  componentDidMount(){
    /* Fetch API
      fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(responseData => {
        this.setState({gifs: responseData.data})
      })
      .catch(error => {
        console.log('Error fetching and parsing data: '+error);
      })
    */
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=kangaroo&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  } 
  render(){
    console.log(this.state.photos);
    return (
      
      <div className="container">
        <SearchForm /*onSearch={this.performSearch}*//>
        <Nav />
        {
          (this.state.loading)
          ? <h1>Loading...</h1>
          : <PhotoList data={this.state.photos}/>
        }
        
      </div>
    );
  }
  
}

