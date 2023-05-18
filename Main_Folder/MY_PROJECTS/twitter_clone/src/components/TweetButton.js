import { writeTweetIcon } from "../assets/icons/svg_exports.js"

export const tweetButton = () => (
	<div className="tweet-btn-container">
		<a href="#" className="tweet-btn-wrapper">
			<>{writeTweetIcon}</>
		</a>
	</div>
);
