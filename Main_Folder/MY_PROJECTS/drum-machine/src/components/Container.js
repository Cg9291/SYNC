import Buttons from "./Buttons.js";
import React, { useEffect,useRef } from "react";


export default function Container(props){
    return (
        <div>
            <div id="drum-machine">
                <h1>Drum Machine</h1>
                <Buttons/>
            </div>
        </div>
    )
}