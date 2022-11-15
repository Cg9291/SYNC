//MUST REPLACE KICK!!! (FILE DOESNT WORK)
//OPTIONAL IMPROVEMENTS:(1-CHANGE KEYS COLOR WHEN PRESSED/CLICKED 2-ADD WINDOWS FOR LABEL AND POWER ON/OFF 3-FIX UNEVEN VOLUME)
import React, { useEffect, useRef, useState } from "react";
import '../buttons.scss';
import clap_Sound from '../audio/clap.mp3';
import closed_HH_Sound from '../audio/closed-HH.mp3';
import heater_1_Sound from '../audio/heater-1.mp3';
import heater_2_Sound from '../audio/heater-2.mp3';
import heater_3_Sound from '../audio/heater-3.mp3';
import heater_4_Sound from '../audio/heater-4.mp3';
import kick_n_hat_Sound from '../audio/kick_n_Hat.mp3';
import kick_Sound from '../audio/kick.mp3';
import open_HH_Sound from '../audio/open - HH.mp3';

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
            <div id="pad" className="col-3 " style={{border:'solid blue'}}> 
                <button id="Clap" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px red"}}>
                    Q
                    <audio src={clap_Sound} className="clip" id="Q" ref={Q}>
                        Your browser does not support this type of file.  
                    </audio>
                </button>

                <button id="Closed HH" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px blue"}}>
                    W
                    <audio src={closed_HH_Sound} className="clip" id='W' ref={W}>
                        Your browser does not support this type of file.   
                    </audio>
                </button>

                <button id="Heater 1" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px green"}}>
                    E
                    <audio src={heater_1_Sound} className="clip" id='E' ref={E}>
                        Your browser does not support this type of file.     
                    </audio>
                </button>

                <button id="Heater 2" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px purple"}}>
                    A
                    <audio src={heater_2_Sound} className="clip" id='A' ref={A}>
                        Your browser does not support this type of file.  
                    </audio>
                </button>

                <button id="Heater 3" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px magenta"}}>
                    S
                    <audio src={heater_3_Sound} className="clip" id='S' ref={S}>
                        Your browser does not support this type of file.  
                    </audio>
                </button>

                <button id="Heater 4" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px orange"}}>
                    D
                    <audio src={heater_4_Sound} className="clip" id='D' ref={D}>
                        Your browser does not support this type of file.  
                    </audio>
                </button>

                <button id="Kick n'Hat" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px turquoise"}}>
                    Z
                    <audio src={kick_n_hat_Sound} className="clip" id='Z' ref={Z}>
                        Your browser does not support this type of file.  
                    </audio>
                </button>

                <button id="Kick" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px yellow"}}>
                    X
                    <audio src={kick_Sound} className="clip" id='X' ref={X} volume="0.9">
                        Your browser does not support this type of file.  
                    </audio>
                </button>

                <button id="Open HH" className="drum-pad col btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px yellowgreen"}}>
                    C
                    <audio src={open_HH_Sound} className="clip" id='C' ref={C}>
                        Your browser does not support this type of file.   
                    </audio>
                </button>
                </div>
            </div>
        </div>
        )  
}
