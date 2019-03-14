import React, { Component } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFave: false
        }
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(e) {
        console.log('handling click in Fave component');
        this.setState( state => {
            return {isFave: !state.isFave}
        })
        this.className ('add_to_queue')
        this.classList.toggle('remove_from_queue')
    }
    render() {
        let className = 'film-row-fave';
        this.state.isFave? className += ' remove_from_queue': className += ' add_to_queue';

        return (
            <div onClick={this.handleClick} className={className}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave;