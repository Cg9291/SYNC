import { SvgIcon } from "./SvgIcon";
import { generalIcons } from "../objects/svgIcons";

export default function MoreInfoSection() {
	return (
		<div className="more-info">
			<MoreInfoElements text="Terms of Service" />
			<MoreInfoElements text="Privacy Policy" />
			<MoreInfoElements text="Cookie Policy" />
			<MoreInfoElements text="Accessibility" />
			<MoreInfoElements text="Ads info" />
			<MoreInfoElements
				text="More"
				ellipsis="true"
			/>
			<MoreInfoElements text="© 2023 X Corp." />
		</div>
	);
}

function MoreInfoElements(props) {
	const ellipsisInfo = generalIcons.ellipsis.moreInfo;
	return (
		<a
			href="#"
			className="more-info_elements"
		>
			<span className="more-info_text">
				{props.text}
				{props.ellipsis && (
					<SvgIcon
						classNames={ellipsisInfo.classNames}
						path={ellipsisInfo.path}
					/>
				)}
			</span>
		</a>
	);
}
