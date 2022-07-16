import { useState,useRef} from "react";
import { connect } from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../redux/maps/messages-mapping"

function Todo(props){
  const [input,setInput]=useState("");
  const inputField=useRef(null);

  const updateMessages=()=>{ 
    if (input===""){
      return alert("You must write something here!")
    }
    else{
      return props.messageDispatch(input)
    };    
  }

  const clearRef=()=>{
    inputField.current.value="";
    setInput("");
      /*the setInput is meant to prevent the resubmission of input when clicking the button(empty field) after another click*/
  }

  const handleClick=()=>{
    updateMessages();
    clearRef();
    }

  return (
    <div>
        <input ref={inputField} onChange={(event)=>setInput(event.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        <ul>{props.messageState.map(x=>{return (<li>{x}</li>)})}</ul>
    </div>
  )
};

export default connect(mapStateToProps,mapDispatchToProps)(Todo)