import { writeTweetIcon } from "../assets/icons/svg_exports.js"

export const tweetButton = () => (
	<div className="tweet-circular-btn-container">
		<a href="#" className="tweet-circular-btn-wrapper">
			<>{writeTweetIcon}</>
		</a>
	</div>
);
