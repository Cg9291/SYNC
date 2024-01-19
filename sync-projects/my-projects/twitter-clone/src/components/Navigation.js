import { useState } from "react"

export default function Navigation(props){
    const [li1,setLi1]=useState("Home")
    return (
      <nav>
        <ul>
          <img id="twitter-logo"
        src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png"
        alt="twitter logo" />
          <a href="#"><li><b>H{/* ome */}</b></li></a>
          <a href="#"><li>E{/* xplore */}</li></a>
          <a href="#"><li>N{/* otifications */}</li></a>
          <a href="#"><li>M{/* essages */}</li></a>
          <a href="#"><li>B{/* ookmarks */}</li></a>
          <a href="#"> <li>L{/* ists */}</li></a>
          <a href="#"><li>P{/* rofile */}</li></a>
          <a href="#"><li>M{/* ore */}</li></a>
          <a href="#"><button type="click" /*onClick={()=>setLi1("Casa")}*/>Tweet</button></a>
        </ul>
      </nav>
    )
  }
