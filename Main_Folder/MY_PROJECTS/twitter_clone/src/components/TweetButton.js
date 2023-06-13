import { writeTweetIcon } from "../assets/icons/svg_exports.js"

export const tweetButton = () => (
	<div className="tweet-circular-btn-container">
		<a
			href="#"
			className="tweet-circular-btn-wrapper"
		>
			<>{writeTweetIcon}</>
			<span className="tweet-circular-btn-wrapper_pill-btn-text">Tweet</span>
		</a>
	</div>
);
