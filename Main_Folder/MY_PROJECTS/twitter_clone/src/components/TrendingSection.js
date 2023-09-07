import { SvgIcon } from "./SvgIcon";
import { generalIcons } from "../objects/svgIcons";

export default function TrendingSection(props) {
	let myTrendingNews = [
		{
			category: "NBA · LIVE",
			topic: "Titanic",
			scope: "140K tweets",
		},
		{
			category: "Sports",
			topic: "#NBADraft",
			scope: "Trending with...",
		},
		{
			category: "Business and Finance",
			topic: "Carly's twitter clone",
			scope: "22k tweets",
		},
		{
			category: "Uplifting News",
			topic: "Carly's got a programmer Job",
			scope: "900k tweets",
		},
		{
			category: "World",
			topic: "Vancouver's hottest Summer",
			scope: "trending with...",
		},
	];

	return (
		<section className="trending">
			<div className="trending_cards-header">
				<span className="trending_cards-header_text">What’s happening</span>
			</div>
			{myTrendingNews.map(obj => {
				return myTrendingNews.indexOf(obj) === 0 ? (
					<TrendingCards
						trendingCardInfo={{
							category: `${obj.category}`,
							topic: `${obj.topic}`,
							scope: `${obj.scope}`,
							pic: `${props.imageSource}`,
						}}
					/>
				) : (
					<TrendingCards
						trendingCardInfo={{
							category: `${obj.category}`,
							topic: `${obj.topic}`,
							scope: `${obj.scope}`,
						}}
					/>
				);
			})}
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
	let ellipsisInfo = generalIcons.ellipsis.trendingCards;

	return props.trendingCardInfo.pic ? (
		<a
			href="#"
			className="trending_cards-with-image"
		>
			<div className="wrappers--flex ">
				<div className="trending_cards-with-image_wrapper">
					<div className="trending_cards-with-image_wrapper_categories">
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
				{/* 	<span className="trending_categories_ellipsis"> */}
				<SvgIcon
					classNames={ellipsisInfo.classNames}
					path={ellipsisInfo.path}
				/>
				{/* </span> */}
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
