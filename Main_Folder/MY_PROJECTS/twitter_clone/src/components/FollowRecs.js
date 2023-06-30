import {profile} from "../functions/profile.js";

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

			{/* <div class="follow-recommendations_cards">PROFILE #1</div>
			<div class="follow-recommendations_cards">PROFILE #2</div>
			<div class="follow-recommendations_cards">PROFILE #3</div>
			<div class="follow-recommendations_cards-footer">
				<a href="#">Show more</a>
			</div> */}
		</section>
	);
}
