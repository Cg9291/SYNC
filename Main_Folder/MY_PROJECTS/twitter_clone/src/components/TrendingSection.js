import { SvgIcon } from "./SvgIcon";
import { generalIcons } from "../objects/navListIcons";

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
		<section className="trending">
			<div className="trending_cards-header">
				<span className="trending_cards-header_text">What’s happening</span>
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
			<a
				href="#"
				className="trending_cards_footer"
			>
				<a href="#">Show more</a>
			</a>
		</section>
	);
}

function TrendingCards(props) {
	let ellipsisInfo = generalIcons.ellipsis.userProfile;

	return props.trendingCardInfo.pic ? (
		<a
			href="#"
			className="trending_cards-with-image"
		>
			<div className="wrappers--flex ">
				<div className="trending_cards-with-image_wrapper">
					<div className="trending_categories">
						<span>{props.trendingCardInfo.category}</span>
					</div>
					<div className="trending_topics">
						<span>{props.trendingCardInfo.topic}</span>
					</div>
				</div>

				<div className="flex-b1">
					<img
						src={props.trendingCardInfo.pic}
						className="trending_images"
					/>
				</div>
			</div>
		</a>
	) : (
		<a
			href="#"
			className="trending_cards"
		>
			<div className="trending_categories">
				<span className="trending_trending_categories_wrapper">
					{props.trendingCardInfo.category}
				</span>
				<span className="trending_categories_ellipsis_wrapper">
					<SvgIcon
						classNames={ellipsisInfo.classNames}
						path={ellipsisInfo.path}
					/>
				</span>
			</div>
			<div className="trending_topics">
				<span>{props.trendingCardInfo.topic}</span>
			</div>
			<div className="trending_scopes">
				<span>{props.trendingCardInfo.scope}</span>
			</div>
		</a>
	);
}
