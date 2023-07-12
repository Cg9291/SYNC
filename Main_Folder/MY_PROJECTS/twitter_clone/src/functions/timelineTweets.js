

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
				<img src={profilePicture} alt="profile picture"></img>
			</div>
			<div className="timeline-backup_main-section-container"></div>
		</div>
	);
};
