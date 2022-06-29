import logo from './logo.svg';
import './App.scss';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div id="App">
      <section id="left-container">
        <Navigation/>
        <Profile/>
      </section>
      <section id="middle-container">
      </section>
      <section id="right-container">
      <SearchBar/>
      <TrendingSection/>
      <FollowsRecSection/>
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
        <button type="click" class="fa fa-thumbs-up" /*onClick={()=>setLi1("Casa")}*/>Tweet</button>
      </ul>
    </nav>
  )
}

function Profile(props){
  const [userName,setUserName]=useState({
    userName:"CGcodes",
    userHandle:"@Cg_devs"
  })
  return(
    <div id="profile-pill-container">
      <div id="profile-pill">
        <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"/>
        <div id="username">
          {userName.userName}<br/>
          {userName.userHandle}
        </div>
        <div><strong>...</strong></div>
      </div>
    </div>
  )
}

function SearchBar(props){
  return (
    <input class="fa fa-search" placeholder='&#xf002; Search Twitter'></input>
  )
}

function TrendingSection(){
  return (
    <section id="trending-section">
      <div class="cards-header">What's happening</div>
      <div class="cards">NEWS #1</div>
      <div class="cards">NEWS #2</div>
      <div class="cards">NEWS #3</div>
      <div class="cards">NEWS #4</div>
      <div class="cards-footer"><a href='#'>Show more</a></div>
    </section>
  )
}

function FollowsRecSection(){
  return(
    <section id="rec-follows-section">
      <div class="cards-header">Who to follow</div>
      <div class="cards">PROFILE #1</div>
      <div class="cards">PROFILE #2</div>
      <div class="cards">PROFILE #3</div>
      <div class="cards-footer"><a href='#'>Show more</a></div>
    </section>
  )
}


