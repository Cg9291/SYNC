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

export const Navigation = forwardRef(function (props, navFirstElement) {
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
							{searchIconNav(props.focusedLi.searchIcon)}
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
							onFocus={() => props.setFocusedLi(po => ({ ...po, bell: true }))}
							onBlur={() => props.setFocusedLi(po => ({ ...po, bell: false }))}
						>
							{bellIcon(props.focusedLi.bell)}
							<span className="nav_text">Notifications</span>
						</a>
					</li>

					<li className="nav_li">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, message: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, message: false }))
							}
						>
							{messageIcon(props.focusedLi.message)}
							<span className="nav_text">Messages</span>
						</a>
					</li>

					<li className="nav_li hidden500 ">
						<a
							href="#"
							className="nav_a"
							onFocus={() => props.setFocusedLi(po => ({ ...po, lists: true }))}
							onBlur={() => props.setFocusedLi(po => ({ ...po, lists: false }))}
						>
							{listsIcon(props.focusedLi.lists)}
							<span className="nav_text">Lists</span>
						</a>
					</li>

					<li className="nav_li hidden750-h">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, bookmarks: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, bookmarks: false }))
							}
						>
							{bookmarksIcon(props.focusedLi.bookmarks)}
							<span className="nav_text">Bookmarks</span>
						</a>
					</li>

					<li className="nav_li hidden500">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, communities: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, communities: false }))
							}
						>
							{communitiesIcon(props.focusedLi.communities)}
							<span className="nav_text">Communities</span>
						</a>
					</li>

					<li className="nav_li hidden500">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, twitterBlue: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, twitterBlue: false }))
							}
						>
							{twitterBlueIcon(props.focusedLi.twitterBlue)}
							<span className="nav_text">Verified</span>
						</a>
					</li>

					<li className="nav_li hidden500">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, profile: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, profile: false }))
							}
						>
							{profileIcon(props.focusedLi.profile)}
							<span className="nav_text">Profile</span>
						</a>
					</li>

					<li className="nav_li hidden500">
						<a
							href="#"
							className="nav_a"
							onFocus={() =>
								props.setFocusedLi(po => ({ ...po, more: true }))
							}
							onBlur={() =>
								props.setFocusedLi(po => ({ ...po, more: false }))
							}
						>
							{moreIcon(props.focusedLi.more)}
							<span className="nav_text">More</span>
						</a>
					</li>
				</ul>
				<div className="wrappers2">{tweetButton("Tweet")}</div>
			</div>
		</nav>
	);
});
