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

*review twitter logo height - mobile
*add notification blue indicators
*review anchor elements hover backgrounds
*review for you clicked bar size + words alignment

Once timeline is switched from embed to api
*remove timeline api border
*adjust font size in timeline

*add links to clickable elements

-find a way to make header scroll behaviour smoother and more consistent
-review icons'svgs

TABLETS!!
*add blue color to search bar border+icon on focus/selection
*review flexible sizing for trending cards(maybe after api is added)
*review scroll behavior of right container to make it move with timeline up to a point
-for you,following and myfeed could use minor position adjustments
*/

function App() {
	let scrollTracker = useRef();
	let focusedText=useRef([]);

	let [clickedElement, setClickedElement] = useState('forYou');

	let [focusedBarLength,setFocusedBarLength]=useState();

	let [scrollTopValue, setScrollTopValue] = useState();
	let [prevScrollTopValue, setPrevScrollTopValue] = useState();
	let [headerHeight, setHeaderHeight] = useState("-0.5px");

	useEffect(() => {
		setPrevScrollTopValue(scrollTracker.current.scrollTop);
		console.log(scrollTracker.current.scrollTop);
	}, []);

	/* useEffect(() => console.log(scrollTracker.current.className)); */

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

	useEffect(() =>{
		clickedElement==="forYou"?setFocusedBarLength(`${focusedText.current[clickedElement].offsetWidth+0}px`):
		setFocusedBarLength(`${focusedText.current[clickedElement].offsetWidth}px`);
		console.log(focusedText.current[clickedElement].offsetWidth);
		/* setFocusedBarLength(focusedText.current[clickedElement]) */},[clickedElement]
	);

	const focusHeader = e => {
		setClickedElement(e.target.id);
		/* .innerText.length */
	};


	/* const unfocusHeader = e => {
		e.target.style.color = "rgb(83, 100, 113)";
	}; */

	Header.defaultProps = {
		clickedElement: clickedElement,
		focusHeader: focusHeader,
		focusedBarLength:focusedBarLength,
		focusedText:focusedText
		/* unfocusHeader: unfocusHeader, */
	};

	return (
		<div
			className="App"
			ref={scrollTracker}
		>
			<section className="nav-container">
				<Navigation />
				{/* {tweetButton()} */}
				<Profile />
			</section>
			<section className="middle-container">
				<Header headerHeight={headerHeight} ref={focusedText}/>

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
