import { SvgIcon } from "./SvgIcon.js";
import { generalIcons } from "../objects/navListIcons";

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
				<SvgIcon
					classNames={generalIcons.writeTweetIcon.classNames}
					path={generalIcons.writeTweetIcon.path}
				/>
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
	) : props.text === "Subscribe" ? (
		<div className="subscribeToPremium_button_container">
			<a
				href="#"
				className="subscribeToPremium_button_wrapper"
			>
				<span className="subscribeToPremium_button_text">{props.text}</span>
			</a>
		</div>
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
