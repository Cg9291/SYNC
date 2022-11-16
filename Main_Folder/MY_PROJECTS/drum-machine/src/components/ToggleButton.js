import { useState } from "react";

export default function ToggleButton(){
    const[toggle,setToggle]=useState(false);

    const switchToggle=()=>{
        if (toggle){
            setToggle(false);
        }else{
            setToggle(true);
        }
    }

    

    if(toggle){
        return(
        <div className="container-fluid col-2 border border-dark">
        <div className="row  col-12 m-0 p0 justify-content-start" style={{minHeight:'25px'}}>
            <button className="col col-6  m-0 p-0 bg-primary border border-0" onClick={switchToggle}>
            </button>
        </div>
        </div>
        )
    }else{
        return(
            <div className="container-fluid col-2 border border-dark">
            <div className="row  col-12 m-0 p0 justify-content-end" style={{minHeight:'25px'}}>
                <button className="col col-6 m-0 p-0 bg-primary border border-0" onClick={switchToggle}>
                </button>
            </div>
            </div>
        )
}
}