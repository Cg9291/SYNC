import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;


//REACT
function Todo(){
  const [messages,setMessages]=useState([])

  const updateMessages=(event)=>{
    setMessages(prev=>{
      return [...messages,event.target.value]
    })
  }

  return (
    <div>
        <input onChange={updateMessages}/>
        <button onClick={updateMessages}>Submit</button>
        <ul>{messages.map(x=>{return (<li>{x}</li>)})}</ul>
    </div>
  )
}