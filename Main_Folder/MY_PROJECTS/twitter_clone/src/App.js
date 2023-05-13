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
*useforward ref to move the midcontainer ref to the timeline-div and then adjust css to have both scroll indicator and sliding header together(moving scroll attribute from middle container to timeline div in css)
-find a way to make header scroll behaviour smoother and more consistent
-review icons'svgs

TABLETS!!
*enable left container scroll behaviour
*/

function App() {
	let midContainer = useRef();
	let [scrollTopValue, setScrollTopValue] = useState();
	let [prevScrollTopValue, setPrevScrollTopValue] = useState();
	let [headerHeight, setHeaderHeight] = useState("0");

	useEffect(() => {
		setPrevScrollTopValue(midContainer.current.scrollTop);
	});

	useEffect(() =>
		midContainer.current.addEventListener("scroll", () => {
			midContainer.current.scrollTop > prevScrollTopValue
				? setHeaderHeight("-53px")
				: setHeaderHeight("0");
			setPrevScrollTopValue(midContainer.current.scrollTop);
			console.log(midContainer.current.scrollTop);
		})
	);
	//   useEffect(()=>{
	// scrollTopValue>lastScrollTopValue?setHeaderHeight("10px"):setHeaderHeight("106px");
	// //lastScrollTopValue=scrollTopValue;
	//   },[scrollTopValue])
	// window.scrollY)
	return (
		<div id="App">
			<section id="left-container">
				<Navigation />
				<Profile />
			</section>
			<section
				id="middle-container"
				ref={midContainer}
			>
				<Header headerHeight={headerHeight} />
				<Timeline />
			</section>
			<section id="right-container">
				<SearchBar />
				<TrendingSection />
				<FollowsRecSection />
			</section>
		</div>
	);
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP
