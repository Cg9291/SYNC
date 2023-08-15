import TweetButton from "./TweetButton.js";

export default function GetVerifiedSection() {
	return (
		<section className="getVerified">
			<div className="getVerified_container">
				<span className="getVerified_header">Get Verified</span>
				<span className="getVerified_text">
					Subscribe to unlock new features.
				</span>
				<TweetButton text="Get Verified" />
			</div>
		</section>
	);
}
