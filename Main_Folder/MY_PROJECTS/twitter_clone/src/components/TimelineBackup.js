//check to see if it can return jsx without parenthesis
import {timelineTweets} from "../functions/timelineTweets";
import {tweetsArray} from "../objects/tweetsArray";
export default function TimelineBackup() {
	return (
		<div className="timeline-backup">
			{tweetsArray.map(tweet=>timelineTweets(tweet))}
			{/* {timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])}
			{timelineTweets(tweetsArray[0])} */}
		</div>
	);
}
