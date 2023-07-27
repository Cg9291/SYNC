import { useContext, forwardRef } from "react";
import { NavFocusContext } from "../contexts/contexts.js";

export const NavListItems = forwardRef(function (props, navFirstElementRef) {
	const focusedLiContext = useContext(NavFocusContext);

	let focusedLi = focusedLiContext.focusedLi;
	let clone = {};

	let myModFn = () => {
		Object.keys(focusedLi).forEach(key => (clone.focusedLi[key] = true));console.log(clone);
		focusedLiContext.setFocusedLi(clone);alert(clone)
	};
	return (
		<li className={props.classNames}>
			<a
				href="#"
				className="nav_a"
				ref={navFirstElementRef}
				/* 	onClick={() => {
					focusedLiContext.setFocusedLi(po => ({
						...po,
						[props.identifier]: true,
					}));
				}} */

				/* onFocus={() => {
					focusedLiContext.setFocusedLi(po => ({
						...po,
						[props.identifier]: true,
					}));
				}}
				onBlur={() => {
					//alert(focusedLiContext.clickedNavElement);
					if (focusedLiContext.clickedNavElement === "nav_nav-icons") {
						focusedLiContext.setFocusedLi(po => ({
							...po,
							[props.identifier]: false,
						}));
					}
				}} */

				onClick={() => myModFn}
			>
				{props.identifier(focusedLiContext.focusedLi[props.identifier])}
				<span className="nav_text">{props.label}</span>
			</a>
		</li>
	);
});
