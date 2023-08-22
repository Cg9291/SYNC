import {
	imagesIcon,
	gifsIcon,
	pollsIcon,
	emojisIcon,
	schedulesIcon,
	locationsIcon,
} from "../assets/icons/tweetbox_svg";
import TweetButton from "./TweetButton.js";

export default function TweetBox(props) {
	return props.size === "regular" ? (
		<div className="tweet-area hidden500 ">
			<div className="tweet-area_wrapper">
				<div className="tweet-area_profile-image-box">
					<a href="#">
						<img
							className="tweet-area_profile-img"
							src={props.img}
						/>
					</a>
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
					<li className="tweet-area_li--light-icon">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{locationsIcon}
						</a>
					</li>
				</ul>
				<div className="tweet-area_wrapper--btn">
					<TweetButton
						text="Post"
						btn="btn"
					/>
				</div>
			</div>
		</div>
	) : (
		<div className="tweet-area--shrunk hidden500 ">
			<div className="tweet-area--shrunk_wrapper">
				<div className="tweet-area_profile-image-box">
					<img
						className="tweet-area_profile-img"
						src={props.img}
					/>
				</div>

				<textarea
					className="tweet-area--shrunk_tweet-input"
					placeholder="What is happening?!"
				></textarea>
			</div>
			<div className="tweet-area--shrunk_icons-row">
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
					<li className="tweet-area_li hidden-688">
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
					<li className="tweet-area_li--light-icon">
						<a
							className="tweet-area_anchors"
							href="#"
						>
							{locationsIcon}
						</a>
					</li>
				</ul>
				<div className="tweet-area_wrapper--btn">
					<TweetButton
						text="Post"
						btn="btn"
					/>
				</div>
			</div>
		</div>
	);
	}
