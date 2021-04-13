import React from 'react'
import "./ListItem.css"

function ListItem(props) {

    return (
        <div id="list">
            <div className="List">
            <h3 className="title"> {props.name} </h3>
           
            </div>
        </div>
   
    )
}

export default ListItem
