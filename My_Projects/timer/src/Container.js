import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import {Timer} from "./components/TimerComponent";
import React,{ useState,useEffect,useLayoutEffect,useRef } from "react";

export default function Container(){
    //HOOKS - break & session components hooks
    const [breakLength,setBreakLength]=useState(5);
    const [sessionLength,setSessionLength]=useState(25);

    //HOOKS - minutes & seconds
    const [minutes,setMinutes]=useState(25);
    const [seconds,setSeconds]=useState(0);

    //HOOKS - timer start stop state
    const [started,setStarted]=useState(false);
    const [status,setStatus]=useState("session");

    //HOOKS - aesthetics
    const [timerColor,setTimerColor]=useState({color:'black'});
    const [timerLabel,setTimerLabel]=useState("Time remaining");

    //REFS
    const intvl = useRef();//THIS CAME CLUTCH IN MAKING THE TIMER WORK AS INTENTED(STOP AT 00:00),basically allows us to assign and thus call off a setInterval fn in the useeffect.
    const beep=React.createRef();


    //EFFECTS
    useEffect(()=>{document.title="Cg's Timer Project"});

    useEffect(()=>{
        if(status==="session"){
            setSeconds(0);
            setMinutes(sessionLength);
        }
        else if(status==="break"){
            setSeconds(0);
            setMinutes((breakLength)=>breakLength);  
            setTimerLabel("Break")
        }
    },[]);

    useEffect(()=>{
        if(started===true && seconds==0){
            intvl.current=setInterval(() => {
                setSeconds(59);
                setMinutes(minutes-1)
            },1000);
            setTimerColor({color:'red'});
            return()=>clearInterval(intvl.current);
        }
        else if(started===true && seconds>0){
            intvl.current=setInterval(() => {
                setSeconds(seconds-1);
            },1000);
            return()=>clearInterval(intvl.current);
        }},[status,started,seconds]);

    useEffect(()=>{
        if(minutes==0 && seconds==0){ 
            switch(status){
                case "session":
                    setStatus("break");
                    setStarted(false);
                    break;
                case "break":
                    setStatus("session");
                    setStarted(false);
                    break;
            } 
        }
    },[minutes,seconds]);

    useEffect(()=>{if(minutes==0 && seconds==0 && started===false){ 
        beep.current.volume=0.01;
        beep.current.play();
        setTimeout(()=>{
            if(status==="session"){
                setSeconds(0);
                setMinutes(sessionLength);
                setTimerLabel("Time remaining");
                setStarted(true);
            }
            else if(status==="break"){
                setSeconds(0);
                setMinutes(breakLength);  
                setTimerLabel("Break");
                setStarted(true);
            }
        },1000)      
    }},[status]);

    //EVENT HANDLERS FUNCTIONS
    let startTimer=()=>{
        switch(started){
            case true:
                setStarted(false);
                break;
            case false:
                setStarted(true);
                break;
        }
    }

    let sessionHandler=(event)=>{
        if(started===false && status!=="session"){
            if(event.target.id=="session-increment" && sessionLength<60){
                setSessionLength(sessionLength+1);
            }
            else if(event.target.id=="session-decrement" && sessionLength>1){
                setSessionLength(sessionLength-1);
            }
        }
        else if(started===false && status==="session"){
            if(event.target.id=="session-increment" && sessionLength<60){
                setSessionLength(sessionLength+1);
                setMinutes(sessionLength+1);
            }
            else if(event.target.id=="session-decrement" && sessionLength>1){
                setSessionLength(sessionLength-1);
                setMinutes(sessionLength-1);
            }
        }
    };

    let breakHandler=(event)=>{
        if(started===false && status!=="break"){
            if(event.target.id=="break-increment" && breakLength<60){
                setBreakLength(breakLength+1);
            }
            else if(event.target.id=="break-decrement" && breakLength>1){
                setBreakLength(breakLength-1);
            }
        }
        else if(started===false && status==="break"){
            if(event.target.id=="break-increment" && breakLength<60){
                setBreakLength(breakLength+1);
                setMinutes(breakLength+1);
            }
            else if(event.target.id=="break-decrement" && breakLength>1){
                setBreakLength(breakLength-1);
                setMinutes(breakLength-1);
            } 
        }
    };

    let refreshHandler=()=>{
        setBreakLength(5);
        setSessionLength(25);
        setMinutes(25);
        setSeconds(0);
        setStarted(false);
        setStatus("session");
        setTimerLabel("Time remaining");   
        beep.current.load();   
    };

    //TIME RENDERING FUNCTIONS
    let secondsRenderer=()=>{
        return seconds<10?'0'+seconds:seconds;
    };

    let minutesRenderer=()=>{
        return minutes<10?'0'+minutes:minutes;
    };

    let soundPlayer=()=>{
        beep.current.volume=0.01;
        beep.current.play();
    }


    //PASSING PROPS/FUNCTIONS
    Timer.defaultProps={
        sessionLengthState:sessionLength,
        startedState:started,
        startTimerFunction:startTimer,
        refreshHandler:refreshHandler,
        minutesState:minutes,
        secondsState:seconds,
        timerColorState:timerColor,
        secondsRendererFunction:secondsRenderer,
        minutesRendererFunction:minutesRenderer,
        breakLengthState:breakLength,
        timerLabelState:timerLabel,
        soundPlayerFunction:soundPlayer

    };

    Break.defaultProps={
        breakLengthState:breakLength,
        breakHandler:breakHandler,
        startedState:started
    };

    Session.defaultProps={
        sessionLengthState:sessionLength,
        sessionHandler:sessionHandler,
        startedState:started
    };

    return(
        <div>
            <Break/>
            <Session/>
            <Timer ref={beep}/>    
        </div>
    );
}

