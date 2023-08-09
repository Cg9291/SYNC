import { ellipsis } from "../assets/icons/svg_exports.js";

export default function TrendingSection(props) {
	let myTrendingNews = {
		section1: {
			category: "NBA · LIVE",
			topic: "Titanic",
			scope: "140K tweets",
		},
		section2: {
			category: "Sports",
			topic: "#NBADraft",
			scope: "Trending with...",
		},
		section3: {
			category: "Business and Finance",
			topic: "Carl's twitter clone",
			scope: "22k tweets",
		},
		section4: {
			category: "Uplifting News",
			topic: "Carl's got a programmer Job",
			scope: "900k tweets",
		},
		section5: {
			category: "World",
			topic: "Vancouver's hottest Summer",
			scope: "trending with...",
		},
	};

	return (
		<section className="trending-wrapper">
			<div className="trending-wrapper_cards-header">
				<span>What’s happening</span>
			</div>
			<TrendingCards
				trendingCardInfo={{
					category: `${myTrendingNews.section1.category}`,
					topic: `${myTrendingNews.section1.topic}`,
					scope: `${myTrendingNews.section1.scope}`,
					pic: `${props.imageSource}`,
				}}
			/>
			<TrendingCards
				trendingCardInfo={{
					category: `${myTrendingNews.section2.category}`,
					topic: `${myTrendingNews.section2.topic}`,
					scope: `${myTrendingNews.section2.scope}`,
				}}
			/>
			<TrendingCards
				trendingCardInfo={{
					category: `${myTrendingNews.section3.category}`,
					topic: `${myTrendingNews.section3.topic}`,
					scope: `${myTrendingNews.section3.scope}`,
				}}
			/>
			<TrendingCards
				trendingCardInfo={{
					category: `${myTrendingNews.section4.category}`,
					topic: `${myTrendingNews.section4.topic}`,
					scope: `${myTrendingNews.section4.scope}`,
				}}
			/>
			<TrendingCards
				trendingCardInfo={{
					category: `${myTrendingNews.section5.category}`,
					topic: `${myTrendingNews.section5.topic}`,
					scope: `${myTrendingNews.section5.scope}`,
				}}
			/>
			<div className="trending-wrapper_cards-footer">
				<a href="#">Show more</a>
			</div>
		</section>
	);
}

function TrendingCards(props) {
	return props.trendingCardInfo.pic ? (
		<div className="trending-wrapper_cards-with-image">
			<div className="wrappers--flex ">
				<div className="wrapper1">
					<div className="trending-wrapper_categories">
						<span>{props.trendingCardInfo.category}</span>
					</div>
					<div className="trending-wrapper_topics">
						<span>{props.trendingCardInfo.topic}</span>
					</div>
				</div>

				<div className="flex-b1">
					<img
						src={props.trendingCardInfo.pic}
						className="trending-wrapper_images"
					/>
				</div>
			</div>
		</div>
	) : (
		<div className="trending-wrapper_cards">
			<div className="trending-wrapper_categories">
				<span>{props.trendingCardInfo.category}</span>
				{ellipsis("trendingcards")}
			</div>
			<div className="trending-wrapper_topics">
				<span>{props.trendingCardInfo.topic}</span>
			</div>
			<div className="trending-wrapper_trending-scopes">
				<span>{props.trendingCardInfo.scope}</span>
			</div>
		</div>
	);
}
