import { useState } from "react"

export default function Profile(props){
    const [userName,setUserName]=useState({
      userName:"CGcodes",
      userHandle:"@Cg_devs"
    })
    return(
      <div className="profile-container">
        <div className="profile-container_image-wrapper">
          <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"/>
          <div className="profile-container_user-info">
            {userName.userName}<br/>
            {userName.userHandle}
          </div>
          <span><strong>...</strong></span>
        </div>
      </div>
    )
  }
