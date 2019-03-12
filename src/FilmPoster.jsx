import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        return (
            <img src={"https://image.tmdb.org/t/p/w780/" + this.props.path} alt="Film Poster"/>
        )
    }
}

export default FilmPoster;