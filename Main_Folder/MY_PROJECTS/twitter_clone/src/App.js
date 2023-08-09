import logo from "./logo.svg";
import "./App.scss";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Header from "./components/Header";
import FollowsRecSection from "./components/FollowRecs";
import { Navigation } from "./components/Navigation";
import SearchBar from "./components/Searchbar";
import Timeline from "./components/Timeline";
import TrendingSection from "./components/Trending";
import { GetVerified } from "./components/GetVerified";
import Profile from "./components/Profile.js";
import MoreInfoSection from "./components/MoreInfoSection.js";
import { NavListItems } from "./components/NavListItems";

/* TODO
GLOBAL!!

*add prompt for searchbar focus
*adjust top property for right container scroll
*fix new classes names
*work on mass imports for tweetArray function
*program profile username to end "..." when text is too long
*remove all references to twitter i.e classes using "twitter",tweet,word
*add profiles and trending header images
*review all texts rendering on mac vs windows

-add conditionallity for checkmark display in backup timeline


MOBILE!!
-add notification blue indicators
-add links to clickable elements
-find a way to make header scroll behaviour smoother and more consistent

TABLETS!!

*review flexible sizing for trending cards(maybe after api is added)
*/

/* NOTES:
	-remember that sticky remains in flow of things vs absolute doesnt..therefore sticky is preferred if you wanna make the sticky element part of a container/group scroll behaviour
	*/

function App() {
	let scrollTracker = useRef();
	let focusedText = useRef([]);
	let navComponentRef = useRef();
	let navFirstElement = useRef();

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
				<Profile
					img={imageSource}
					userName="TheSportsMediaCh..."
					handle="TheSportsMediaC"
				/>
			</section>
			<div className="main-container">
				<section className="middle-container">
					<Header
						headerHeight={headerHeight}
						ref={focusedText}
					/>

					<Timeline ref={scrollTracker} />
				</section>
				<div className="custom-containers-margin"></div>
				<section className="right-container ">
					<div className="filler"></div>

					<div className="wrapper-wrapper">
						<div className="mywrapper">
							<SearchBar />

							<div className="anotherwrapper">
								<GetVerified />
								<TrendingSection
									myTrendingNews={myTrendingNews}
									imageSource={imageSource}
								/>
								<FollowsRecSection />
								<MoreInfoSection />
							</div>
						</div>
					</div>
				</section>
				<div className="whiteSpace-right"></div>
			</div>
		</div>
	);
}

export default App;
