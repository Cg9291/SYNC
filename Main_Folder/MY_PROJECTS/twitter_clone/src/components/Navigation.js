import { useState, useContext, forwardRef, Provider } from "react";
import TweetButton from "./TweetButton.js";
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
	communitiesIcon,
} from "../assets/icons/svg_exports";

export const Navigation = forwardRef((props, navComponentRef) => {
	NavListItems.defaultProps = {
		classNames: "nav_li",
	};

	const navFirstElementRef = props.navFirstElementRef;
	return (
		<nav
			className="nav"
			ref={navComponentRef}
		>
			<div className="wrapper">
				<div className="nav_twitter-logo-box">{twitterXLogoNav}</div>
				<NavFocusContext.Provider
					value={{
						focusedLi: props.focusedLi,
						setFocusedLi: props.setFocusedLi,
						clickedNavElement: props.clickedNavElement,
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
				<div className="wrappers2">
					<TweetButton text="Post" />
				</div>
			</div>
		</nav>
	);
});


const NavListItems = forwardRef(function (props, navFirstElementRef) {
	const focusedLiContext = useContext(NavFocusContext);

	let focusedLi = focusedLiContext.focusedLi;
	let setFocusedLi = focusedLiContext.setFocusedLi;

	const focusHandler = () => {
		let nextState = {};
		Object.keys(focusedLi).forEach(key => {
			nextState[key] = false;
		});
		nextState[props.identifier.name] = true;
		setFocusedLi(nextState);
	};

	return (
		<li className={props.classNames}>
			<a
				href="#"
				className="nav_a"
				ref={navFirstElementRef}
				onFocus={focusHandler}
			>
				{props.identifier(focusedLiContext.focusedLi[props.identifier.name])}
				<span
					className={
						focusedLiContext.focusedLi[props.identifier.name]
							? "nav_text-focused"
							: "nav_text"
					}
				>
					{props.label}
				</span>
			</a>
		</li>
	);
});
