import { useState } from "react";
import { SvgIcon } from "./SvgIcon";
import { generalIcons, tweetStatsIcons } from "../objects/svgIcons";
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
	let tweetAuthorUserName = props.tweetObj.authorInfo.userName;
	let tweetAuthorHandle = props.tweetObj.authorInfo.userHandle;
	let profilePicture = props.tweetObj.authorInfo.profilePicture;
	let tweetText = props.tweetObj.tweetText;
	let tweetMedia = props.tweetObj.tweetMedia;

	const ellipsisInfo = generalIcons.ellipsis.tweets;

	const rgbCodes = {
		blue: "rgb(29, 155, 240)",
		green: "rgb(0, 186, 124)",
		pink: "rgb(249, 24, 128)",
		defaultGrey: "rgb(83, 100, 113)",
	};

	TweetStatsIcons.defaultProps = {
		defaultGrey: rgbCodes.defaultGrey,
	};

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
					<TweetStatsIcons
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.commentsIconPath}
							/>
						}
						value={22}
						fill={rgbCodes.blue}
					/>
					<TweetStatsIcons
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.retweetsIconPath}
							/>
						}
						value={98}
						fill={rgbCodes.green}
					/>
					<TweetStatsIcons
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.likesIconPath}
							/>
						}
						value={798}
						fill={rgbCodes.pink}
					/>
					<TweetStatsIcons
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.statIconPath}
							/>
						}
						value={"75.6K"}
						fill={rgbCodes.blue}
					/>
					<TweetStatsIcons
						icon={
							<SvgIcon
								classNames={tweetStatsIcons.defaultClassNames}
								path={tweetStatsIcons.shareIconAltPath}
							/>
						}
						fill={rgbCodes.blue}
					/>
				</div>
			</div>
		</a>
	);
}

function TweetStatsIcons(props) {
	const [hoverStyle, setHoverStyle] = useState();

	return props.value == null ? (
		<div
			className="timeline_body_statistics-row_group"
			style={hoverStyle}
			onMouseOver={() => setHoverStyle({ fill: props.fill, color: props.fill })}
			onMouseLeave={() =>
				setHoverStyle({ fill: props.defaultGrey, color: props.defaultGrey })
			}
		>
			<span className="timeline_body_statistics-row_icons-wrapper">
				{props.icon}
			</span>
		</div>
	) : (
		<div
			className="timeline_body_statistics-row_group"
			style={hoverStyle}
			onMouseOver={() => setHoverStyle({ fill: props.fill, color: props.fill })}
			onMouseLeave={() =>
				setHoverStyle({ fill: props.defaultGrey, color: props.defaultGrey })
			}
		>
			<span className="timeline_body_statistics-row_icons-wrapper">
				{props.icon}
			</span>
			<span className="timeline_body_statistics-row_values">{props.value}</span>
		</div>
	);
}
