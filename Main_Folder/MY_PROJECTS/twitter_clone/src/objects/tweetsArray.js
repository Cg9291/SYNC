import { myProfilePicturesIndex } from "../assets/pictures/profile_pictures/index";
import { myTweetPicturesIndex } from "../assets/pictures/tweet_pictures/index";

const {
	apple_tv_pp,
	grouse_pp,
	marverl_pp,
	marvel_studios_pp,
	nasa_pp,
	nba_pp,
	nba_on_espn_pp,
	nfl_pp,
	ufc_pp,
} = myProfilePicturesIndex;

const {
	apple_tv_monsters,
	cyrilGane_tp,
	cyrilGane_ufcParis_w,
	grouseSkiPatrol_tp,
	jokic_tp,
	jHerbert_tp,
	lakers_tp,
	luka_doncic_tp,
	marvelA_tp,
	marvelSpiderman_tp,
	nasa_sun_tp,
	nfl_eagles_patriots_opener,
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
		"Always keeping watch ✨ \n 📸: madyhart",
		grouseSkiPatrol_tp,
	),
	new TweetConstructor(
		nfl_pp,
		"NFL",
		"NFL",
		"The defending NFC champs head to New England to open the season. 🎬\n\n@eagles|@patriots\n\n📺: #PHIvsNE -- Sunday 4:25pm ET on CBS\n📱: Stream on #NFLPlus",
		nfl_eagles_patriots_opener,
	),
	new TweetConstructor(
		nasa_pp,
		"NASA",
		"NASA",
		"Today's the day! Applications are due Aug. 31 for our spring internships.\nFrom engineers to communicators, we're looking for @NASAInterns from a variety of backgrounds to help us push the boundaries of exploration: https://intern.nasa.gov",
		nasa_sun_tp,
	),
	new TweetConstructor(
		nba_on_espn_pp,
		"NBA on ESPN",
		"ESPNNBA",
		"Luka balled out in Slovenia's FIBA opener vs. Venezuela 😮‍💨",
		luka_doncic_tp,
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
	new TweetConstructor(
		ufc_pp,
		"UFC",
		"UFC",
		"It was a masterclass from @Ciryl_Gane yesterday at #UFCParis! 👊🇫🇷\nWho's next for the French heavyweight?",
		cyrilGane_ufcParis_w,
	),
	new TweetConstructor(
		apple_tv_pp,
		"Apple TV",
		"AppleTV",
		"In the wake of G-Day, who are the real monsters?",
		apple_tv_monsters,
	),
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
