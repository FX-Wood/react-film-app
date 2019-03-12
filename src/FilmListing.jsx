import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    render() {
        var allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow film={film} />
            )
        })
        return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            {allFilms}
        </div>
        )
    }
}

export default FilmListing;