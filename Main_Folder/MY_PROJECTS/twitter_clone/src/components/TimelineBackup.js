//check to see if it can return jsx without parenthesis
import {timelineTweets} from "../functions/timelineTweets";
import {tweetsArray} from "../objects/tweetsArray";
export default function TimelineBackup() {
	return <div className="timeline-backup">{timelineTweets(tweetsArray[0])}</div>;
}
