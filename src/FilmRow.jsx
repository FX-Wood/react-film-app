import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

class FilmRow extends Component {
    constructor(props) {
        super(props)
        
        this.handleDetailsClick = this.handleDetailsClick.bind(this)
    }
    handleDetailsClick(e) {
        e.stopPropagation()
        console.log('handling details click')
    }
    render() {
        return (
            <div onClick={this.handleDetailsClick} className="film-row">
                <FilmPoster path={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.slice(0,4)}</p>
                </div>
                <Fave />
            </div>
        )
    }
}

export default FilmRow;