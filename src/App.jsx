import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      current: {}
    }
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleDetailsClick(film) {
    console.log('fetching details for ' + film.title)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images&language=en` 
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({
        current: response.data
      })
    })
  }

  render() {
    console.log('App rendering')
    return (
        <div className="film-library">
          <FilmListing onDetailsClick={this.handleDetailsClick} films={this.state.films}/>
          <FilmDetails film={this.state.current}/>
        </div>
    );
  }
}

export default App;