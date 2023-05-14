import {useState} from "react";
import {
	twitterLogo,
	homeIcon,
	searchIcon,
	bellIcon,
	messageIcon,
  listsIcon,
  bookmarksIcon,
  twitterBlueIcon,
  profileIcon,
  moreIcon
} from "./svg_exports";

export default function Navigation(props) {
	return (
		<nav>
			<div className="twitter-logo-box">{twitterLogo}</div>
			<ul>
				<li>
					<a href="#">{homeIcon}</a>
				</li>

				<li>
					<a href="#">{searchIcon}</a>
				</li>

				<li>
					<a href="#">{bellIcon}</a>
				</li>

				<li>
					<a href="#">{messageIcon}</a>
				</li>

				<li className="hidden500">
					<a href="#">{listsIcon}</a>
				</li>

				<li className="hidden500">
					<a href="#">{bookmarksIcon}</a>
				</li>

				<li className="hidden500">
					<a href="#">{twitterBlueIcon}</a>
				</li>

				<li className="hidden500">
					<a href="#">{profileIcon}</a>
				</li>

				<li className="hidden500">
					<a href="#">{moreIcon}</a>
				</li>

				{/* <a href="#">
					<li>Bookmarks</li>
				</a>
				<a href="#">
					{" "}
					<li>Lists</li>
				</a>
				<a href="#">
					<li>Profile</li>
				</a>
				<a href="#">
					<li>More</li>
				</a>
				<a href="#">
					<button type="click" /*onClick={()=>setLi1("Casa")}/>Tweet</button>
				</a> */}
			</ul>
		</nav>
	);
}
