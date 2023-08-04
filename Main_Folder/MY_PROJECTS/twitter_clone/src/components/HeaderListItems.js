import { useState, useEffect } from "react";

export default function HeaderListItems(props) {
	useEffect(() => {
		console.log(props.focusStatusState);
	});

	const handleFocus = () => {
		let focusStatusCopy = {}; //JSON.parse(JSON.stringify(focusStatus));
		Object.keys(props.focusStatusState).forEach(key => {
			focusStatusCopy[key] = false;
		});
		focusStatusCopy[props.value] = true;
		props.setFocusStatus(focusStatusCopy);
	};

	return (
		<li className="header_li">
			<a
				href="#"
				className={
					props.focusStatusState[props.value]
						? "header_anchor-focused"
						: "header_anchor"
				}
				onFocus={handleFocus}
			>
				<div
					className={
						props.value === "For you"
							? "awrapper--for-you"
							: "awrapper"
					}
				>
					<div>{props.value}</div>
					<div
						className={
							props.value === "For you"
								? "blue-focused-bar--for-you"
								: "blue-focused-bar"
						}
					></div>
				</div>
			</a>
		</li>
	);
}
