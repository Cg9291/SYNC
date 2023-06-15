import { useState } from "react"

export default function Profile(props){
    const [userName,setUserName]=useState({
      userName:"CGcodes",
      userHandle:"@Cg_devs"
    })
    return (
			<div className="profile-wrapper">
				<div className="profile-wrapper_container">
					<div className="">
						<img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" />
					</div>
					<div className="profile-wrapper_user-info">
						<b>{userName.userName}</b>
						<div>{userName.userHandle}</div>
					</div>
					<span>
						<b>...</b>
					</span>
				</div>
			</div>
		);
  }
