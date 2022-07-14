import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useState,useRef } from "react";

function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  )
};

export default App;

//REACT
function Todo(){
  const [messages,setMessages]=useState([])
  const [input,setInput]=useState("")
  const inputElement=useRef();

  const updateMessages=()=>{
    if (input==""){
      return alert("You must write something here!")
    }
    else{
      setMessages(prev=>{
        return [...prev,input]
        }
      );
      setInput("");
      {/*the setInput is meant to prevent the resubmission of input when clicking the button(empty field) after another click*/}
    }
  }
  return (
    <div>
        <input onChange={(event)=>setInput(event.target.value)} onBlur={(event)=>{event.target.value=""}}/> {/*the onblur is meant to prevent the input text from remaining after button click */}
        <button onClick={updateMessages}>Submit</button>
        <ul>{messages.map(x=>{return (<li>{x}</li>)})}</ul>
    </div>
  )
};


//REDUX
const MESS='MESS';

const sendMessages=(message)=>{
  return {
    type:MESS,
    message:message
  }
};

const messagesReducer=(state=[],action)=>{
  switch(action.type){
    case MESS:
      return [...state,message];
    default:
      return state;
  }  
};

const store=Redux.createStore(messagesReducer);

//REACT-REDUX

const mapStateToProps=(state)=>{
  return {
    messageState:state
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    messageDispatch:(message)=>{
        dispatch(sendMessages(message))
    }
  }
};

const Provider=React.Redux.Provider;
const connect=React.Redux.connect;
const container=connect(mapStateToProps,mapDispatchToProps)(App)