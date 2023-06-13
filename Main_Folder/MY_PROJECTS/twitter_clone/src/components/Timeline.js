import {Helmet} from "react-helmet"; //this allows to use helmet(which supports the insertion of script tags in the component's html)
import React from "react";
import TweetBox from "./Tweetbox.js";

export default function Timeline(props) {
	return (
		<div className="timeline-wrapper">
			<TweetBox />
			<a
				id="timeline"
				className="twitter-timeline"
				href="https://twitter.com/TheSportsMediaC/lists/1543020161199812608"
				data-chrome="noheader"
				sourceType="list"
				ownerScreenName="TheSportsMediaC"
				slug="national-parks"
			>
				A Twitter List by TheSportsMediaC
			</a>
			<script
				async
				src="https://platform.twitter.com/widgets.js"
				charset="utf-8"
			></script>
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
