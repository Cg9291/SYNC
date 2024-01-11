import "./App.scss";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Header from "./components/mainArea/Header.js";
import FollowsRecSection from "./components/sideBar/FollowRecsSection.js";
import Navigation from "./components/navigation/Navigation.js";
import SearchBar from "./components/sideBar/Searchbar.js";
import Timeline from "./components/mainArea/Timeline.js";
import TrendingSection from "./components/sideBar/TrendingSection.js";
import GetVerifiedSection from "./components/sideBar/GetVerifiedSection.js";
import Profile from "./components/sideBar/Profile.js";
import MoreInfoSection from "./components/sideBar/MoreInfoSection.js";
import TweetBox from "./components/mainArea/Tweetbox.js";
import { navListIcons } from "./objects/svgIcons.js";

/* TODO

Priority - High:
*ensure all designs are good & responsive accross multiple browsers
*review btn alignments,and other bugs using browsers other than chrome
*review all texts rendering on mac vs windows
	--mobile:
	*add notification blue indicators


Priority - Medium:
*fill out follow recs pictures etc..
*add profiles and trending header images
*review text/links in each tweets body
*review sizing of header X logo
*check hover status for sizes under 1265px..use ipad
	--mobile:
		*add links to clickable elements
		*find a way to make header scroll behaviour smoother and more consistent

Priority - Low:
*add a way to render condtional checkmark's color
*add linear gradient to twitter gold checkmark icon
*remove all references to twitter i.e classes using "twitter",tweet,word

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
						size="shrunk"
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
