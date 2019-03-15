import React from 'react';

function FilmPoster(props) {
    return (
        <img src={"https://image.tmdb.org/t/p/w780/" + props.path} alt="Film Poster"/>
    )
}

export default FilmPoster;