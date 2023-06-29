import {writeTweetIcon} from "../assets/icons/svg_exports.js";

export const tweetButton = (text, btn) =>
	btn === "btn" ? (
		<form
		//href="#"
		/* className="tweet-button-wrapper" */
		>
			<button className="tweet-area_pill-btn">
				{/* <>{writeTweetIcon}</> */}
				<span className="tweet-area_pill-btn-text">{text}</span>
			</button>
		</form>
	) : text === "Tweet" ? (
		<div className="tweet-button-container">
			<a
				href="#"
				className="tweet-button-wrapper"
			>
				<>{writeTweetIcon}</>
				<span className="tweet-button-wrapper_text">{text}</span>
			</a>
		</div>
	) : text === "Follow" ? (

			<a
				href="#"
				className="follow-recommendations_button_wrapper"
			>
				<span className="follow-recommendations_button_text">{text}</span>
			</a>
		
	) : (
		<div className="getVerified-container_button-container">
			<a
				href="#"
				className="getVerified-container_button-wrapper"
			>
				{/* <>{writeTweetIcon}</> */}
				<span className="getVerified-container_button-text">{text}</span>
			</a>
		</div>
	);
