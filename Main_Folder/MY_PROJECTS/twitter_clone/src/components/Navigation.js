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
					</a>
				</li>

				<li className="nav_li--search-icon">
					<a
						href="#"
						className="nav_a"
					>
						{searchIconNav}
					</a>
				</li>
				<li className="nav_li--hashtag-icon">
					<a
						href="#"
						className="nav_a"
					>
						{hashtagIcon}
					</a>
				</li>

				<li className="nav_li">
					<a
						href="#"
						className="nav_a"
					>
						{bellIcon}
					</a>
				</li>

				<li className="nav_li">
					<a
						href="#"
						className="nav_a"
					>
						{messageIcon}
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{listsIcon}
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{bookmarksIcon}
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{twitterBlueIcon}
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{profileIcon}
					</a>
				</li>

				<li className="nav_li hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{moreIcon}
					</a>
				</li>
			</ul>
			<div>{tweetButton()}</div>
		</nav>
	);
}
