import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState,useEffect,useRef } from "react";

export default function Container(){
   
    //break component hooks
    const [breakLength,setBreakLength]=useState(5);
    //session component hooks
    const [sessionLength,setSessionLength]=useState(0)
    
    //new date object/state
    const [time,setTime]=useState()
    const [timeMinutes,setTimeMinutes]=useState(sessionLength);
    const [timeSeconds,setTimeSeconds]=useState(3)

    //timer start stop state
    const [started,setStarted]=useState(false)
    const intvl = useRef();//THIS CAME CLUTCH IN MAKING THE TIMER WORK AS INTENTED(STOP AT 00:00)

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

    let refreshHandler=()=>{
        setBreakLength(5);
        setSessionLength(25);
        setTime(new Date(0,0,0,0,sessionLength,timeSeconds).toLocaleTimeString());
        setTimeMinutes(0);
        setTimeSeconds(0)
    }

    useEffect(()=>setTime(new Date(0,0,0,0,sessionLength,timeSeconds).toLocaleTimeString()),[timeSeconds,sessionLength])

    useEffect(()=>{
        //document.addEventListener("click",startTimer())
        if(started===true){
             intvl.current=setInterval(() => {
                setTimeSeconds((timeSeconds)=>timeSeconds-1);
             },1000);
            return ()=>clearInterval(intvl.current)
        }
    },[started,sessionLength,timeSeconds])

    useEffect(()=>{if(sessionLength==0 && timeSeconds==0){
        clearInterval(intvl.current);
        setStarted(false)
    }} )
    
    



    Timer.defaultProps={
        timeState:time,
        sessionLengthState:sessionLength,
        timeSecondsState:timeSeconds,
        startedState:started,
        startTimerFunction:startTimer,
        refreshHandler:refreshHandler,
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

