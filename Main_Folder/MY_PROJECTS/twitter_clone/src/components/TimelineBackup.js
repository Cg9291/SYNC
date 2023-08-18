//check to see if it can return jsx without parenthesis
import { checkMark, ellipsis } from "../assets/icons/svg_exports";
import {
	commentsIcon,
	retweetsIcon,
	likesIcon,
	statsIcon,
	shareIcon,
	shareIconAlt
} from "../assets/icons/statistics_svg";
import { tweetsArray } from "../objects/tweetsArray";


export default function TimelineBackup() {
	return (
		<div className="timeline_body">
			{tweetsArray.map(tweet => (
				<TimelineTweets tweetObj={tweet} />
			))}
		</div>
	);
}

function TimelineTweets(props) {
	let num = Math.random();
	let tweetAuthorUserName = props.tweetObj.authorInfo.userName;
	let tweetAuthorHandle = props.tweetObj.authorInfo.userHandle;
	let profilePicture = props.tweetObj.authorInfo.profilePicture;
	let tweetText = props.tweetObj.tweetText;
	let tweetMedia = props.tweetObj.tweetMedia;


	return (
		<div className="timeline_body_tweets-card">
			<div className="timeline_body_profile-picture-wrapper">
				<img
					src={profilePicture}
					alt="profile picture"
				></img>
			</div>
			<div className="timeline_body_main-section-container">
				<div className="timeline_body_header">
					<span className="timeline_body_header_user-name-wrapper">
						<div className="timeline_body_header_user-name">
							{tweetAuthorUserName}
						</div>
						<span></span>
					</span>
					<span className="timeline_body_header_checkmark-wrapper">
						{checkMark}
					</span>
					<span className="timeline_body_header_handle">
						{"@"}
						{tweetAuthorHandle}
					</span>
					<span> · </span>
					<span className="timeline_body_header_posting-time">5h</span>
					<span className="timeline_body_header_ellipsis">
						{ellipsis("tweets")}
					</span>
				</div>
				<div className="timeline_body_tweet-text">{tweetText}</div>
				<div className="timeline_body_media-wrapper">
					<img
						className="timeline_body_media"
						src={tweetMedia}
					></img>
				</div>
				<div className="timeline_body_statistics-row">
					<TweetStats
						icon={commentsIcon}
						value={22}
					/>
					<TweetStats
						icon={retweetsIcon}
						value={98}
					/>
					<TweetStats
						icon={likesIcon}
						value={798}
					/>
					<TweetStats
						icon={statsIcon}
						value={"75.6K"}
					/>
					<TweetStats
						icon={shareIconAlt}
						//value={22}
					/>
				</div>
			</div>
		</div>
	);
}

function TweetStats(props) {
	return props.value == null ? (
		<div className="timeline_body_statistics-row_group">
			<span className="timeline_body_statistics-row_icons-wrapper">
				{props.icon}
			</span>
		</div>
	) : (
		<div className="timeline_body_statistics-row_group">
			<span className="timeline_body_statistics-row_icons-wrapper">
				{props.icon}
			</span>
			<span className="timeline_body_statistics-row_values">
				{props.value}
			</span>
		</div>
	);
}
