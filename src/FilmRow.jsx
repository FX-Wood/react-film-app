import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

class FilmRow extends Component {
    render() {
        return (
            <div onClick={() => {this.props.onDetailsClick(this.props.film)}} className="film-row">
                <FilmPoster path={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.slice(0,4)}</p>
                </div>
                <Fave isFave={this.props.isFave} onFaveToggle={() => { this.props.onFaveToggle(this.props.film)}} />
            </div>
        )
    }
}

export default FilmRow;