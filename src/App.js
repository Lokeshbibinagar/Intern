import './App.css';
import React from "react";
import ListItem from './ListItem';
import ReactDOM from "react-dom";
import { fireEvent } from '@testing-library/dom';



function getData()
{
  var collName=[], prev=[];
  var list=[];
   var input = document.getElementById("in").value;

   let url = 'https://itunes.apple.com/search?term=' + input;
   fetch(url)
   .then( data => data.json() )
   .then( (result) => {

     for(var i=0;i<result.resultCount;i++){
       collName[i] = [result.results[i].collectionName];
       prev[i] = [result.results[i].preview]
     }
     for(var j=0;j<collName.length;j++)
     {
       list[j] = <ListItem name={collName[j]} preview={prev[j]}/>
     }

     ReactDOM.render([list[0],list[1],list[2],list[3],list[4],list[5],list[6],list[7],list[8],list[9],list[10],list[11],list[12],list[13],list[14],list[15],list[16],list[17],list[18],list[19],list[20],list[21],list[22],list[23],list[24],list[25],list[26],list[27],list[28],list[29],list[30],list[31],list[32],list[33],list[34],list[35],list[36],list[37],list[38],list[39],list[40],list[41],list[42],list[43],list[44],list[45],list[46],list[47],list[48],list[49]],document.getElementById("display"))
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
