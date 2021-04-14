import React from 'react'
import "./ListItem.css"

function ListItem(props) {

    return (
        <div id="list">
            <div className="List">
            <h5 className="title"> {props.name} </h5>
            <p className="prev"> {props.preview} </p>
            
        </div>
        </div>
   
    )
}

export default ListItem
