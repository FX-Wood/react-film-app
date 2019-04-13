import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

export default function FilmRow({onDetailsClick, odc, isFave, film, onFaveToggle}) {
    return (
        <div onClick={() => {onDetailsClick(film)}} className="film-row">
            <FilmPoster path={film.poster_path} />
            <div className="film-summary">
                <h1>{film.title}</h1>
                <p>{film.release_date.slice(0,4)}</p>
            </div>
            <Fave isFave={isFave} onFaveToggle={() => { onFaveToggle(film)}} />
        </div>
    )
}