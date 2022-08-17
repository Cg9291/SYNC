import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState,useEffect } from "react";

export default function Container(){
    const [timeElapsed,setTimeElapsed]=useState(0);
    const [trackMinutes,setTrackMinutes]=useState(25);
    const [trackSeconds,setTrackSeconds]=useState(0);
    const [seconds,setSeconds]=useState(new Date(0,0,0,0,0,trackSeconds).getSeconds());
    const [minutes,setMinutes]=useState(new Date (0,0,0,0,trackMinutes,0).getMinutes());
    const [startStop,setStartStop]=useState(false);


    /*useEffect(()=>{
        //document.addEventListener("click",startTimer())
        setInterval(() => {
            setSeconds(seconds+1)
         },1000)
    })*/
   
    var myTime=new Date(0,0,0,0,minutes,seconds)

    let startTimer=()=>{
        setInterval(() => {
            if(seconds===0){
                setTrackMinutes((trackMinutes)=>trackMinutes-1)
                setTrackSeconds((trackSeconds)=>trackSeconds-1)
            }
            else if (seconds>0){
                setTrackSeconds((trackSeconds)=>trackSeconds-1)
         }},1000);
       /* if(startStop){
            setStartStop(false);
        }
        else{
            setStartStop(true);
        };*/
        
        
    };

    Timer.defaultProps={
        timeElpasedState:timeElapsed,
        timeFunction:startTimer,
        secondsState:seconds,
        minutesState:minutes,
        trackMinutesState:trackMinutes,
        trackSecondsState:trackSeconds
    }

    return(
    <div>
        <Break/>
        <Session/>
        <Timer/>    
    </div>
    );
}

