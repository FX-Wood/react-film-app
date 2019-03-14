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
    }
    
    render() {
        let className;
        // check state to see if movie is in faves
        this.state.isFave? className += ' remove_from_queue': className += ' add_to_queue';

        return (
            <div onClick={this.handleClick} className={'film-row-fave' + className}>
                <p className="material-icons">{className}</p>
            </div>
        )
    }
}

export default Fave;