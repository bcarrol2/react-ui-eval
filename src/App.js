import React from 'react';
import './App.css';
import {getArray} from './randomArray';
import Boxes from './Boxes';

function App() {
  const arrays = getArray()

  return (
    <div className="App">
      {console.log(arrays)}
      {arrays.map(row => {
        console.log(row)
        return <div className="rowStyle">{row.map(integer => {
          // console.log(integer)
          return <p className={"intstyle " + "style" + integer}>{integer}</p>
        })}</div>
        
      })}
      <Boxes boxes={arrays}/>
    </div>
  );
}

export default App;