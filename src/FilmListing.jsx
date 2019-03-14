import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    constructor(props) {
        super(props)
        this.handleFilterClick = this.handleFilterClick.bind(this)
    }
    handleFilterClick(e) {
        console.log('handling filter click', e.target.innerText)
    }
    render() {
        var allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow key={i} film={film} />
            )
        })
        return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div onClick={this.handleFilterClick} className="film-list-filter">
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div onClick={this.handleFilterClick} className="film-list-filter">
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>

            {allFilms}
        </div>
        )
    }
}

export default FilmListing;