import { profile } from "../functions/profile.js";

export default function FollowsRecSection() {
	let imageSource =
		"https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640";

	return (
		<section className="follow-recommendations">
			<div className="follow-recommendations_cards-header">
				<span>Who to follow</span>
			</div>
			<div className="follow-recommendations_cards">
				{profile(imageSource, "Stephen Curry", "StephenCurry30", true)}
			</div>
			<div className="follow-recommendations_cards">
				{profile(imageSource, "NBA", "NBA", true)}
			</div>
			<div className="follow-recommendations_cards-footer">
				<a href="#">Show more</a>
			</div>
		</section>
	);
}
