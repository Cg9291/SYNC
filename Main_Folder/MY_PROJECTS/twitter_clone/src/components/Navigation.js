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
	moreIcon,
} from "../assets/icons/svg_exports";

export default function Navigation(props) {
	return (
		<nav className="nav">
			<div className="nav_twitter-logo-box">{twitterLogo}</div>
			<ul className="nav_ul">
				<li className="nav_ul first-item">
					<a
						href="#"
						className="nav_a"
					>
						{homeIcon}
					</a>
				</li>

				<li className="nav_ul">
					<a
						href="#"
						className="nav_a"
					>
						{searchIcon}
					</a>
				</li>

				<li className="nav_ul">
					<a
						href="#"
						className="nav_a"
					>
						{bellIcon}
					</a>
				</li>

				<li className="nav_ul">
					<a
						href="#"
						className="nav_a"
					>
						{messageIcon}
					</a>
				</li>

				<li className="nav_ul hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{listsIcon}
					</a>
				</li>

				<li className="nav_ul hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{bookmarksIcon}
					</a>
				</li>

				<li className="nav_ul hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{twitterBlueIcon}
					</a>
				</li>

				<li className="nav_ul hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{profileIcon}
					</a>
				</li>

				<li className="nav_ul hidden500">
					<a
						href="#"
						className="nav_a"
					>
						{moreIcon}
					</a>
				</li>
			</ul>
		</nav>
	);
}
