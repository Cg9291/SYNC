import {useState} from "react";
import {homeIcon, searchIcon,bellIcon,messageIcon} from "./svg_exports";

export default function Navigation(props) {
	return (
		<nav>
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
