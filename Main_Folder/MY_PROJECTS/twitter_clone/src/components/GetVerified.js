import {tweetButton} from "../functions/tweetButton.js";

export function GetVerified() {
	return (
		<div className="getVerified-wrapper">
			<div className="getVerified-container">
				<span className="getVerified-container_header">Get Verified</span>
				<span className="getVerified-container_text">
					Subscribe to unlock new features.
				</span>
				{/* <div
					className="tweet-area_wrapper--btn"
					style={{width: "120.16px", height: "36px"}}
				>
					<button
						className="tweet-area_pill-btn"
						style={{
							width: "120.16px",
							height: "36px",
							padding: "0 17px",
							boxSizing: "border-box",
						}}
					>
						<span className="tweet-area_pill-btn-text">Get verified</span>
					</button>
				</div> */}
				{tweetButton("Get Verified")}
			</div>
		</div>
	);
}
