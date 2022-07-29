import React, { useEffect, useRef, useState } from "react";
import '../../buttons.scss'

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
   
   const [state,setState]=useState();

   let elementRef;

   function playSound(ref){
        ref.current.play();
        ref.current=ref.toString();
        setState(ref.current);
   }

   function handleKeyPress(event){
        if(event.key==='q'|| event.key==='Q'){
            setState('yes')
        }else{
            setState("nope");
        }
    };

    function handleClick(){
        setState('yes');
        };

   useEffect(()=>{
    window.addEventListener("keypress",handleKeyPress,false)
   },[]);

    return(
        <div className="container-fluid d-flex justify-content-center" >
            <div className="row">{state} is the test result</div>
            <div className="row-cols-3 justify-content-center text-center" style={{border:'solid blue'}}> 
                <button className="drum-pad col btn btn-dark" ref={buttonRefQ} onClick={(buttonRefQ)=>playSound}>
                    Q
                    <audio src="" className="clip" id="Q" ref={buttonRefQ} onClick={handleClick}>
                       
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    W
                    <audio src="" className="clip" id='W' ref={buttonRefW}>
                        
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    E
                    <audio src="" className="clip" id='E' ref={buttonRefE}>
                        
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    A
                    <audio src="" className="clip" id='A' ref={buttonRefA}>
                        
                    </audio>
                </button>

                <button className="drum-pad col-4 btn btn-dark">
                    S
                    <audio src="" className="clip" id='S' ref={buttonRefS}>
                        
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    D
                    <audio src="" className="clip" id='D' ref={buttonRefD}>
                        
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    Z
                    <audio src="" className="clip" id='Z' ref={buttonRefZ}>
                        
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    X
                    <audio src="" className="clip" id='X' ref={buttonRefX}>
                        
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    C
                    <audio src="" className="clip" id='C' ref={buttonRefC}>
                        
                    </audio>
                </button>
            </div>
        </div>
        )  
}
