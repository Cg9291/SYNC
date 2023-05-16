import {
	imagesIcon,
	gifsIcon,
	pollsIcon,
	emojisIcon,
	schedulesIcon,
	locationsIcon,
} from "../assets/icons/tweetbox_svg";

export default function TweetBox() {
	return (
		<div
			//id="tweet-box"
			className="tweet-area hidden500 "
		>
			<div className="tweet-area_wrapper">
				<div className="tweet-area_profile-image-box">
					<img
						className="tweet-area_profile-img"
						src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
					/>
				</div>

				<input
					className="tweet-area_tweet-input"
					placeholder="What's happening?"
				></input>
			</div>
			<div className="tweet-area_icons-row">
				<ul className="tweet-area_ul">
					<li>
						<a href="#">{imagesIcon}</a>
					</li>
					<li>
						<a href="#">{gifsIcon}</a>
					</li>
					<li className="hidden705">
						<a href="#">{pollsIcon}</a>
					</li>
					<li>
						<a href="#">{emojisIcon}</a>
					</li>
					<li className="hidden705">
						<a href="#">{schedulesIcon}</a>
					</li>
					<li>
						<a href="#">{locationsIcon}</a>
					</li>
				</ul>
				<button>Tweet</button>
			</div>
		</div>
	);
}
