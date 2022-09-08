import Buttons from "./Buttons.js";
import React, { useEffect,useRef } from "react";


export default function Presentational(props){
    const btnsRef=useRef();
    return (
        <div>
            <div id="drum-machine">
                <h1>Presentational</h1>
                <Buttons/>
            </div>
        </div>
    )
}