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
			className="tweet-area hidden500 "
		>
			<div className="tweet-area_wrapper">
				<div className="tweet-area_profile-image-box">
					<img
						className="tweet-area_profile-img"
						src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
					/>
				</div>

				<textarea
					className="tweet-area_tweet-input"
					placeholder="What is happening?!"
				></textarea>
			</div>
			<div className="tweet-area_icons-row">
				<ul className="tweet-area_ul">
					<li className="tweet-area_li tweet-area_li--first-item">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{imagesIcon}
						</a>
					</li>
					<li className="tweet-area_li">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{gifsIcon}
						</a>
					</li>
					<li className="tweet-area_li hidden688">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{pollsIcon}
						</a>
					</li>
					<li className="tweet-area_li hidden-More">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{emojisIcon}
						</a>
					</li>
					<li className="tweet-area_li hidden688">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{schedulesIcon}
						</a>
					</li>
					<li className="tweet-area_li lightIcons">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{locationsIcon}
						</a>
					</li>
				</ul>
				<div className="tweet-area_wrapper--btn">
					<button className="tweet-area_btn">
						<span className="tweet-area_btn-text">Tweet</span>
					</button>
				</div>
			</div>
		</div>
	);
}
