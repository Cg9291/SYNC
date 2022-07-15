import { useState } from "react";
import React from 'react';

//REACT
function Todo(props){
  //const [messages,setMessages]=useState([])
  const [input,setInput]=useState("")
  //const inputElement=useRef();

  const updateMessages=()=>{
    if (input===""){
      return alert("You must write something here!")
    }
    else{
         return props.messageDispatch(input)
        };
      setInput("");
      /*the setInput is meant to prevent the resubmission of input when clicking the button(empty field) after another click*/
    }
    
  return (
    <div>
        <input onChange={(event)=>setInput(event.target.value)} onBlur={(event)=>{event.target.value=""}}/> {/*the onblur is meant to prevent the input text from remaining after button click */}
        <button onClick={updateMessages}>Submit</button>
        <ul></ul>
    </div>
  )
};

//props.messages.map(x=>{return (<li>{x}</li>)})

///REDUX

const sendMessages=(message)=>{
    return {
      type:'mess',
      message:message
    }
  };
  
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

  export {Todo,mapDispatchToProps,mapStateToProps}