import React, { Component } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(e) {
        e.stopPropagation()
        console.log('handling click in Fave component');
        this.props.onFaveToggle()
    }
    
    render() {
        console.log('Fave rendering')
        // check state to see if movie is in faves
        let addRemove = this.props.isFave?'remove_from_queue' : 'add_to_queue';
        

        return (
            <div onClick={this.handleClick} className={'film-row-fave ' + addRemove}>
                <p className="material-icons">{addRemove}</p>
            </div>
        )
    }
}

export default Fave;