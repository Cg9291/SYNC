/* import nba_pp from "../assets/pictures/profile_pictures/nba_profile_picture.jpeg";
import nfl_pp from "../assets/pictures/profile_pictures/nfl_profile-picture.jpeg";
import ufc_pp from "../assets/pictures/profile_pictures/ufc.jpeg" */

import { nbaProfilePic } from "../assets/pictures/profile_pictures/index.js";

import media from "../assets/pictures/tweet_pictures/lakers_tweet_picture.jpg";
import media2 from "../assets/pictures/tweet_pictures/jokic.jpeg";
import nflmedia from "../assets/pictures/tweet_pictures/justin_herbert.jpg";
import ufcMedia from "../assets/pictures/tweet_pictures/ufc.jpg"

import MstudiosPP from "../assets/pictures/profile_pictures/Marvel_Studios.jpeg";

import MAssembledTP from "../assets/pictures/tweet_pictures/Marvel_Assembled.jpeg";
export const tweetsArray = [
	{
		authorInfo: {
			profilePicture: nfl_pp,
			userName: "NFL",
			userHandle: "NFL",
		},
		tweetText:
			"Chargers, QB Justin Herbert agree to 5-year, $262.5M contract extension. (via @rapsheet,@MikeGarafolo)",
		tweetMedia: nflmedia,
	},
	{
		authorInfo: {
			profilePicture: nba_pp,
			userName: "NBA",
			userHandle: "NBA",
		},
		tweetText: "This is a second test tweet",
		tweetMedia: media,
	},
	{
		authorInfo: {
			profilePicture: MAssembledTP,
			userName: "Marvel Studios",
			userHandle: "MarvelStudios",
		},
		tweetText:
			"Marvel Studios’ Assembled: The Making of #AntManAndTheWaspQuantumania is now streaming only on @DisneyPlus",
		tweetMedia: MAssembledTP,
	},
	{
		authorInfo: {
			profilePicture: ufc_pp,
			userName: "UFC",
			userHandle: "UFC",
		},
		tweetText: "It's time for the fighters to hit the scale ⚖️ Join us live for the #UFC291 Weigh-In Show now!📺http://youtube.com/watch?v=5tno0slQ26E",
		tweetMedia: ufcMedia,
	},
	{
		authorInfo: {
			profilePicture: nba_pp,
			userName: "ESPN on TNT",
			userHandle: "ESPN",
		},
		tweetText: "This is a test tweet",
		tweetMedia: media2,
	},
	{
		authorInfo: {
			profilePicture: nbaProfilePic,
			userName: "NBA",
			userHandle: "NBA",
		},
		tweetText: "This is a second test tweet",
		tweetMedia: media,
	},
	{
		authorInfo: {
			profilePicture: nba_pp,
			userName: "ESPN on TNT",
			userHandle: "ESPN",
		},
		tweetText: "This is a test tweet",
		tweetMedia: media2,
	},
	{
		authorInfo: {
			profilePicture: nbaProfilePic,
			userName: "NBA",
			userHandle: "NBA",
		},
		tweetText: "This is a second test tweet",
		tweetMedia: media,
	},
];
