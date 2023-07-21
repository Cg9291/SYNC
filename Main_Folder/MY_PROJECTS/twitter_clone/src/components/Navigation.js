import { useState, forwardRef } from "react";
import { tweetButton } from "../functions/tweetButton.js";
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
	hashtagIcon,
	communitiesIcon,
} from "../assets/icons/svg_exports";

export const Navigation = forwardRef(function (props,navFirstElement) {
	console.log(props.focusedLi.home);
	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav_twitter-logo-box">{twitterLogoNav}</div>
				<ul className="nav_ul">
					<li className=" nav_li--first-item">
						<a
							href="#"
							className="nav_a"
							ref={navFirstElement}
							onFocus={() => props.setFocusedLi(po => ({ ...po, home: true }))}
							onBlur={() => props.setFocusedLi(po => ({ ...po, home: false }))}
						>
							{homeIcon(props.focusedLi.home)}
							<span className="nav_text">Home</span>
						</a>
					</li>

					<li className="nav_li--search-icon">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, searchIcon: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, searchIcon: false }))
							}
						>
							{homeIcon(props.focusedLi.searchIcon)}
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

					<li className="nav_li hidden500 ">
						<a
							href="#"
							className="nav_a"
						>
							{listsIcon}
							<span className="nav_text">Lists</span>
						</a>
					</li>

					<li className="nav_li hidden750-h">
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
							{communitiesIcon}
							<span className="nav_text">Communities</span>
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
				<div className="wrappers2">{tweetButton("Tweet")}</div>
			</div>
		</nav>
	);
});
