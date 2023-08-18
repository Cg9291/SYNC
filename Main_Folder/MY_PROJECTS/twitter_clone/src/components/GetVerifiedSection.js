import TweetButton from "./TweetButton.js";

export default function GetVerifiedSection(props) {
	return props.mode === "verify" ? (
		<section className="getVerified">
			<div className="getVerified_container">
				<span className="getVerified_header">Get Verified</span>
				<span className="getVerified_text">
					Subscribe to unlock new features.
				</span>
				<TweetButton text="Get Verified" />
			</div>
		</section>
	) : (
		<section className="subscribeToPremium">
			<div className="subscribeToPremium_container">
				<span className="subscribeToPremium_header">Subscribe to Premium</span>
				<span className="subscribeToPremium_text">
					Subscribe to unlock new features and if eligible, receive a share of
					ads revenue.
				</span>
				<TweetButton text="Subscribe" />
			</div>
		</section>
	);
}
