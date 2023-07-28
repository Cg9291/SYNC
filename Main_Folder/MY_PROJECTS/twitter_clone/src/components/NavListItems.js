import { useContext, forwardRef } from "react";
import { NavFocusContext } from "../contexts/contexts.js";
import { messagesIcon } from "../assets/icons/svg_exports.js";

export const NavListItems = forwardRef(function (props, navFirstElementRef) {
	const focusedLiContext = useContext(NavFocusContext);

	let focusedLi = focusedLiContext.focusedLi;
	let setFocusedLi = focusedLiContext.setFocusedLi;
	let clone = {};

	let nextState = {};

	let myModFn = () => {
		Object.keys(focusedLi).forEach(key => (clone.focusedLi[key] = true));
		console.log(clone);
		focusedLiContext.setFocusedLi(clone);
		console.log(clone);
	};
	//console.log(focusedLi)
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

				onFocus={() => {

					Object.keys(focusedLi).forEach(key => {
						nextState[key] = false;
					});
					nextState[props.identifier] = true;

					setFocusedLi(focusedLi => nextState);

					console.log(focusedLi, nextState,props.identifier.name);
					return focusedLi;
				}}
			>
				{props.identifier(focusedLiContext.focusedLi[props.identifier])}
				<span className="nav_text">{props.label}</span>
			</a>
		</li>
	);
});
