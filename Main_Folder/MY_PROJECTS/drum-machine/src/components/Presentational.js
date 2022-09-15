import Buttons from "./Buttons.js";
import React, { useEffect,useRef } from "react";


export default function Presentational(props){
    return (
        <div>
            <div id="drum-machine">
                <h1>Drum Machine</h1>
                <Buttons/>
            </div>
        </div>
    )
}