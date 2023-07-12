import {Helmet} from "react-helmet"; //this allows to use helmet(which supports the insertion of script tags in the component's html)
import React from "react";
import TweetBox from "./Tweetbox.js";
import TimelineBackup from "./TimelineBackup.js";

export default function Timeline(props) {
	var myJson = require("../apiResponse.json");
	return (
		<div className="timeline-wrapper">
			<TweetBox />
			{/* {myJson.html} */}
			<TimelineBackup />
			{/* <a
				id="timeline"
				className="twitter-timeline"
				href="https://twitter.com/TheSportsMediaC/lists/1543020161199812608"
				data-chrome="noheader nofooter noborders"
				sourceType="list"
				ownerScreenName="TheSportsMediaC"
			>
				Timeline is loading
			</a>

			<script
				async
				src="https://platform.twitter.com/widgets.js"
				charset="utf-8"
			></script> */}
			{/* <a
				id="timeline"
				class="twitter-timeline"
				href="https://twitter.com/TheSportsMediaC/lists/1543020161199812608?ref_src=twsrc%5Etfw"
				data-chrome="noheader"
				sourceType="list"
				ownerScreenName="TwitterDev"
				slug="national-parks"
			>
				A Twitter List by TheSportsMediaC
			</a>
			<Helmet>
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charset="utf-8"
				></script>
			</Helmet> */}
		</div>
	);
}
