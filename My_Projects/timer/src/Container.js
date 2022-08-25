import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState,useEffect } from "react";

export default function Container(){
   
    //break component hooks
    const [breakLength,setBreakLength]=useState(5);
    //session component hooks
    const [sessionLength,setSessionLength]=useState(25)

    //new date object/state
    const [time,setTime]=useState()
    const [timeMinutes,setTimeMinutes]=useState(0);
    const [timeSeconds,setTimeSeconds]=useState(0)

    //timer start stop state
    const [started,setStarted]=useState(false)
    let start=started;

    //buttons event handlers
    let startTimer=()=>{
        if (started===false){
            setStarted(true);
        }
        else{
            setStarted(false);
        }
    }

    let sessionHandler=(event)=>{
        if(event.target.id=="session-increment"){
            setSessionLength((sessionLength)=>sessionLength+1);
        }
        else if(event.target.id=="session-decrement" && sessionLength>1){
            setSessionLength((sessionLength)=>sessionLength-1)
        }
    }

    let breakHandler=(event)=>{
        if(event.target.id=="break-increment"){
            setBreakLength((breakLength)=>breakLength+1);
        }
        else if(event.target.id=="break-decrement" && breakLength>1){
            setBreakLength((breakLength)=>breakLength-1);
        }
    }

    useEffect(()=>setTime(new Date(0,0,0,0,timeMinutes,timeSeconds).toLocaleTimeString()),[timeSeconds])

    useEffect(()=>{
        //document.addEventListener("click",startTimer())
        if(started===true){
            let int=setInterval(() => {
                setTimeSeconds((timeSeconds)=>timeSeconds-1);
             },1000);
            return ()=>clearInterval(int)
        }
    },[started])

    
    



    Timer.defaultProps={
        timeState:time,
        timeMinutesState:timeMinutes,
        timeSecondsState:timeSeconds,
        startedState:started,
        startTimerFunction:startTimer
    }

    Break.defaultProps={
        breakLengthState:breakLength,
        breakHandler:breakHandler
    }

    Session.defaultProps={
        sessionLengthState:sessionLength,
        sessionHandler:sessionHandler
    }

    return(
    <div>
        <Break/>
        <Session/>
        <Timer/>    
    </div>
    );
}

