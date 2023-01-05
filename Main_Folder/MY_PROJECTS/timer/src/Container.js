import Circle from "./components/CircleComponent";
import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import TimedButtons from "./components/TimedButtons.js";
import {Timer} from "./components/TimerComponent";
import React,{ useState,useEffect,useRef } from "react";

/*see anais designs
    -find a way to add gradient with circle border
    -fix css to align start-refresh buttons
    -add animated circle around time
    -fancy clock design(rotating down)
    
*/
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
    const [timerColor,setTimerColor]=useState({color:'white'});
    const [timerLabel,setTimerLabel]=useState("Time remaining");

    //REFS
    const intvl = useRef();//THIS CAME CLUTCH IN MAKING THE TIMER WORK AS INTENTED(STOP AT 00:00),basically allows us to assign and thus call off a setInterval fn in the useeffect.
    const beep=useRef();


    //EFFECTS
    useEffect(()=>{document.title="Cg's Timer Project"});

    useEffect(()=>{
            setSeconds(0);
            setMinutes(sessionLength);
        },[]);

    useEffect(()=>{//starts & run the timer
        if(started===true && seconds==0){
            intvl.current=setTimeout(() => {
                setSeconds(59);
                setMinutes(minutes-1)
            },1000);
            setTimerColor({color:'red'});
            return()=>clearTimeout(intvl.current);
        }
        else if(started===true && seconds>0){
            intvl.current=setInterval(() => {
                setSeconds(seconds-1);
            },1000);
            return()=>clearInterval(intvl.current);
        }},[started,seconds]);

    useEffect(()=>{//stops the timer at 00:00 & switches between session and break states
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

    useEffect(()=>{if(minutes==0 && seconds==0 && started===false){ //plays session end sound & starts appropriate new timer
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


    //PASSING PROPS/FUNCTIONS
    Circle.defaultProps={
        minutesState:minutes,
        secondsState:seconds,
        timerColorState:timerColor,
        timerLabelState:timerLabel,
        sessionLengthState:sessionLength,
        secondsRendererFunction:secondsRenderer,
        minutesRendererFunction:minutesRenderer,
    }

    Timer.defaultProps={
        startTimerFunction:startTimer,
        refreshHandler:refreshHandler,
        secondsRendererFunction:secondsRenderer,
        minutesRendererFunction:minutesRenderer,
        breakLengthState:breakLength,
        sessionLengthState:sessionLength,
        minutesState:minutes,
        secondsState:seconds,
        startedState:started,
        timerColorState:timerColor,
        timerLabelState:timerLabel
    };

    Break.defaultProps={
        breakLengthState:breakLength,
        breakHandlerFunction:breakHandler,
        startedState:started
    };

    Session.defaultProps={
        sessionLengthState:sessionLength,
        sessionHandlerFunction:sessionHandler,
        startedState:started
    };

    return(
        <div>
            <Circle/>
            <Timer ref={beep}/>  
            <TimedButtons/>
            {/*<Break/>
            <Session/>*/}
              
        </div>
    );
}

