import buttons from "./buttons";
import { useEffect,useRef } from "react";

export default function Presentational(props){
    const btnsRef=useRef();

    useEffect(()=>{
        btnsRef.current=buttons('jack');
    })
    
    return (
        <div>
            <div id="drum-machine">
                <h1>Presentational</h1>
                <div id="display"></div>
                <button className="drum-pad">
                    Q
                    <audio src="" className="clip" id="//change">
                        <source src="" type="">  
                        </source>
                    </audio>
                </button>
                <div ref={btnsRef}>
                {buttons('jack')}
                {buttons('tom')}
                {buttons('ernesto')}
                </div>
            </div>
        </div>
    )
}