import { useContext, forwardRef } from "react";
import TweetButton from "./TweetButton.js";
import { NavFocusContext } from "../contexts/contexts.js";
import {
	TwitterXLogo,
	HomeIcon,
	SearchIconNav,
	BellIcon,
	MessagesIcon,
	listsIcon,
	bookmarksIcon,
	checkmarkIcon,
	profileIcon,
	moreIcon,
	communitiesIcon,
} from "../assets/icons/svg_exports";

export default function Navigation(props) {
	NavListItems.defaultProps = {
		classNames: "nav_li",
	};

	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav_twitter-logo-box">
					<div className="nav_twitter-logo-box_hover-wrapper">
						<TwitterXLogo usage="nav" />
					</div>
				</div>
				<NavFocusContext.Provider
					value={{
						focusedLi: props.focusedLi,
						setFocusedLi: props.setFocusedLi,
						clickedNavElement: props.clickedNavElement,
					}}
				>
					<ul className="nav_ul">
						<NavListItems
							identifier="HomeIcon"
							label={"Home"}
						/>
						<NavListItems
							identifier="SearchIconNav"
							label={"Explore"}
							classNames={"nav_li--search-icon"}
						/>
						<NavListItems
							identifier="BellIcon"
							label={"Notifications"}
						/>
						<NavListItems
							identifier="MessagesIcon"
							label={"Messages"}
						/>
						<NavListItems
							identifier="listsIcon"
							label={"Lists"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier="bookmarksIcon"
							label={"Bookmarks"}
							classNames={`${NavListItems.defaultProps.classNames} hidden750-h`}
						/>
						<NavListItems
							identifier="communitiesIcon"
							label={"Communities"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier="checkmarkIcon"
							label={"Verified"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier="profileIcon"
							label={"Profile"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
						<NavListItems
							identifier="moreIcon"
							label={"More"}
							classNames={`${NavListItems.defaultProps.classNames} hidden500`}
						/>
					</ul>
				</NavFocusContext.Provider>
				<div className="nav_tweet-button">
					<TweetButton text="Post" />
				</div>
			</div>
		</nav>
	);
}

function NavListItems(props) {
	const focusedLiContext = useContext(NavFocusContext);

	let focusedLi = focusedLiContext.focusedLi;
	let setFocusedLi = focusedLiContext.setFocusedLi;
	const identifier = props.identifier;

	const focusHandler = () => {
		setFocusedLi(for (let obj in focusedLi) {
			if (obj !== identifier) {
				obj.focused = false;
			} else {
				obj.focused = true;
			}})


			/* let nextState = {}; */
			/* Object.keys(focusedLi).forEach(key => {
			nextState[key].focused = false;
		}); */
		/* nextState[identifier].focused = true;
		setFocusedLi(nextState); */
	};
	/* console.log(focusedLiContext.focusedLi[props.identifier].unfocusedStyle); */
	return (
		<li className={props.classNames}>
			<a
				href="#"
				className="nav_a"
				onFocus={focusHandler}
			>
				<span className="nav_hover-wrapper">
					{/* {props.identifier(focusedLiContext.focusedLi[props.identifier.name])} */}
					{/* 	<props.identifier
						focused={focusedLiContext.focusedLi[props.identifier.name]}
					/>
					{console.log(props.identifier)} */}
					<SvgIcon
						iconName={identifier}
						path={
							focusedLi[identifier].focused === true
								? focusedLi[identifier].focusedStyle
								: focusedLi[identifier].unfocusedStyle
						}
					/>

					<span
						className={
							focusedLi[identifier].focused ? "nav_text-focused" : "nav_text"
						}
					>
						{props.label}
					</span>
				</span>
			</a>
		</li>
	);
}

function SvgIcon(props) {
	//console.log(props.path);
	return (
		<svg
			className="nav_nav-icons"
			viewBox="0 0 24 24 "
		>
			<g>
				<path d={props.path}></path>
			</g>
		</svg>
	);
}
