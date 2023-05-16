export default function TweetBox() {
	return (
		<div
			//id="tweet-box"
			className="tweet-area hidden500 "
		>
			<div>
				<div className="tweet-area_profile-image-box">
					<img
						classname="tweet-area_profile-img"
						src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
					/>
				</div>

				<input
					className="tweet-area_tweet-input"
					placeholder="What's happening?"
				></input>
			</div>
			<div id="icons-row">
				<ul>
					<li>
						<a href="#">{/* <img src={squarepicicon} /> */}</a>
					</li>
					<li>
						<a href="#">{/* <img src={gificon} /> */}</a>
					</li>
					<li>
						<a href="#">{/* <img src={alignicon} /> */}</a>
					</li>
					<li>
						<a href="#">{/* <img src={noiconicon} /> */}</a>
					</li>
					<li>
						<a href="#">{/* <img src={noiconicon} /> */}</a>
					</li>
					<li>
						<a href="#">{/* <img src={locationicon} /> */}</a>
					</li>
				</ul>
				<button>Tweet</button>
			</div>
		</div>
	);
}
