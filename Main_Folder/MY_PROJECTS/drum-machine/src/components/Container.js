import Buttons from "./Buttons.js";
import React, { useEffect,useRef } from "react";
/*
 TODO:
 - download better sounds(maybe look at Logic Pro (in files))
 - enable some type of visual feedback for when a key is clicked //pressed
 - get final design from Anais */

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
