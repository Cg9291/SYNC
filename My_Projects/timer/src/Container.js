import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState } from "react";

export default function Container(){
    const [timeElapsed,setTimeElapsed]=useState(0);
    const [seconds,setSeconds]=useState(new Date(20/20/20))
    let startTimer=()=>{
        setInterval(() => {
           setTimeElapsed(timeElapsed+1)
        },1000);
    };

    Timer.defaultProps={
        timeState:timeElapsed,
        timeFunction:startTimer,
        secondsState:seconds
    }

    return(
    <div>
        <Break/>
        <Session/>
        <Timer/>    
    </div>
    );
}