import React, { Component } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(e) {
        console.log('handling click in Fave component');
    }
    render() {
        return (
            <div onClick={this.handleClick} className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave;