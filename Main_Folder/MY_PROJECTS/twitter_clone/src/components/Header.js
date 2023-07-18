import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png";
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png";
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png";
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png";
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png";
import {twitterLogoHeader} from "../assets/icons/svg_exports.js";
import { ForwardedRef, forwardRef } from "react";
import { useRef } from "react";

export default function Header(props) {
	return (
		<div
			style={{top: props.headerHeight}}
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
				<div className="header_twitter-logo-box">{twitterLogoHeader}</div>
				<div className="alignment-boxes"></div>
			</div>
			<div className="header_header-bottom">
				<ul className="header_ul">
					<li
						className="header_li"
						onFocus={props.focusHeader}
					>
						<a
							id="forYou"
							href="#"
							className={`${
								props.clickedElement === "forYou"
									? "header_anchor--clicked"
									: "header_anchor"
							}`}
						>
							<div ref={ref => (props.focusedText.current["forYou"] = ref)}>
								For you
							</div>
							<div
								className="blue-focused-bar"
								style={{width: props.focusedBarLength}}
							></div>
						</a>
					</li>
					<li
						className="header_li"
						onFocus={props.focusHeader}
					>
						<a
							id="following"
							href="#"
							className={`${
								props.clickedElement === "following"
									? "header_anchor--clicked"
									: "header_anchor"
							}`}
						>
							<div ref={ref => (props.focusedText.current["following"] = ref)}>
								Following
							</div>
							<span
								className="blue-focused-bar"
								style={{width: props.focusedBarLength}}
							></span>
						</a>
					</li>
					<li
						className="header_li"
						onFocus={props.focusHeader}
					>
						<a
							id="myFeed"
							href="#"
							className={`${
								props.clickedElement === "myFeed"
									? "header_anchor--clicked"
									: "header_anchor"
							}`}
						>
							<div ref={ref => (props.focusedText.current["myFeed"] = ref)}>
								My feed
							</div>
							<span
								className="blue-focused-bar"
								style={{width: props.focusedBarLength}}
							></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
