import logo from './logo.svg';
import './App.scss';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div id="App">
      <section id="left-container">
        <Navigation/>
      </section>
      <section id="middle-container">
        
      </section>
      <section id="right-container">
      <SearchBar/>
      </section>
    </div>
  );
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP



function Navigation(props){
  const [li1,setLi1]=useState("Home")
  return (
    <nav>
      <ul>
        <img id="twitter-logo" 
      src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png" 
      alt="twitter logo" />
        <li><b>{li1}</b></li>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Bookmarks</li>
        <li>Lists</li>
        <li>Profile</li>
        <li>More</li>
        <button type="click" /*onClick={()=>setLi1("Casa")}*/>Tweet</button>
      </ul>
    </nav>
  )
}

function SearchBar(props){
  return (
    <input placeholder='Search Twitter'></input>
  )
}


