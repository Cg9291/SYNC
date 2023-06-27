import {useState} from "react";
import {tweetButton} from "./tweetButton.js";

export const profile = (img, userName, handle, follow) =>
	/* const [userName,setUserName]=useState({
      userName:"CGcodes",
      userHandle:"@Cg_devs"
    }) */

	follow === true ? (
		<div className="follow-recommendations_cards_wrapper">
			<div className="follow-recommendations_cards_container">
				<div className="">
					<img
						className="follow-recommendations_cards_image"
						src={img}
					/>
				</div>
				<div className="follow-recommendations_cards_user-info">
					<b>{userName}</b>
					<div>@{handle}</div>
				</div>
				<span className="follow-recommendations_button-container">
					{tweetButton("Follow")}
				</span>
			</div>
		</div>
	) : (
		<div className="profile-wrapper">
			<div className="profile-wrapper_container">
				<div className="">
					<img
						className="profile-wrapper_image"
						src={img}
					/>
				</div>
				<div className="profile-wrapper_user-info">
					<b>{userName}</b>
					<div>@{handle}</div>
				</div>
				<span>
					<b>...</b>
				</span>
			</div>
		</div>
	);
