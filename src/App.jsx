import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="filmLibrary">
          <FilmListing films={TMDB.films}/>
        </div>
          <FilmDetails films={TMDB.films}/>
      </div>
    );
  }
}

export default App;
