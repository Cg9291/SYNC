import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png";
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png";
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png";
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png";
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png";
import { twitterLogo } from "./svg_exports.js";

export default function Header(props) {
	return (
		<div
			id="header"
			style={{marginTop: props.headerHeight}}
			className="headerTransition"
		>
			<div id="header-top">
				<div className="alignment-boxes">
					<div>
						<img
							id="profile-picture"
							src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
						/>
						<span>Home</span>
					</div>
				</div>
				<div className="twitter-logo-box">
					{twitterLogo}
				</div>
				<div className="alignment-boxes"></div>
			</div>
			<div id="header-bottom">
				<ul>
					<li>
						<a href="#">
							<span>For you</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Following</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>My feed</span>
						</a>
					</li>
				</ul>
			</div>
			<div id="tweet-area">
				<img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" />
				<input
					id="tweet-input"
					placeholder="What's happening?"
				></input>
			</div>
			<div id="icons-row">
				<ul>
					<li>
						<a href="#">
							<img src={squarepicicon} />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={gificon} />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={alignicon} />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={noiconicon} />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={noiconicon} />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={locationicon} />
						</a>
					</li>
				</ul>
				<button>Tweet</button>
			</div>
		</div>
	);
}
