import { useState,useRef } from "react";
import QuoteBox from "./QuoteBox.js";
import color from "../objects/colors.js"

export default function Container(){
    let initClr=Math.floor(Math.random()*8.9);
    const [colorRef,setColorRef]=useState(color[initClr]);

    QuoteBox.defaultProps={
        initClr:initClr,
        colorRef:colorRef
    }
    
    return(
        <div>
            <QuoteBox/>
        </div>
    )
}

