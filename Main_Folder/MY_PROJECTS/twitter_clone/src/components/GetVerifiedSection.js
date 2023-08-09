import TweetButton from "./TweetButton.js";

export default function GetVerifiedSection() {
	return (
		<section className="getVerified-wrapper">
			<div className="getVerified-container">
				<span className="getVerified-container_header">Get Verified</span>
				<span className="getVerified-container_text">
					Subscribe to unlock new features.
				</span>
				<TweetButton text="Get Verified" />
			</div>
		</section>
	);
}
