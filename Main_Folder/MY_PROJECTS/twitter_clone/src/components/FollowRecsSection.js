import Profile from "./Profile.js";

export default function FollowsRecSection() {
	let imageSource =
		"https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640";

	return (
		<section className="follow-recommendations">
			<div className="follow-recommendations_cards_header">
				<span>Who to follow</span>
			</div>
			<div className="follow-recommendations_cards">
				<Profile
					img={imageSource}
					userName="Stephen Curry"
					handle={"StephenCurry30"}
					follow={true}
				/>
			</div>
			<div className="follow-recommendations_cards">
				<Profile
					img={imageSource}
					userName="NBA"
					handle={"NBA"}
					follow={true}
				/>
			</div>
			<div className="follow-recommendations_cards-footer">
				<a href="#">Show more</a>
			</div>
		</section>
	);
}
