import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState,useEffect } from "react";

export default function Container(){
    const [timeElapsed,setTimeElapsed]=useState(0);
    
    const [trackMinutes,setTrackMinutes]=useState(25);
    const [trackSeconds,setTrackSeconds]=useState(0);
    const [minutes,setMinutes]=useState(new Date (0,0,0,12,trackMinutes,0).getMinutes());
    const [seconds,setSeconds]=useState(new Date(0,0,0,6,0,trackSeconds).getSeconds());
    const [startStop,setStartStop]=useState(false);
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

    
   
   
   

    let startTimer=()=>{
        if (started===false){
            setStarted(true);
            //setInterval(setTimeSeconds((timeSeconds)=>timeSeconds-1),1000)
        }
        else{
            setStarted(false);
            
            //setInterval(setTimeSeconds((timeSeconds)=>timeSeconds+1),1000) 
        }
    }



    Timer.defaultProps={
        timeElpasedState:timeElapsed,
        //timeFunction:startTimer,
        secondsState:seconds,
        minutesState:minutes,
        trackMinutesState:trackMinutes,
        trackSecondsState:trackSeconds,
        timeState:time,
        timeMinutesState:timeMinutes,
        timeSecondsState:timeSeconds,
        startedState:started,
        startTimerFunction:startTimer
    }

    Break.defaultProps={
        breakLengthState:breakLength
    }

    Session.defaultProps={
        sessionLengthState:sessionLength
    }

    return(
    <div>
        <Break/>
        <Session/>
        <Timer/>    
    </div>
    );
}

