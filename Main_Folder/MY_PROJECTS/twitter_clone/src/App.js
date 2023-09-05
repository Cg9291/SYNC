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
import TweetBox from "./components/Tweetbox.js";
import { navListIcons, generalIcons } from "./objects/svgIcons.js";

/* TODO
GLOBAL!!
*review text/links in each tweets body
*review btn alignments,and other bugs using browsers other than chrome
*review sizing of header X logo
*check hover status for sizes under 1265px..use ipad
*add profiles and trending header images
*review all texts rendering on mac vs windows
*add a way to render condtional checkmark's color
*remove all references to twitter i.e classes using "twitter",tweet,word

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

	let [focusedLi, setFocusedLi] = useState(navListIcons);

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
			<section className="navigation">
				<Navigation
					focusedLi={focusedLi}
					setFocusedLi={setFocusedLi}
				/>
				<Profile
					img={imageSource}
					userName="TheSportsMediaChannel"
					handle="TheSportsMediaC"
				/>
			</section>
			<section className="main">
				<section className="main_primary-container">
					<Header headerHeight={headerHeight} />
					<TweetBox
						img={imageSource}
						size="regular"
					/>

					<Timeline img={imageSource} />
				</section>
				<div className="custom-containers-margin"></div>
				<section className="main_sidebar-container ">
					<div className="filler"></div>
					<div className="main_sidebar-container_wrapper1">
						<div className="main_sidebar-container_wrapper2">
							<SearchBar />
							<div className="main_sidebar-container_wrapper3">
								<GetVerifiedSection mode="Subscribe" />
								<TrendingSection imageSource={imageSource} />
								<FollowsRecSection />
								<MoreInfoSection />
							</div>
						</div>
					</div>
				</section>
				<div className="whiteSpace-right"></div>
			</section>
		</div>
	);
}

export default App;
