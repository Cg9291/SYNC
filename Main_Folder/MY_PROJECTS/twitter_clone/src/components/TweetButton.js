import { writeTweetIcon } from "../assets/icons/svg_exports.js";

export default function TweetButton(props) {
	return props.btn === "btn" ? (
		<form>
			<button className="tweet-area_pill-btn">
				<span className="tweet-area_pill-btn-text">{props.text}</span>
			</button>
		</form>
	) : props.text === "Post" ? (
		<div className="tweet-button-container">
			<a
				href="#"
				className="tweet-button-wrapper"
			>
				<>{writeTweetIcon}</>
				<span className="tweet-button-wrapper_text">{props.text}</span>
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
		<div className="getVerified-container_button-container">
			<a
				href="#"
				className="getVerified-container_button-wrapper"
			>
				<span className="getVerified-container_button-text">{props.text}</span>
			</a>
		</div>
	);
}
