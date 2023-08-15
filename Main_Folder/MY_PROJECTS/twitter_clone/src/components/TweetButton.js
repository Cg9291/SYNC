import { writeTweetIcon } from "../assets/icons/svg_exports.js";

export default function TweetButton(props) {
	return props.btn === "btn" ? (
		<form>
			<button className="tweet-area_pill-btn">
				<span className="tweet-area_pill-btn-text">{props.text}</span>
			</button>
		</form>
	) : props.text === "Post" ? (
		<div className="nav_tweet-button_container">
			<a
				href="#"
				className="nav_tweet-button_container_button-wrapper"
			>
				<>{writeTweetIcon}</>
				<span className="nav_tweet-button_container_text">{props.text}</span>
			</a>
		</div>
	) : props.text === "Follow" ? (
		<a
			href="#"
			className="follow-recommendations_button_wrapper"
		>
			<span className="follow-recommendations_button_text">{props.text}</span>
		</a>
	) : (
		<div className="getVerified_button_container">
			<a
				href="#"
				className="getVerified_button_wrapper"
			>
				<span className="getVerified_button_text">{props.text}</span>
			</a>
		</div>
	);
}
