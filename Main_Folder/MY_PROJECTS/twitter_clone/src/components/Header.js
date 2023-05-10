import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png";
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png";
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png";
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png";
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png";

export default function Header() {
	return (
		<div id="header">
			<div id="header-top">
				<div className="alignment-boxes">
					<div>
						<img
							id="profile-picture"
							src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
						/>
					</div>
				</div>
				<svg
					id="twitter-logo"
					viewBox="0 0 24 24"
				>
					<g>
						<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
					</g>
				</svg>
				<div className="alignment-boxes"></div>
			</div>
			<div id="header-bottom">
				<ul>
					<a>
						<li>For you</li>
					</a>
					<a>
						<li>Following</li>
					</a>
					<a>
						<li>My feed</li>
					</a>
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
