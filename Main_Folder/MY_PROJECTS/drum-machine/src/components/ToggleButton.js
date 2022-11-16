import { useState } from "react";

export default function ToggleButton(){
    const[toggle,setToggle]=(false);

    const onCLick=()=>{
        if (toggle){
            setToggle(false);
        }else{
            setToggle(true);
        }
    }

    

    return(
        <div className="container-fluid col-2">
        <div className="row border border-dark col-12 m-0 p0" style={{minHeight:'25px'}}>
            <div className="col col-6 border border-dark m-0 p-0 bg-primary">
            </div>
        </div>
        </div>
    )
}