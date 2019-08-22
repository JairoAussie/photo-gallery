import React, {Component} from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import './css/index.css';
import axios from 'axios';
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoList from './PhotoList';
import config from './config.js';
import ErrorPage from './ErrorPage.js';



export default class App extends Component {
  
  constructor() {
    super();
    //one state for each category, plus another one for the search
    this.state={
      dogs: [], 
      koalas: [], 
      kangaroos: [], 
      search: [],
      loading: true
    }
  }
  //getting the data for the three categories
  componentDidMount(){
    this.performSearch('dogs', 'dogs');
    this.performSearch('koalas', 'koalas');
    this.performSearch('kangaroos', 'kangaroos');
  } 
  //two parameters, the query and the category to store the info in the correct state
  performSearch = (query, category) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {

      this.setState({
        [category]: response.data.photos.photo,
        loading: false,
        title: query
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){
    return (
      
      <div className="container">
        <BrowserRouter>
        {// trying to display the loading message but it's not working
          (this.state.loading)
          ? <h1>Loading...</h1>
          : <SearchForm onSearch={this.performSearch} />
        }
          <Nav />
          { /*It will display a loading message if the data has been fetched */
          this.state.loading ? <p>Loading...</p> : (
            //Only will route the first match, the index page redirects to /dogs
            <Switch>
                <Route exact path='/' render={ ()=> <Redirect to={`/dogs`} /> }/>
                <Route path='/dogs' render={() => <PhotoList title="dogs" data={this.state.dogs}/>} />
                <Route path='/koalas' render={() => <PhotoList title="koalas" data={this.state.koalas}/>} />
                <Route path='/kangaroos' render={() => <PhotoList title="kangaroos" data={this.state.kangaroos}/>} />
                <Route path='/search' render={() => <PhotoList title={this.state.title} data={this.state.search} />} />
                <Route component={ErrorPage} />
            </Switch>  
            )   
          }
        </BrowserRouter>
              
      </div>
    );
  }
  
}

