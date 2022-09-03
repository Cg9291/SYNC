import Break from "./components/BreakComponent";
import Session from "./components/SessionComponent";
import Timer from "./components/TimerComponent";
import { useState,useEffect,useLayoutEffect,useRef } from "react";

export default function Container(){
    //break & session components hooks
    const [breakLength,setBreakLength]=useState(5);
    const [sessionLength,setSessionLength]=useState(25);
    
    //const [myMinutes,setMyMinutes]=useState([]);
    //const [mySeconds,setMySeconds]=useState([]);
    //new date object/state
    //const [time,setTime]=useState(new Date(0,0,0,1,25,0))
    //const [timeSeconds,setTimeSeconds]=useState(0);
    //const [timeMinutes,setTimeMinutes]=useState(0);
    
    //let secondsRef=useRef(time.getSeconds())
    const [minutes,setMinutes]=useState(25);
    const [seconds,setSeconds]=useState(0);
    //timer start stop state
    const [started,setStarted]=useState(false);
    const [status,setStatus]=useState("session")
    const [timerColor,setTimerColor]=useState({color:'black'});
    const [timerLabel,setTimerLabel]=useState("Time remaining");
    const intvl = useRef();//THIS CAME CLUTCH IN MAKING THE TIMER WORK AS INTENTED(STOP AT 00:00)


    //EFFECTS
    /*useEffect(()=>{
        setMySeconds([...Array(60).keys()]);
        setMyMinutes([...Array(61).keys()])
    },[])*/

    /*useEffect(()=>{
        setMySeconds((mySeconds)=>[...mySeconds,0])
    },[])*/

    useEffect(()=>{
        if(status==="session"){
            setSeconds(0);
            setMinutes(sessionLength);
        }
        else if(status==="break"){
            setSeconds(0);
            setMinutes(breakLength);  
            setTimerLabel("Break")
        }
    },[status])

    useEffect(()=>{
        if(started===true && seconds==0){
            intvl.current=setInterval(() => {
                setSeconds(59);
                setMinutes(minutes-1)
            },1000);
            setTimerColor({color:'red'});
            return()=>clearInterval(intvl.current);
        }
        else if(started===true){
            intvl.current=setInterval(() => {
                setSeconds(seconds-1);
            },1000);
            return()=>clearInterval(intvl.current);
        }},[status,started,seconds])
    
    

    /*useEffect(()=>{
        for(let i=mySeconds.indexOf(0))
    })*/

//continue above here

    //useEffect(()=>setTime(new Date(0,0,0,1,sessionLength,timeSeconds)),[sessionLength,timeSeconds]);
    useEffect(()=>{document.title="Cg's Timer Project"});
   /* useEffect(()=>{//counter
        if(started===true){
            intvl.current=setInterval(() => {
                setSeconds(mySeconds[mySeconds.length-1])
            },
            1000);
            return()=>clearInterval(intvl.current);
        }
    },[started,timeSeconds]);*/

   /* useEffect(()=>{//adds 0 to single digits
        setSeconds(()=>seconds<10?'0'+seconds:seconds);
        setMinutes(()=>minutes<10?'0'+minutes:minutes);
    },[time])*/

    useEffect(()=>{if(minutes==0 && seconds==0){
        
        switch(status){
            case "session":
                setStatus("break");
                //clearInterval(intvl.current);             
                //setTimerColor({color:'black'});
                //setMinutes(60);
                break;

            case "break":
                setStatus("session");
                break;
        }
    }})

    useEffect(()=>setBreakLength(breakLength),[breakLength])

   
    //buttons event handlers
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
        if(started!==true){
        if(event.target.id=="session-increment" && sessionLength<60){
            setSessionLength((sessionLength)=>sessionLength+1);
            setMinutes((sessionLength)=>sessionLength+1)
        }
        else if(event.target.id=="session-decrement" && sessionLength>1){
            setSessionLength((sessionLength)=>sessionLength-1);
            setMinutes((sessionLength)=>sessionLength-1)
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
        setMinutes(25);
        setSeconds(0);
        setStarted(false);
        setStatus();
        //setTime(new Date(0,0,0,0,25,0));
        //setTimeSeconds(0);
        
    }

    //rendering function
    let secondsRenderer=()=>{
        return seconds<10?'0'+seconds:seconds;
    }

    let minutesRenderer=()=>{
        return minutes<10?'0'+minutes:minutes;
    }

   

    


    //PASSING PROPS/FUNCTIONS
    Timer.defaultProps={
        //timeState:time,
        sessionLengthState:sessionLength,
        //timeSecondsState:timeSeconds,
        startedState:started,
        startTimerFunction:startTimer,
        refreshHandler:refreshHandler,
        minutesState:minutes,
        secondsState:seconds,
        timerColorState:timerColor,
        secondsRendererFunction:secondsRenderer,
        minutesRendererFunction:minutesRenderer,
        breakLengthState:breakLength,
        timerLabelState:timerLabel
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

