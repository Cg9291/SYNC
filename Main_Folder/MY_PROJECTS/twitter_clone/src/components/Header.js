import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png";
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png";
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png";
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png";
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png";
import {twitterLogo} from "../assets/icons/svg_exports.js";

export default function Header(props) {
	return (
		<div
			style={{marginTop: props.headerHeight}}
			className="header headerTransition"
		>
			<div className="header_header-top">
				<div className="alignment-boxes">
					<div>
						<img
							className="header_profile-picture"
							src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
						/>
						<span className="header_text-span">Home</span>
					</div>
				</div>
				<div className="header_twitter-logo-box">{twitterLogo}</div>
				<div className="alignment-boxes"></div>
			</div>
			<div className="header_header-bottom">
				<ul className="header_ul">
					<li className="header_li">
						<a
							href="#"
							className="header_anchor"
						>
							<span>For you</span>
						</a>
					</li>
					<li className="header_li">
						<a
							href="#"
							className="header_anchor"
						>
							<span>Following</span>
						</a>
					</li>
					<li className="header_li">
						<a
							href="#"
							className="header_anchor"
						>
							<span>My feed</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
