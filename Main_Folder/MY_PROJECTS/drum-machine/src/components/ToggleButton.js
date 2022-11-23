import { useState } from "react";
import '../ToggleButtons.scss'

export default function ToggleButton(props){
    

    const switchToggle=()=>{
        if (props.toggle){
            props.setToggle(false);
        }else{
            props.setToggle(true);
        }
    }

    

    if(props.toggle){
        return(
        <div className="row m-0 p-0 border border-dark border-0 ms-5 mt-3 bg-warning justify-content-start" style={{minHeight:'25px'}}>
            <button className="col col-6  m-0 p-0 border border-0 bg-primary" onClick={switchToggle}>
            </button>
        </div>
        )
    }else{
        return(
            <div className="row  m-0 p-0 border border-dark border-0 ms-5 mt-3 bg-warning justify-content-end" style={{minHeight:'25px'}}>
                <button className="col col-6 m-0 p-0 bg-primary border border-0" onClick={switchToggle}>
                </button>
            </div>
        )
}
}