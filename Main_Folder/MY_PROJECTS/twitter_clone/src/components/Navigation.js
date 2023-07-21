import { useState, forwardRef, Provider } from "react";
import NavListItems from "../functions/navListItems.js";
import { tweetButton } from "../functions/tweetButton.js";
import { NavFocusContext } from "../contexts/contexts.js";
import {
	twitterLogoNav,
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

export const Navigation = forwardRef(function (props,/* navFirstElement */) {

	NavListItems.defaultProps = {
		classNames: "nav_li",
	};
	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav_twitter-logo-box">{twitterLogoNav}</div>
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
							//ref={navFirstElement}
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
						/>
						<NavListItems
							identifier={bookmarksIcon}
							label={"Bookmarks"}
						/>
						<NavListItems
							identifier={communitiesIcon}
							label={"Communities"}
						/>
						<NavListItems
							identifier={checkmarkIcon}
							label={"Verified"}
						/>
						<NavListItems
							identifier={profileIcon}
							label={"Profile"}
						/>
						<NavListItems
							identifier={moreIcon}
							label={"More"}
						/>
					</ul>
				</NavFocusContext.Provider>
				<div className="wrappers2">{tweetButton("Tweet")}</div>
			</div>
		</nav>
	);
});
