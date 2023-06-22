import Section from "./Sections.js";
import TrendingCards from "./TrendingCards.js";

export default function TrendingSection() {
	return (
		<section className="trending-wrapper">
			<div className="trending-wrapper_cards-header">
				<span>What's happening</span>
			</div>
			<Section  level={{category:"dog",topic:"bot",scope:"pe"}}/>
			<Section />
			<Section />
			<Section />
			<Section />
			{/* <TrendingCards />
			<TrendingCards context={{category: "Breaking News", topic: "Titanic", scope: "60K tweets"}} />
			<TrendingCards />
			<TrendingCards />
			<TrendingCards /> */}
			<div className="trending-wrapper_cards-footer">
				<a href="#">Show more</a>
			</div>
		</section>
	);
}
