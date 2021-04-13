import './App.css';
import React from "react";
import ListItem from './ListItem';
import ReactDOM from "react-dom";
import { fireEvent } from '@testing-library/dom';


function getData()
{
  var items=[];
  var list=[];
   var input = document.getElementById("in").value;

   let url = 'https://itunes.apple.com/search?term=' + input;
   fetch(url)
   .then( data => data.json() )
   .then( (result) => {

     for(var i=0;i<10;i++){
       items[i] = [i, result.results[i].collectionName];
     }
     for(var i=0;i<items.length;i++)
     {
       list[i] = <ListItem name={items[i]} />
     }
     for(var i=0;i<list.length;i++)
     ReactDOM.render(list[i],document.getElementById("display"))
    


    

   })


}

function App() {
var count=0;

  return (

    <div>  
      <div className="main">
     
        <input id="in" type="text" className="input" placeholder="Artist's Name"></input>
        <button onClick={getData}>Search</button>
       
       <div id="display">
  
       </div>
      </div>

    </div>

   

  );

}


export default App;
