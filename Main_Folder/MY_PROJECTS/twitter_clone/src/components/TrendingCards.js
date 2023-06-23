import {useContext} from "react";
import {CardsInfoContext} from "../contexts/contexts.js";
import Section from "./Sections.js";

export default function TrendingCards() {
	const level = useContext(CardsInfoContext);
	console.log({level});

	return (
		<div className="trending-wrapper_cards">
			<div className="category">{level.category}</div>
			<div className="topic">{level.topic}</div>
			<div className="trending-scope">{level.scope}</div>
		</div>
	);
}
