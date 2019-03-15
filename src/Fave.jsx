import React, { Component } from 'react';

function Fave(props) {
    console.log('Fave rendering')
    // check state to see if movie is in faves
    let addRemove = props.isFave?'remove_from_queue' : 'add_to_queue';
    return (
        <div 
            onClick={(e) => { e.stopPropagation(); props.onFaveToggle()}} 
            className={'film-row-fave ' + addRemove}
        >
            <p className="material-icons">{addRemove}</p>
        </div>
    )
}

export default Fave;