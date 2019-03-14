import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'all',
            faves: []
        }
        this.handleFilterClick = this.handleFilterClick.bind(this)
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
    }
    handleFilterClick(e) {
        console.log('handling filter click', e.target.innerText.slice(0, -1).toLowerCase())
        this.setState({
            filter: e.target.innerText.slice(0,-1).toLowerCase()
        })
    }
    handleFaveToggle(film) {
        console.log('toggling film', film)
        let newFaves = this.state.faves.slice()
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex > -1) {
            newFaves.splice(filmIndex, 1)
        } else {
            newFaves.push(film)
        }
        this.setState({
            faves: newFaves,
        })
    }
    render() {
        console.log('FilmListing rendering')
        let all = ' '
        let filter = ' '
        this.state.filter === 'all'? all += 'is-active' : filter += 'is-active'
        const filmsToDisplay = this.state.filter === 'all'? this.props.films : this.state.faves
        console.log('state', this.state)
        console.log('props', this.props)
        let allFilms = filmsToDisplay.map((film, i) => {
            return <FilmRow onDetailsClick={this.props.onDetailsClick} key={i} film={film} onFaveToggle={this.handleFaveToggle} isFave={this.state.faves.includes(film)? true : false}/>
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
                    <span className="section-count">{this.state.faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
        )
    }
}

export default FilmListing;