//check to see if it can return jsx without parenthesis
//import { checkMark } from "../assets/icons/svg_exports";
import { SvgIcon } from "./SvgIcon";
import { generalIcons, tweetStatsIcons } from "../objects/navListIcons";
import {
	commentsIcon,
	retweetsIcon,
	likesIcon,
	statsIcon,
	shareIcon,
	shareIconAlt,
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

	const ellipsisInfo = generalIcons.ellipsis.tweets;

	return (
		<a
			href="#"
			className="timeline_body_tweets-card"
		>
			<div className="timeline_body_profile-picture-wrapper">
				<img
					src={profilePicture}
					alt="profile picture"
				></img>
			</div>
			<div className="timeline_body_main-section-container">
				<div className="timeline_body_header">
					<span className="timeline_body_header_user-name-wrapper">
						<a
							href="#"
							className="timeline_body_header_user-name"
						>
							{tweetAuthorUserName}
						</a>
						<span></span>
					</span>
					<span className="timeline_body_header_checkmark-wrapper">
						<SvgIcon
							classNames={generalIcons.checkmarkIcon.classNames}
							path={generalIcons.checkmarkIcon.path}
						/>
					</span>
					<span className="timeline_body_header_handle">
						{"@"}
						{tweetAuthorHandle}
					</span>
					<span> · </span>
					<span className="timeline_body_header_posting-time">5h</span>
					<span className="timeline_body_header_ellipsis">
						<SvgIcon
							classNames={ellipsisInfo.classNames}
							path={ellipsisInfo.path}
						/>
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
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.commentsIconPath}
							/>
						}
						value={22}
					/>
					<TweetStats
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.retweetsIconPath}
							/>
						}
						value={98}
					/>
					<TweetStats
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.likesIconPath}
							/>
						}
						value={798}
					/>
					<TweetStats
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.statIconPath}
							/>
						}
						value={"75.6K"}
					/>
					<TweetStats
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.shareIconAltPath}
							/>
						}
					/>
				</div>
			</div>
		</a>
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
			<span className="timeline_body_statistics-row_values">{props.value}</span>
		</div>
	);
}
