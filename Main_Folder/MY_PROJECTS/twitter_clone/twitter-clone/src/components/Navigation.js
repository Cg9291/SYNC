import { useState } from "react"

export default function Navigation(props){
    const [li1,setLi1]=useState("Home")
    return (
      <nav>
        <ul>
          <img id="twitter-logo" 
        src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png" 
        alt="twitter logo" />
          <a href="#"><li><b>{li1}</b></li></a>
          <a href="#"><li>Explore</li></a>
          <a href="#"><li>Notifications</li></a>
          <a href="#"><li>Messages</li></a>
          <a href="#"><li>Bookmarks</li></a>
          <a href="#"> <li>Lists</li></a>
          <a href="#"><li>Profile</li></a>
          <a href="#"><li>More</li></a>
          <a href="#"><button type="click" /*onClick={()=>setLi1("Casa")}*/>Tweet</button></a>
        </ul>
      </nav>
    )
  }