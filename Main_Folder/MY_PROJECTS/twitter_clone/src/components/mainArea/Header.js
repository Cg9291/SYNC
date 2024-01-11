import { SvgIcon } from "../SvgIcon.js";
import { TwitterXLogo } from "../../assets/icons/svg_exports.js";
import { generalIcons } from "../../objects/svgIcons.js";
import { useState } from "react";

export default function Header(props) {
	const [focusStatus, setFocusStatus] = useState({
		"For you": true,
		Following: false,
		"My feed": false,
	}); //im using this instead of css:focus in order to prevent losing focus when any other element outside of this ul is clicked

	return (
		<div
			style={{ top: props.headerHeight }}
			className="header headerTransition"
		>
			<div className="header_header-top">
				<div className="alignment-boxes">
					<div>
						<img
							className="header_profile-picture"
							src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
						/>
					</div>
				</div>
				<span className="header_text-span">Home</span>
				<div className="header_twitter-logo-box">
					<SvgIcon
						classNames="header_twitter-logo"
						path={generalIcons.twitterXLogo}
					/>
				</div>
				<div className="alignment-boxes"></div>
			</div>
			<div className="header_header-bottom">
				<ul className="header_ul">
					<HeaderListItems
						value="For you"
						focusStatusState={focusStatus}
						setFocusStatus={setFocusStatus}
					/>
					<HeaderListItems
						value="Following"
						focusStatusState={focusStatus}
						setFocusStatus={setFocusStatus}
					/>
					<HeaderListItems
						value="My feed"
						focusStatusState={focusStatus}
						setFocusStatus={setFocusStatus}
					/>
				</ul>
			</div>
		</div>
	);
}

function HeaderListItems(props) {
	const handleFocus = () => {
		let focusStatusCopy = {};
		Object.keys(props.focusStatusState).forEach(key => {
			focusStatusCopy[key] = false;
		});
		focusStatusCopy[props.value] = true;
		props.setFocusStatus(focusStatusCopy);
	};

	return (
		<li className="header_li">
			<a
				href="#"
				className={
					props.focusStatusState[props.value]
						? "header_anchor-focused"
						: "header_anchor"
				}
				onFocus={handleFocus}
			>
				<div
					className={
						props.value === "For you"
							? "header_anchor_wrapper--for-you"
							: "header_anchor_wrapper"
					}
				>
					<div className="header_anchor_text">{props.value}</div>
					<div
						className={
							props.value === "For you"
								? "blue-focused-bar--for-you"
								: "blue-focused-bar"
						}
					></div>
				</div>
			</a>
		</li>
	);
}
