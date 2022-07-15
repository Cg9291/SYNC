import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import{connect} from "react-redux"
import { useState,useRef } from "react";
import { createStore } from 'redux';
//import Redux from 'redux';
import ReactRedux from 'react-redux';



function App(props) {
  connect(mapStateToProps,mapDispatchToProps)(Todo);
  return (
    <div className="App">
      <Todo/>
    </div>
  )
};

export default App;

//REACT
function Todo(props){
  //const [messages,setMessages]=useState([])
  const [input,setInput]=useState("")
  //const inputElement=useRef();

  const updateMessages=()=>{
    if (input==""){
      return alert("You must write something here!")
    }
    else{
         props.messageDispatch(input)
        };
      setInput("");
      {/*the setInput is meant to prevent the resubmission of input when clicking the button(empty field) after another click*/}
    }
  return (
    <div>
      <p>{store.getState()}</p>
        <input onChange={(event)=>setInput(event.target.value)} onBlur={(event)=>{event.target.value=""}}/> {/*the onblur is meant to prevent the input text from remaining after button click */}
        <button onClick={updateMessages}>Submit</button>
        <ul>{props.messages.map(x=>{return (<li>{x}</li>)})}</ul>
    </div>
  )
};


///REDUX
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
      return [...state,action.message];
    default:
      return state;
  }  
};

const store=createStore(messagesReducer);

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

//const Provider=React.Redux.Provider;
//const connect=React.Redux.connect;
//const Container=connect(mapStateToProps,mapDispatchToProps)(Todo)