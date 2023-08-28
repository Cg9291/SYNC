import TweetButton from "./TweetButton.js";
/*  */

import { SvgIcon } from "./SvgIcon";
import { generalIcons } from "../objects/svgIcons.js";

export default function Profile(props) {
	let ellipsisInfo = generalIcons.ellipsis.userProfile;

	return props.follow === true ? (
		<div className="follow-recommendations_cards_wrapper">
			<div className="follow-recommendations_cards_container">
				<div className="">
					<img
						className="follow-recommendations_cards_image"
						src={props.img}
					/>
				</div>
				<div className="follow-recommendations_cards_user-info">
					<div className="profile-wrapper_user-name-container">
						<b>{props.userName}</b>
						<span>{props.checkMark}</span>
					</div>
					<div>@{props.handle}</div>
				</div>
				<span className="follow-recommendations_button_container">
					<TweetButton text="Follow" />
				</span>
			</div>
		</div>
	) : (
		<div className="profile-wrapper">
			<div className="profile-wrapper_container">
				<div className="">
					<img
						className="profile-wrapper_image"
						src={props.img}
					/>
				</div>
				<div className="profile-wrapper_user-info">
					<b>{props.userName}</b>
					<div>@{props.handle}</div>
				</div>
				<span>
					<SvgIcon
						classNames={ellipsisInfo.classNames}
						path={ellipsisInfo.path}
					/>
				</span>
			</div>
		</div>
	);
}
