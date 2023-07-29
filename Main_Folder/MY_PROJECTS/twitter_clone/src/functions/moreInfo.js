import { ellipsis } from "../assets/icons/svg_exports.js";

export const moreInfo = () => {
	return (
		<div className="more-info">
			<a className="more-info_elements">
				<span className="more-info_text">Terms of Service</span>
			</a>
			<a className="more-info_elements">
				<span className="more-info_text">Privacy Policy</span>
			</a>
			<a className="more-info_elements">
				<span className="more-info_text">Cookie Policy</span>
			</a>
			<a className="more-info_elements">
				<span className="more-info_text">Accessibility</span>
			</a>
			<a className="more-info_elements">
				<span className="more-info_text">Ads info</span>
			</a>
			<a className="more-info_elements">
				<span className="more-info_text">More {ellipsis()}</span>
			</a>
			<a className="more-info_elements">
				<span className="more-info_text">© 2023 X Corp.</span>
			</a>
		</div>
	);
};
