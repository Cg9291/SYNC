import React from "react";
import '../../buttons.scss'

export default function Buttons(){
    return(
        <div className="container-fluid d-flex justify-content-center" >
            <div className="row-cols-3 justify-content-center text-center" style={{border:'solid blue'}}> 
                <button className="drum-pad col btn btn-dark">
                    Q
                    <audio src="" className="clip" id="Q">
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    W
                    <audio src="" className="clip" id='W'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    E
                    <audio src="" className="clip" id='E'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    A
                    <audio src="" className="clip" id='A'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col-4 btn btn-dark">
                    S
                    <audio src="" className="clip" id='S'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    D
                    <audio src="" className="clip" id='D'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    Z
                    <audio src="" className="clip" id='Z'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    X
                    <audio src="" className="clip" id='X'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>

                <button className="drum-pad col btn btn-dark">
                    C
                    <audio src="" className="clip" id='C'>
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>
            </div>
        </div>
        )  
}
