import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

function FilmRow(props) {
    return (
        <div onClick={() => {props.onDetailsClick(props.film)}} className="film-row">
            <FilmPoster path={props.film.poster_path} />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.slice(0,4)}</p>
            </div>
            <Fave isFave={props.isFave} onFaveToggle={() => { props.onFaveToggle(props.film)}} />
        </div>
    )
}

export default FilmRow;