import {checkMark} from "../assets/icons/svg_exports";
import {ellipsis} from "../assets/icons/svg_exports";
import { commentsIcon,retweetsIcon,likesIcon,statsIcon,shareIcon } from "../assets/icons/statistics_svg";
import tweetStats from "./tweetStats";

export const timelineTweets = tweetObj => {
	let num = Math.random();
	let tweetAuthorUserName = tweetObj.authorInfo.userName;
	let tweetAuthorHandle = tweetObj.authorInfo.userHandle;
	let profilePicture = tweetObj.authorInfo.profilePicture;
	let tweetText = tweetObj.tweetText;
	let tweetMedia = tweetObj.tweetMedia;

	return (
		<div className="timeline-backup_tweets-card">
			<div className="timeline-backup_profile-picture-wrapper">
				<img
					src={profilePicture}
					alt="profile picture"
				></img>
			</div>
			<div className="timeline-backup_main-section-container">
				<div className="timeline-backup_header">
					<span className="timeline-backup_header_user-name">
						{tweetAuthorUserName}
					</span>
					<span className="timeline-backup_header_checkmark-wrapper">
						{checkMark}
					</span>
					<span className="timeline-backup_header_handle">
						{"@"}
						{tweetAuthorHandle}
					</span>
					<span> · </span>
					<span className="timeline-backup_header_posting-time">5h</span>
					<span className="timeline-backup_header_ellipsis">{ellipsis}</span>
				</div>
				<div className="timeline-backup_tweet-text">{tweetText}</div>
				<img
					className="timeline-backup_media"
					src={tweetMedia}
				></img>
				<div className="timeline-backup_statistics-row">
					{tweetStats(commentsIcon, 22)}
					{tweetStats(retweetsIcon, 98)}
					{tweetStats(likesIcon, 798)}
					{tweetStats(statsIcon, "75.6K")}
					{tweetStats(shareIcon)}
				</div>
			</div>
		</div>
	);
};
