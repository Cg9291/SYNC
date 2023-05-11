import {useState} from "react";
import {homeIcon, searchIcon,bellIcon,messageIcon} from "./svg_exports";

export default function Navigation(props) {
	return (
		<nav>
			<ul>
				<a href="#">
					<li>
						{homeIcon}
					</li>
				</a>
				<a href="#">
					<li>
						{searchIcon}
					</li>
				</a>
				<a href="#">
					<li>{bellIcon}</li>
				</a>
				<a href="#">
					<li>{messageIcon}</li>
				</a>
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
