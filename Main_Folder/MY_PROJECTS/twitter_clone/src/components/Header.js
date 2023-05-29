import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png";
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png";
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png";
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png";
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png";
import {twitterLogoHeader} from "../assets/icons/svg_exports.js";

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
						onFocus={props.changeToBoldFont}
						onBlur={props.changeToMediumFont}
					>
						<a
							id="forYou"
							href="#"
							className={`${
								props.clickedClass === "forYou"
									? "header_anchor--clicked"
									: "header_anchor"
							}`}
						>
							<div>For you</div>
							<span></span>
						</a>
					</li>
					<li
						className="header_li"
						onFocus={props.changeToBoldFont}
						onBlur={props.changeToMediumFont}
					>
						<a
							id="following"
							href="#"
							className={`${
								props.clickedClass === "following"
									? "header_anchor--clicked"
									: "header_anchor"
							}`}
						>
							<div>Following</div>
							<span></span>
						</a>
					</li>
					<li
						className="header_li"
						onFocus={props.changeToBoldFont}
						onBlur={props.changeToMediumFont}
					>
						<a
							id="myFeed"
							href="#"
							className={`${
								props.clickedClass === "myFeed"
									? "header_anchor--clicked"
									: "header_anchor"
							}`}
						>
							<div>My feed</div>
							<span></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
