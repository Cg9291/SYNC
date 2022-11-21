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
        <div className="container-fluid col-2 border border-dark border-0 ms-5 mt-3 bg-warning" style={{maxHeight:'25px'}}>
        <div className="row col-12 m-0 p0 justify-content-start" style={{minHeight:'25px'}} >
            <button className="col col-6  m-0 p-0 bg-primary border border-0" onClick={switchToggle}>
            </button>
        </div>
        </div>
        )
    }else{
        return(
            <div className="container-fluid col-2 border border-dark border-0 ms-5 mt-3 bg-warning" style={{maxHeight:'25px'}}>
            <div className="row  col-12 m-0 p0 justify-content-end" style={{minHeight:'25px'}}>
                <button className="col col-6 m-0 p-0 bg-primary border border-0" onClick={switchToggle}>
                </button>
            </div>
            </div>
        )
}
}