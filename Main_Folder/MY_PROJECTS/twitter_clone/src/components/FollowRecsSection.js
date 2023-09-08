import Profile from "./Profile.js";

export default function FollowsRecSection() {
	const imageSource =
		"https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640";

	const recommendedProfiles = [
		{
			userName: "Stephen Curry",
			handle: "StephenCurry30",
			profilePicture: imageSource,
		},
		{
			userName: "NBA",
			handle: "NBA",
			profilePicture: imageSource,
		},
		{
			userName: "Tesla",
			handle: "Tesla",
			profilePicture: imageSource,
		},
	];

	return (
		<section className="follow-recommendations">
			<div className="follow-recommendations_cards_header">
				<span>Who to follow</span>
			</div>
			{recommendedProfiles.map(obj => (
				<a
					href="#"
					className="follow-recommendations_cards"
				>
					<Profile
						img={obj.profilePicture}
						userName={obj.userName}
						handle={obj.handle}
						follow={true}
					/>
				</a>
			))}
			{/*
			<a
				href="#"
				className="follow-recommendations_cards"
			>
				<Profile
					img={imageSource}
					userName="NBA"
					handle={"NBA"}
					follow={true}
				/>
			</a> */}
			<a
				href="#"
				className="follow-recommendations_cards-footer"
			>
				<a href="#">Show more</a>
			</a>
		</section>
	);
}
