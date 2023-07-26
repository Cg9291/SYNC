import { useState, forwardRef, Provider } from "react";
import {NavListItems} from "../components/NavListItems.js";
import { tweetButton } from "../functions/tweetButton.js";
import { NavFocusContext } from "../contexts/contexts.js";
import {
	twitterXLogoNav,
	homeIcon,
	searchIconNav,
	bellIcon,
	messagesIcon,
	listsIcon,
	bookmarksIcon,
	checkmarkIcon,
	profileIcon,
	moreIcon,
	hashtagIcon,
	communitiesIcon,
} from "../assets/icons/svg_exports";

export default function Navigation(props) {
	NavListItems.defaultProps = {
		classNames: "nav_li",
	};

	const navFirstElementRef=props.navFirstElementRef;
	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav_twitter-logo-box">{twitterXLogoNav}</div>
				<NavFocusContext.Provider
					value={{
						focusedLi: props.focusedLi,
						setFocusedLi: props.setFocusedLi,
					}}
				>
					<ul className="nav_ul">
						<NavListItems
							identifier={homeIcon}
							label={"Home"}
							classNames={"nav_li--first-item"}
							ref={navFirstElementRef}
						/>
						<NavListItems
							identifier={searchIconNav}
							label={"Explore"}
							classNames={"nav_li--search-icon"}
						/>
						<NavListItems
							identifier={bellIcon}
							label={"Notifications"}
						/>
						<NavListItems
							identifier={messagesIcon}
							label={"Messages"}
						/>
						<NavListItems
							identifier={listsIcon}
							label={"Lists"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier={bookmarksIcon}
							label={"Bookmarks"}
							classNames={`${NavListItems.defaultProps.classNames} hidden750-h`}
						/>
						<NavListItems
							identifier={communitiesIcon}
							label={"Communities"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier={checkmarkIcon}
							label={"Verified"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier={profileIcon}
							label={"Profile"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier={moreIcon}
							label={"More"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
					</ul>
				</NavFocusContext.Provider>
				<div className="wrappers2">{tweetButton("Tweet")}</div>
			</div>
		</nav>
	);
}
