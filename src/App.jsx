import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

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
    console.log('fetching details for ' + this.props.film.title)
    this.setState({
      current: film
    })
  }

  render() {
    console.log('App rendering')
    return (
        <div className="film-library">
          <FilmListing onDetailsClick={this.handleDetailsClick} films={this.state.films}/>
          <FilmDetails films={this.state.current}/>
        </div>
    );
  }
}

export default App;