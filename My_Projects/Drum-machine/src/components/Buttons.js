import React, { useEffect, useRef, useState } from "react";
import '../buttons.scss';
import beepAudio from "../audio/beep.mp3";
import iosNotificationAudio from "../audio/ios_notification.mp3";
import iosMessageAudio from "../audio/ios_message_sent.mp3"

export default function Buttons(){

   const Q=useRef();
   const W=useRef();
   const E=useRef();
   const A=useRef();
   const S=useRef();
   const D=useRef();
   const Z=useRef();
   const X=useRef();
   const C=useRef();
   
   const [playing,setPlaying]=useState();

   function playSound(event){
        event.target.firstElementChild.play();
        setPlaying(event.target.id)
   }

   function handleKeyPress(event){
    if(event.key.toUpperCase()==="Q"){
        Q.current.play();
    }
    else if(event.key.toUpperCase()==="W"){
        W.current.play();
    }
    else if(event.key.toUpperCase()==="E"){
        E.current.play();
    }
    else if(event.key.toUpperCase()==="A"){
        A.current.play();
    }
    else if(event.key.toUpperCase()==="S"){
        S.current.play();
    }
    else if(event.key.toUpperCase()==="D"){
        D.current.play();
    }
    else if(event.key.toUpperCase()==="Z"){
        Z.current.play();
    }
    else if(event.key.toUpperCase()==="X"){
        X.current.play();
    }
    else if(event.key.toUpperCase()==="C"){
        C.current.play();
    }
    };


   useEffect(()=>{
    window.addEventListener("keypress",handleKeyPress,false)
   },[]);

    return(
        <div className="container-fluid justify-content-center align-items-center">
            <div id="display">{playing}</div>
            <div className="row justify-content-center">
            <div id="pad" className="col-4 row-cols-3" style={{border:'solid blue'}}> 
                <button id="Q1" className="drum-pad col btn btn-dark"  onClick={playSound}>
                    Q
                    <audio src={beepAudio} className="clip" id="Q" ref={Q}>
                       
                    </audio>
                </button>

                <button id="W1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    W
                    <audio src={iosNotificationAudio} className="clip" id='W' ref={W}>
                        
                    </audio>
                </button>

                <button id="E1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    E
                    <audio src={iosMessageAudio} className="clip" id='E' ref={E}>
                        
                    </audio>
                </button>

                <button id="A1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    A
                    <audio src={iosNotificationAudio} className="clip" id='A' ref={A}>
                        
                    </audio>
                </button>

                <button id="S1" className="drum-pad col-4 btn btn-dark" onClick={playSound}>
                    S
                    <audio src={iosNotificationAudio} className="clip" id='S' ref={S}>
                        
                    </audio>
                </button>

                <button id="D1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    D
                    <audio src={iosNotificationAudio} className="clip" id='D' ref={D}>
                        
                    </audio>
                </button>

                <button id="Z1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    Z
                    <audio src={iosNotificationAudio} className="clip" id='Z' ref={Z}>
                        
                    </audio>
                </button>

                <button id="X1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    X
                    <audio src={iosNotificationAudio} className="clip" id='X' ref={X}>
                        
                    </audio>
                </button>

                <button id="C1" className="drum-pad col btn btn-dark" onClick={playSound}>
                    C
                    <audio src={iosNotificationAudio} className="clip" id='C' ref={C}>
                        
                    </audio>
                </button>
                </div>
            </div>
        </div>
        )  
}
