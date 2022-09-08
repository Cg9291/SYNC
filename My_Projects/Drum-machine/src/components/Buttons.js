import React, { useEffect, useRef, useState } from "react";
import '../buttons.scss';
import beepAudio from "../audio/beep.mp3";
import iosNotificationAudio from "../audio/ios_notification.mp3";
import iosMessageAudio from "../audio/ios_message_sent.mp3"

export default function Buttons(){

   const buttonRefQ=useRef();
   const buttonRefW=useRef();
   const buttonRefE=useRef();
   const buttonRefA=useRef();
   const buttonRefS=useRef();
   const buttonRefD=useRef();
   const buttonRefZ=useRef();
   const buttonRefX=useRef();
   const buttonRefC=useRef();
   
   const [playing,setPlaying]=useState();

   let buttonRef=useRef();

   function playSound(event){
        event.target.firstElementChild.play();
        setPlaying(event.target.id)
   }

   /*function handleKeyPress(event){
        if(event.key==='q'|| event.key==='Q'){
            setState('yes')
        }else{
            setState("nope");
        }
    };

    function handleClick(){
        setState('yes');
        };*/

   /*useEffect(()=>{
    window.addEventListener("keypress",handleKeyPress,false)
   },[]);*/

    return(
        <div className="container-fluid justify-content-center align-items-center">
            <div id="display">{playing}</div>
            <div className="row justify-content-center">
            <div id="pad" className="col-4 row-cols-3" style={{border:'solid blue'}}> 
                <button id="Q1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    Q
                    <audio src={beepAudio} className="clip" id="Q" ref={buttonRefQ}>
                       
                    </audio>
                </button>

                <button id="W1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    W
                    <audio src={iosNotificationAudio} className="clip" id='W' ref={buttonRefW}>
                        
                    </audio>
                </button>

                <button id="E1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    E
                    <audio src={iosMessageAudio} className="clip" id='E' ref={buttonRefE}>
                        
                    </audio>
                </button>

                <button id="A1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    A
                    <audio src={iosNotificationAudio} className="clip" id='A' ref={buttonRefA}>
                        
                    </audio>
                </button>

                <button id="S1" className="drum-pad col-4 btn btn-dark" onClick={playSound}>
                    S
                    <audio src={iosNotificationAudio} className="clip" id='S' ref={buttonRefS}>
                        
                    </audio>
                </button>

                <button id="D1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    D
                    <audio src={iosNotificationAudio} className="clip" id='D' ref={buttonRefD}>
                        
                    </audio>
                </button>

                <button id="Z1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    Z
                    <audio src={iosNotificationAudio} className="clip" id='Z' ref={buttonRefZ}>
                        
                    </audio>
                </button>

                <button id="X1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    X
                    <audio src={iosNotificationAudio} className="clip" id='X' ref={buttonRefX}>
                        
                    </audio>
                </button>

                <button id="C1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    C
                    <audio src={iosNotificationAudio} className="clip" id='C' ref={buttonRefC}>
                        
                    </audio>
                </button>
                </div>
            </div>
        </div>
        )  
}
