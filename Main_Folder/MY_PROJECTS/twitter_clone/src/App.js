import "./App.scss";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Header from "./components/Header";
import FollowsRecSection from "./components/FollowRecsSection";
import Navigation from "./components/Navigation";
import SearchBar from "./components/Searchbar";
import Timeline from "./components/Timeline";
import TrendingSection from "./components/TrendingSection";
import GetVerifiedSection from "./components/GetVerifiedSection";
import Profile from "./components/Profile.js";
import MoreInfoSection from "./components/MoreInfoSection.js";

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

	/* useEffect(() => {
		setPrevScrollTopValue(scrollTracker.current.scrollTop);
		console.log(scrollTracker.current.scrollTop);
	}, []); */

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

	let imageSource =
		"https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640";

	return (
		<div
			className="App"
			ref={scrollTracker}
		>
			<section className="nav-container">
				<Navigation
					focusedLi={focusedLi}
					setFocusedLi={setFocusedLi}
				/>
				<Profile
					img={imageSource}
					userName="TheSportsMediaCh..."
					handle="TheSportsMediaC"
				/>
			</section>
			<div className="main-container">
				<section className="middle-container">
					<Header headerHeight={headerHeight} />

					<Timeline img={imageSource} />
				</section>
				<div className="custom-containers-margin"></div>
				<section className="right-container ">
					<div className="filler"></div>
					<div className="wrapper-wrapper">
						<div className="mywrapper">
							<SearchBar />
							<div className="anotherwrapper">
								<GetVerifiedSection />
								<TrendingSection imageSource={imageSource} />
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
