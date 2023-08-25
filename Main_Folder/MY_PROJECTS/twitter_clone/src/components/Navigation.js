import { useContext} from "react";
import TweetButton from "./TweetButton.js";
import { NavFocusContext } from "../contexts/contexts.js";
import { SvgIcon } from "./SvgIcon.js";
import { generalIcons } from "../objects/navListIcons.js";

export default function Navigation(props) {
	NavListItems.defaultProps = {
		classNames: "nav_li",
	};

	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav_twitter-logo-box">
					<div className="nav_twitter-logo-box_hover-wrapper">
						<SvgIcon
							classNames={"nav_twitter-logo"}
							path={generalIcons.twitterXLogo}
						/>
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
							identifier="homeIcon"
							label={"Home"}
						/>
						<NavListItems
							identifier="searchIconNav"
							label={"Explore"}
							classNames={"nav_li--search-icon"}
						/>
						<NavListItems
							identifier="bellIcon"
							label={"Notifications"}
						/>
						<NavListItems
							identifier="messagesIcon"
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
		let nextState = focusedLi;
		for (let obj in focusedLi) {
			if (obj !== identifier) {
				nextState[obj].focused = false;
			} else {
				nextState[obj].focused = true;
			}
		}
		setFocusedLi(focusedLi => ({ ...focusedLi, nextState }));
	};

	SvgIcon.defaultProps = {
		classNames: "nav_nav-icons",
	};

	return (
		<li className={props.classNames}>
			<a
				href="#"
				className="nav_a"
				onFocus={focusHandler}
			>
				<span className="nav_hover-wrapper">
					<SvgIcon
						path={
							focusedLi[identifier].focused
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
