import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {

  const [msg,updatemessage]= useState("hiiiii"); //object create and array (init value)

  const change = (mesg) => {
    updatemessage(mesg);
  };
  return (
    <div className="App">
       <h1>{msg}</h1> 
       <button onClick={()=>change("hello, i'm shraddha.")}>update</button> 
    </div>
  );
}

export default App;
