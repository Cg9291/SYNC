import Section from "./Sections.js";
import TrendingCards from "./TrendingCards.js";


export default function TrendingSection(props) {
	return (
		<section className="trending-wrapper">
			<div className="trending-wrapper_cards-header">
				<span>What’s happening</span>
			</div>
			<Section
				level={{
					category: `${props.myTrendingNews.section1.category}`,
					topic: `${props.myTrendingNews.section1.topic}`,
					scope: `${props.myTrendingNews.section1.scope}`,
					pic:`${props.imageSource}`
				}}
			/>
			<Section
				level={{
					category: `${props.myTrendingNews.section2.category}`,
					topic: `${props.myTrendingNews.section2.topic}`,
					scope: `${props.myTrendingNews.section2.scope}`,
				}}
			/>
			<Section
				level={{
					category: `${props.myTrendingNews.section3.category}`,
					topic: `${props.myTrendingNews.section3.topic}`,
					scope: `${props.myTrendingNews.section3.scope}`,
				}}
			/>
			<Section
				level={{
					category: `${props.myTrendingNews.section4.category}`,
					topic: `${props.myTrendingNews.section4.topic}`,
					scope: `${props.myTrendingNews.section4.scope}`,
				}}
			/>
			<Section
				level={{
					category: `${props.myTrendingNews.section5.category}`,
					topic: `${props.myTrendingNews.section5.topic}`,
					scope: `${props.myTrendingNews.section5.scope}`,
				}}
			/>
			<div className="trending-wrapper_cards-footer">
				<a href="#">Show more</a>
			</div>
		</section>
	);
}
