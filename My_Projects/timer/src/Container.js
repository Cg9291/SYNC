import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState,useEffect,useLayoutEffect,useRef } from "react";

export default function Container(){
    //break & session components hooks
    const [breakLength,setBreakLength]=useState(5);
    const [sessionLength,setSessionLength]=useState(25)
    
    //new date object/state
    const [time,setTime]=useState(new Date(0,0,0,1,25,0))
    const [timeSeconds,setTimeSeconds]=useState(0);
    //const [timeMinutes,setTimeMinutes]=useState(0);
    const [minutes,setMinutes]=useState(time.getMinutes());
    //let secondsRef=useRef(time.getSeconds())
    const [seconds,setSeconds]=useState(time.getSeconds());
    //timer start stop state
    const [started,setStarted]=useState(false)
    const intvl = useRef();//THIS CAME CLUTCH IN MAKING THE TIMER WORK AS INTENTED(STOP AT 00:00)


    //EFFECTS
    useEffect(()=>setTime(new Date(0,0,0,1,sessionLength,timeSeconds)),[sessionLength,timeSeconds]);
    useEffect(()=>{document.title="Cg's Timer Project"});
    useEffect(()=>{//counter
        if(started===true){
            intvl.current=setInterval(() => {
                setTimeSeconds((timeSeconds)=>timeSeconds-1);
            },
            1000);
            return()=>clearInterval(intvl.current);
        }
    },[started,timeSeconds]);

    useEffect(()=>{//adds 0 to single digits
        setSeconds(()=>time.getSeconds()<10?'0'+time.getSeconds():time.getSeconds());
        setMinutes(()=>time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes());
    },[time])

    useEffect(()=>{if(minutes==0 && seconds==0){
        clearInterval(intvl.current);
        setStarted(false);
        setMinutes(60)
    }} )

    useEffect(()=>setBreakLength(breakLength),[breakLength])

   
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
        if(started!==true){
        if(event.target.id=="session-increment" && sessionLength<60){
            setSessionLength((sessionLength)=>sessionLength+1);
            setTimeSeconds(0)
        }
        else if(event.target.id=="session-decrement" && sessionLength>1){
            setSessionLength((sessionLength)=>sessionLength-1)
        }
    }}

    let breakHandler=(event)=>{
        if(started!==true){
        if(event.target.id=="break-increment" && breakLength<60){
            setBreakLength((breakLength)=>breakLength+1);
        }
        else if(event.target.id=="break-decrement" && breakLength>1){
            setBreakLength((breakLength)=>breakLength-1);
        }
    }}

    let refreshHandler=()=>{
        setBreakLength(5);
        setSessionLength(25);
        setTime(new Date(0,0,0,0,25,0));
        setTimeSeconds(0);
        setStarted(false);
    }

   

    


    //PASSING PROPS/FUNCTIONS
    Timer.defaultProps={
        timeState:time,
        sessionLengthState:sessionLength,
        timeSecondsState:timeSeconds,
        startedState:started,
        startTimerFunction:startTimer,
        refreshHandler:refreshHandler,
        minutesState:minutes,
        secondsState:seconds,
    }

    Break.defaultProps={
        breakLengthState:breakLength,
        breakHandler:breakHandler,
        startedState:started
    }

    Session.defaultProps={
        sessionLengthState:sessionLength,
        sessionHandler:sessionHandler,
        startedState:started
    }

    return(
    <div>
        <Break/>
        <Session/>
        <Timer/>    
    </div>
    );
}

