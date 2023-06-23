import {useContext} from "react";
import {CardsInfoContext} from "../contexts/contexts.js";
import Section from "./Sections.js";

export default function TrendingCards() {
	const level = useContext(CardsInfoContext);
	console.log({level});

	return (
		<div className="trending-wrapper_cards">
			<div className="trending-wrapper_categories">
				<span>{level.category}</span>
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
