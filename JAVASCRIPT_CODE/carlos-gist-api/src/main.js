import { useState,useEffect} from "react";
import './main.css'

export default function Main(){
    const [json,setJson]=useState([]);
    const [jsonObj,setJsonObj]=useState();


    useEffect(()=>{
        const req=new XMLHttpRequest();
        req.open("GET","https://api.github.com/gists/public",true);
        req.send();
        req.onload=()=>{
        setJsonObj(JSON.parse(req.responseText)); 
        }
    })

    let html2;
    const handleClick=()=>{
        window.alert("It's gonna be a bit ugly because I decided to add the usernames instead of Id's, but was too lazy to format for the long ones and so greyed out the files backgrounds....just change line23 index.owner.login to index.owner.id if needed");

        setJson(jsonObj.map(index=>html2=<div>
            <div className="listContainer">
                <div className="logins"><u>{index.owner.id}</u></div>
                <div className="userDisplay">
                    <img className="avatars" src={index.owner.avatar_url}/>
                    <div className="files">{Object.keys(index.files)}</div>
                </div>
            </div>
            <hr/>
            </div>
        ))
        ;

        //html2+="</div>";
        //setJson(html2);
    }

    return(
        <div>
        <button onClick={handleClick}>Clickity Click</button>
          <div className="listContainer">{json}</div>
        </div>
    )
}