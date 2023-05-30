import logo from "./logo.svg";
import "./App.scss";
import React, {useState, useEffect, useRef} from "react";
import Header from "./components/Header";
import FollowsRecSection from "./components/FollowRecs";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import SearchBar from "./components/Searchbar";
import Timeline from "./components/Timeline";
import TrendingSection from "./components/Trending";
import {tweetButton} from "./components/TweetButton.js";

/* TODO
MOBILE!!
*replace my fonts with actual twitter fonts
*adjust font size in timeline vs outside of it
*add a tweet area component
*add links to clickable elements
*review twitter logo height - mobile
*remove timeline api border
*add header text on selection highlight + blue underscore
*add notification blue indicators
*review anchor elements hover backgrounds
*review viewbox for svg bottom row svg elements
*clean up header scroll animation smoothness
-find a way to make header scroll behaviour smoother and more consistent
-review icons'svgs

TABLETS!!
*enable left container scroll behaviour
*fix write tweet button + nav svg clippings
-for you,following and myfeed could use minor position adjustments
*/

function App() {
	let scrollTracker = useRef();

	let [clickedClass, setClickedClass] = useState("");

	let [scrollTopValue, setScrollTopValue] = useState();
	let [prevScrollTopValue, setPrevScrollTopValue] = useState();
	let [headerHeight, setHeaderHeight] = useState("-0.5");

	useEffect(() => {
		setPrevScrollTopValue(scrollTracker.current.scrollTop);
		console.log(scrollTracker.current.scrollTop);
	}, []);

	useEffect(() => console.log(scrollTracker.current.className));

	useEffect(
		() =>
			scrollTracker.current.addEventListener("scroll", () => {
				scrollTracker.current.scrollTop > prevScrollTopValue
					? setHeaderHeight("-53.5px")
					: setHeaderHeight("-0.5px");
				setPrevScrollTopValue(scrollTracker.current.scrollTop);
				// console.log(scrollTracker.current.scrollTop,"scrolled");
			})
		//THIS FUNCTION IS SET TO ONLY WORK ON SIZES<500PX..SEE CSS
	);

	const changeToBoldFont = e => {
		setClickedClass(e.target.id);
	};

	const changeToMediumFont = e => {
		e.target.style.color = "rgb(83, 100, 113)";
	};

	Header.defaultProps = {
		clickedClass: clickedClass,
		changeToBoldFont: changeToBoldFont,
		changeToMediumFont: changeToMediumFont,
	};

	return (
		<div
			className="App"
			ref={scrollTracker}
		>
			<section className="nav-container">
				<Navigation />
				{tweetButton()}
				<Profile />
			</section>
			<section className="middle-container">
				<Header headerHeight={headerHeight} />

				<Timeline ref={scrollTracker} />
			</section>
			<div className="custom-containers-margin"></div>
			<section className="right-container ">
				<SearchBar />
				<TrendingSection />
				<FollowsRecSection />
			</section>
			<div className="whiteSpace-right"></div>
		</div>
	);
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP
