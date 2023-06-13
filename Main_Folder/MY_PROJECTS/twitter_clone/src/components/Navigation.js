import {useState} from "react";
import { tweetButton } from "./TweetButton";
import {
	twitterLogoNav,
	homeIcon,
	searchIconNav,
	bellIcon,
	messageIcon,
	listsIcon,
	bookmarksIcon,
	twitterBlueIcon,
	profileIcon,
	moreIcon,
	hashtagIcon
} from "../assets/icons/svg_exports";

export default function Navigation(props) {
	return (
		<nav className="nav">
			<div className="nav_twitter-logo-box">{twitterLogoNav}</div>
			<ul className="nav_ul">
				<li className=" nav_li--first-item">
					<a
						href="#"
						className="nav_a"
					>
						{homeIcon}
						<span className="nav_text">Home</span>
					</a>
				</li>

				<li className="nav_li--search-icon">
					<a
						href="#"
						className="nav_a"
					>
						{searchIconNav}
						<span className="nav_text">Explore</span>
					</a>
				</li>
				{/* <li className="nav_li--hashtag-icon">
					<a
						href="#"
						className="nav_a"
					>
						{hashtagIcon}
					</a>
				</li> */}

				<li className="nav_li">
					<a
						href="#"
						className="nav_a"
					>
						{bellIcon}
						<span className="nav_text">Notifications</span>
					</a>
				</li>

				<li className="nav_li">
					<a
						href="#"
						className="nav_a"
					>
						{messageIcon}
						<span className="nav_text">Messages</span>
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{listsIcon}
						<span className="nav_text">Lists</span>
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{bookmarksIcon}
						<span className="nav_text">Bookmarks</span>
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{twitterBlueIcon}
						<span className="nav_text">Verified</span>
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{profileIcon}
						<span className="nav_text">Profile</span>
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{moreIcon}
						<span className="nav_text">More</span>
					</a>
				</li>
			</ul>
			<div style={{width: "100%", marginLeft: 0}}>{tweetButton()}</div>
		</nav>
	);
}
