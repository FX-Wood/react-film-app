import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'all'
        }
        this.handleFilterClick = this.handleFilterClick.bind(this)
    }
    handleFilterClick(e) {
        console.log('handling filter click', e.target.innerText.slice(0, -1).toLowerCase())
        this.setState({
            filter: e.target.innerText.slice(0,-1).toLowerCase()
        })
    }
    render() {
        let all = ' '
        let filter = ' '
        this.state.filter === 'all' ? all += 'is-active' : filter += 'is-active'
        let allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow key={i} film={film} />
            )
        })
        return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div onClick={this.handleFilterClick} className={"film-list-filter" + all}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div onClick={this.handleFilterClick} className={"film-list-filter" + filter}>
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