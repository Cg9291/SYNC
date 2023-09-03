import { myProfilePicturesIndex } from "../assets/pictures/profile_pictures/index";
import { myTweetPicturesIndex } from "../assets/pictures/tweet_pictures/index";

const { grouse_pp, marverl_pp, marvel_studios_pp, nba_pp, nfl_pp, ufc_pp } =
	myProfilePicturesIndex;

const {
	cyrilGane_tp,
	grouseSkiPatrol_tp,
	jokic_tp,
	jHerbert_tp,
	lakers_tp,
	marvelA_tp,
	marvelSpiderman_tp,
	ufc_tp,
} = myTweetPicturesIndex;

function TweetConstructor(
	profilePicture,
	userName,
	userHandle,
	tweetText,
	tweetMedia,
) {
	return {
		authorInfo: { profilePicture, userName, userHandle },
		tweetText,
		tweetMedia,
	};
}

export const tweetsArray = [
	new TweetConstructor(
		grouse_pp,
		"Grouse Mountain",
		"grousemountain",
		"Always keeping watch ✨ //📸: madyhart",
		grouseSkiPatrol_tp,
	),
	new TweetConstructor(
		nfl_pp,
		"NFL",
		"NFL",
		"Chargers, QB Justin Herbert agree to 5-year, $262.5M contract extension. (via @rapsheet,@MikeGarafolo)",
		jHerbert_tp,
	),
	new TweetConstructor(
		nba_pp,
		"NBA",
		"NBA",
		"This is a second test tweet",
		jokic_tp,
	),
	new TweetConstructor(
		marvel_studios_pp,
		"Marvel Studios",
		"MarvelStudios",
		"Marvel Studios’ Assembled: The Making of #AntManAndTheWaspQuantumania is now streaming only on @DisneyPlus",
		marvelA_tp,
	),
	new TweetConstructor(
		ufc_pp,
		"UFC",
		"UFC",
		"It's time for the fighters to hit the scale ⚖️ Join us live for the #UFC291 Weigh-In Show now!📺http://youtube.com/watch?v=5tno0slQ26E",
		ufc_tp,
	),
	new TweetConstructor(ufc_pp, "UFC", "UFC", "This is a test", cyrilGane_tp),
	new TweetConstructor(nba_pp, "NBA", "NBA", "This is a test", lakers_tp),
];
/* {
		authorInfo: {
			profilePicture: nfl_pp,
			userName: "NFL",
			userHandle: "NFL",
		},
		tweetText:
			"Chargers, QB Justin Herbert agree to 5-year, $262.5M contract extension. (via @rapsheet,@MikeGarafolo)",
		tweetMedia: jHerbert_tp,
	},
	{
		authorInfo: {
			profilePicture: nba_pp,
			userName: "NBA",
			userHandle: "NBA",
		},
		tweetText: "This is a second test tweet",
		tweetMedia: jokic_tp,
	} {
		authorInfo: {
			profilePicture: marvel_studios_pp,
			userName: "Marvel Studios",
			userHandle: "MarvelStudios",
		},
		tweetText:
			"Marvel Studios’ Assembled: The Making of #AntManAndTheWaspQuantumania is now streaming only on @DisneyPlus",
		tweetMedia: marvelA_tp,
	},
	{
		authorInfo: {
			profilePicture: ufc_pp,
			userName: "UFC",
			userHandle: "UFC",
		},
		tweetText:
			"It's time for the fighters to hit the scale ⚖️ Join us live for the #UFC291 Weigh-In Show now!📺http://youtube.com/watch?v=5tno0slQ26E",
		tweetMedia: ufc_tp,
	} {
		authorInfo: {
			profilePicture: ufc_pp,
			userName: "ESPN on TNT",
			userHandle: "ESPN",
		},
		tweetText: "This is a test tweet",
		tweetMedia: cyrilGane_tp,
	},
	{
		authorInfo: {
			profilePicture: nba_pp,
			userName: "NBA",
			userHandle: "NBA",
		},
		tweetText: "This is a second test tweet",
		tweetMedia: lakers_tp,
	},
	{
		authorInfo: {
			profilePicture: myProfilePicturesIndex.nfl_pp,
			userName: "ESPN on TNT",
			userHandle: "ESPN",
		},
		tweetText: "This is a test tweet",
		tweetMedia: myTweetPicturesIndex.nfl_pp,
	},
	{
		authorInfo: {
			profilePicture: myProfilePicturesIndex.nfl_pp,
			userName: "NBA",
			userHandle: "NBA",
		},
		tweetText: "This is a second test tweet",
		tweetMedia: myTweetPicturesIndex.nfl_pp,
	},*/
