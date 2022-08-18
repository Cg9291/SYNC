import { useState,useEffect} from "react";

export default function Main(){
    const [json,setJson]=useState([]);
    const [jsonObj,setJsonObj]=useState();
    const [html,setHtml]=useState();

    useEffect(()=>{
        const req=new XMLHttpRequest();
        req.open("GET","https://api.github.com/gists/public",true);
        req.send();
        req.onload=()=>{
        setJsonObj(JSON.parse(req.responseText)); 
        }
    })

    let html2="<div>";
    const handleClick=()=>{
        for(let i=0;i<jsonObj.length;i++){
        html2+='<img src="' +jsonObj[i].owner.avatar_url+'"'+ '/>'; 
        };

        html2+="</div>";
        setJson(()=>{return (html2)});
    }

    return(
        <div>
        <button onClick={handleClick}>Clickity Click</button>
          <div>{json}</div>
        </div>
    )
}