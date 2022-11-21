//MUST REPLACE KICK!!! (FILE DOESNT WORK)
//OPTIONAL IMPROVEMENTS:(1-CHANGE KEYS COLOR WHEN PRESSED/CLICKED 2-ADD WINDOWS FOR LABEL AND POWER ON/OFF 3-FIX UNEVEN VOLUME)
import React, { useEffect,useLayoutEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton.js";
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
   const [toggle,setToggle]=useState(true);
   const [volume,setVolume]=useState(50);

   function playSound(event){
    if(toggle){
        event.target.firstElementChild.play();
        event.target.firstElementChild.volume=volume/100;
        setPlaying(event.target.id);
    }
   }

   function handleKeyPress(event){
            if(event.key.toUpperCase()==="Q"){
                Q.current.play();
                Q.current.volume=volume/100;
                setPlaying(Q.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="W"){
                W.current.play();
                W.current.volume=volume/100;
                setPlaying(W.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="E"){
                E.current.play();
                E.current.volume=volume/100;
                setPlaying(E.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="A"){
                A.current.play();
                A.current.volume=volume/100;
                setPlaying(A.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="S"){
                S.current.play();
                S.current.volume=volume/100;
                setPlaying(S.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="D"){
                D.current.play();
                D.current.volume=volume/100;
                setPlaying(D.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="Z"){
                Z.current.play();
                Z.current.volume=volume/100;
                setPlaying(Z.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="X"){
                X.current.play();
                X.current.volume=volume/100;
                setPlaying(X.current.parentNode.id);
            }
            else if(event.key.toUpperCase()==="C"){
                C.current.play();
                C.current.volume=volume/100;
                setPlaying(C.current.parentNode.id);
            }
    }

    useEffect(()=>{
        setPlaying(volume);
    },[volume])

   useLayoutEffect(()=>{
    if(toggle){
        window.addEventListener("keypress",handleKeyPress,false);
    }
    return ()=>window.removeEventListener("keypress",handleKeyPress,false)
    },[toggle,volume]);

    function changeVolume(event){
        setVolume(event.target.value);
        
    }

    return(
        <div className="container-fluid justify-content-center align-items-center col-6 m-auto">
            <div className="row m-auto" style={{border:'solid green'}}>
                <div id="pad" className="row col-6 bg-secondary" /*style={{border:'solid blue'}}*/> 
                    <div className="row justify-content-center">
                        <button id="Clap" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px red"}}>
                            Q
                            <audio src={clap_Sound} className="clip" id="Q" ref={Q}>
                                Your browser does not support this type of file.  
                            </audio>
                        </button>

                        <button id="Closed HH" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px blue"}}>
                            W
                            <audio src={closed_HH_Sound} className="clip" id='W' ref={W}>
                                Your browser does not support this type of file.   
                            </audio>
                        </button>

                        <button id="Heater 1" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px green"}}>
                            E
                            <audio src={heater_1_Sound} className="clip" id='E' ref={E}>
                                Your browser does not support this type of file.     
                            </audio>
                        </button>
                        </div>

                    <div className="row justify-content-center">                
                        <button id="Heater 2" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px purple"}}>
                            A
                            <audio src={heater_2_Sound} className="clip" id='A' ref={A} >
                                Your browser does not support this type of file.  
                            </audio>
                        </button>

                        <button id="Heater 3" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px magenta"}}>
                            S
                            <audio src={heater_3_Sound} className="clip" id='S' ref={S}>
                                Your browser does not support this type of file.  
                            </audio>
                        </button>

                        <button id="Heater 4" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px orange"}}>
                            D
                            <audio src={heater_4_Sound} className="clip" id='D' ref={D}>
                                Your browser does not support this type of file.  
                            </audio>
                        </button>
                    </div>

                    <div className="row justify-content-center"> 
                        <button id="Kick n'Hat" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px turquoise"}}>
                            Z
                            <audio src={kick_n_hat_Sound} className="clip" id='Z' ref={Z}>
                                Your browser does not support this type of file.  
                            </audio>
                        </button>

                        <button id="Kick" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px yellow"}}>
                            X
                            <audio src={kick_Sound} className="clip" id='X' ref={X}>
                                Your browser does not support this type of file.  
                            </audio>
                        </button>

                        <button id="Open HH" className="drum-pad col-4 btn btn-dark m-2" onClick={playSound} style={{boxShadow: "2px 5px yellowgreen"}}>
                            C
                            <audio src={open_HH_Sound} className="clip" id='C' ref={C}>
                                Your browser does not support this type of file.   
                            </audio>
                        </button>
                    </div>
                </div>
                <div id="controls" height='50px' className="row col-6 mx-auto " style={{border:'solid pink'}}>
                    <div className="row col-10 bg-danger" style={{border:'solid yellow'}} >
                        <div className="row h-25 bg-success">
                        <ToggleButton toggle={toggle} setToggle={setToggle}/>
                        </div>
                        <div className="row h-75 bg-primary justify-content-center">
                            <div id="display" className="row d-flex display bg-secondary col-6 border border-dark fs-3 fw-bold justify-content-center align-items-center" style={{minHeight:'65px',justifySelf:"flex-end",alignSelf:"center"}}>
                                {playing}
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-2 d-flex flex-column">
                        <input type='range' min={0} max={100} className='slider w-50' onChange={changeVolume}></input>
                        volume is {volume}.
                    </div>
                </div>
            </div>
        </div>
        )  
}
