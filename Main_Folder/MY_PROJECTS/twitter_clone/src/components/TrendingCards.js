import {useContext} from "react";
import {CardsInfoContext} from "../contexts/contexts.js";
import Section from "./Sections.js";
import { ellipsis } from "../assets/icons/svg_exports.js";

export default function TrendingCards() {
	const level = useContext(CardsInfoContext);
	/* console.log({level}); */

	return typeof level.pic === "string" ? (
		<div className="trending-wrapper_cards-with-image">

			<div className="wrappers--flex ">
				<div className="wrapper1">
					<div className="trending-wrapper_categories">
						<span>{level.category}</span>
					</div>
					<div className="trending-wrapper_topics">
						<span>{level.topic}</span>
					</div>
				</div>

				<div className="flex-b1">
					<img src={level.pic} className="trending-wrapper_images"/>
				</div>
			</div>
			{/* <div className="trending-wrapper_trending-scopes">
				<span>{level.scope}</span>
			</div> */}
		</div>
	) : (
		<div className="trending-wrapper_cards">
			<div className="trending-wrapper_categories">
				<span>{level.category}</span>
				{ellipsis('trendingcards')}
			</div>
			<div className="trending-wrapper_topics">
				<span>{level.topic}</span>
			</div>
			<div className="trending-wrapper_trending-scopes">
				<span>{level.scope}</span>
			</div>
		</div>
	);
}
