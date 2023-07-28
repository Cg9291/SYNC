import logo from "./logo.svg";
import "./App.scss";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Header from "./components/Header";
import FollowsRecSection from "./components/FollowRecs";
import { Navigation } from "./components/Navigation";
import Profile from "./functions/profile";
import SearchBar from "./components/Searchbar";
import Timeline from "./components/Timeline";
import TrendingSection from "./components/Trending";
import { GetVerified } from "./components/GetVerified";
import { profile } from "./functions/profile.js";
import { moreInfo } from "./functions/moreInfo";
import { NavListItems } from "./components/NavListItems";
/* import {tweetButton} from "./components/TweetButton.js"; */

/* TODO
GLOBAL!!
*add a way to limit width of tweets userNames when too long
*add conditionallity for checkmark display in backup timeline
*work on mass imports for tweetArray function
*program profile username to end "..." when text is too long
*remove all references to twitter i.e classes using "twitter",tweet,word
*review color of "getVerified text" & "show more" footers
*add profiles and trending header images


MOBILE!!
*review anchor elements hover backgrounds
*review for you clicked bar size + words alignment

Once timeline is switched from embed to api


*add notification blue indicators
*add links to clickable elements

-find a way to make header scroll behaviour smoother and more consistent
-review icons'svgs

TABLETS!!
*add blue color to search bar border+icon on focus/selection
*review flexible sizing for trending cards(maybe after api is added)
*review scroll behavior of right container to make it move with timeline up to a point(need to join mid and third container)
-for you,following and myfeed could use minor position adjustments
*/

/* NOTES:
	-remember that sticky remains in flow of things vs absolute doesnt..therefore sticky is preferred if you wanna make the sticky element part of a container/group scroll behaviour */

function App() {
	let scrollTracker = useRef();
	let focusedText = useRef([]);
	let navComponentRef = useRef();
	let navFirstElement = useRef();
	//let autoFocusNavElement=useRef();

	let [clickedElement, setClickedElement] = useState("forYou");

	let [clickedNavElement, setClickedNavElement] = useState();

	let [focusedBarLength, setFocusedBarLength] = useState();

	let [scrollTopValue, setScrollTopValue] = useState();
	let [prevScrollTopValue, setPrevScrollTopValue] = useState();
	let [headerHeight, setHeaderHeight] = useState("-0.5px");

	let [focusedLi, setFocusedLi] = useState({
		homeIcon: true,
		searchIconNav: false,
		bellIcon: false,
		messagesIcon: false,
		listsIcon: false,
		bookmarksIcon: false,
		communitiesIcon: false,
		checkmarkIcon: false,
		profileIcon: false,
		moreIcon: false,
	});

	//EFFECTS

	useEffect(() => {
		navFirstElement.current.focus();
	}, []);

	useEffect(() => {
		console.log(JSON.stringify(focusedLi));
	}, [focusedLi]);

	useEffect(() => {
		setPrevScrollTopValue(scrollTracker.current.scrollTop);
		console.log(scrollTracker.current.scrollTop);
	}, []);

	useEffect(
		() =>
			scrollTracker.current.addEventListener("scroll", () => {
				scrollTracker.current.scrollTop > prevScrollTopValue
					? setHeaderHeight("-53.5px")
					: setHeaderHeight("-0.5px");
				setPrevScrollTopValue(scrollTracker.current.scrollTop);
			}),
		//THIS FUNCTION IS SET TO ONLY WORK ON SIZES<500PX..SEE CSS
	);

	useEffect(() => {
		clickedElement === "forYou"
			? setFocusedBarLength(
					`${
						focusedText.current[clickedElement].offsetWidth /* + 3.16 */
					}px` /* "56px" */,
			  )
			: setFocusedBarLength(
					`${focusedText.current[clickedElement].offsetWidth}px`,
			  );
		console.log(focusedText.current[clickedElement].offsetWidth);
	}, [clickedElement]);

	//FUNCTIONS

	const focusHeader = e => {
		setClickedElement(e.target.id);
		/* .innerText.length */
	};

	let myTrendingNews = {
		section1: {
			category: "NBA · LIVE",
			topic: "Titanic",
			scope: "140K tweets",
		},
		section2: {
			category: "Sports",
			topic: "#NBADraft",
			scope: "Trending with...",
		},
		section3: {
			category: "Business and Finance",
			topic: "Carl's twitter clone",
			scope: "22k tweets",
		},
		section4: {
			category: "Uplifting News",
			topic: "Carl's got a programmer Job",
			scope: "900k tweets",
		},
		section5: {
			category: "World",
			topic: "Vancouver's hottest Summer",
			scope: "trending with...",
		},
	};

	Header.defaultProps = {
		clickedElement: clickedElement,
		focusHeader: focusHeader,
		focusedBarLength: focusedBarLength,
		focusedText: focusedText,
	};

	Navigation.defaultProps = {
		focusedLi: focusedLi,
		setFocusedLi: setFocusedLi,
	};

	let imageSource =
		"https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640";

	return (
		<div
			className="App"
			ref={scrollTracker}
		>
			<section className="nav-container">
				<Navigation
					ref={navComponentRef}
					navFirstElementRef={navFirstElement}
					clickedNavElement={clickedNavElement}
				/>
				{profile(imageSource, "TheSportsMediaCh...", "TheSportsMediaC")}
			</section>
			<section className="middle-container">
				<Header
					headerHeight={headerHeight}
					ref={focusedText}
				/>

				<Timeline ref={scrollTracker} />
			</section>
			<div className="custom-containers-margin"></div>
			<section className="right-container ">
				<SearchBar />
				<GetVerified />
				<TrendingSection
					myTrendingNews={myTrendingNews}
					imageSource={imageSource}
				/>
				<FollowsRecSection />
				<>{moreInfo()}</>
			</section>
			<div className="whiteSpace-right"></div>
		</div>
	);
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP
