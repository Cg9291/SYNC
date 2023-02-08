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
        <div className="row m-0 p-0 border border-dark bg-warning h-25 w-25 mt-3 ms-4" style={{minHeight:'25px'}}>
            <div className="col-6 d-flex justify-content-center align-items-center">ON</div>
            <button className="col col-6  m-0 p-0 border bg-primary " onClick={switchToggle}>
            </button>
        </div>
        )
    }else{
        return(
            <div className="row m-0 p-0 border border-dark bg-warning h-25 w-25 mt-3 ms-4 " style={{minHeight:'25px'}}>
                <button className="col col-6 m-0 p-0 bg-primary border " onClick={switchToggle}>
                </button>
                <div className="col-6 d-flex justify-content-center align-items-center">OFF</div>
            </div>
        )
}
}
