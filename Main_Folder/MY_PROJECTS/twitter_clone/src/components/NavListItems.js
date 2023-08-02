import { useContext, forwardRef } from "react";
import { NavFocusContext } from "../contexts/contexts.js";
import { messagesIcon } from "../assets/icons/svg_exports.js";

export const NavListItems = forwardRef(function (props, navFirstElementRef) {
	const focusedLiContext = useContext(NavFocusContext);

	let focusedLi = focusedLiContext.focusedLi;
	let setFocusedLi = focusedLiContext.setFocusedLi;

	const focusHandler = () => {
		let nextState = {};
		Object.keys(focusedLi).forEach(key => {
			nextState[key] = false;
		});
		nextState[props.identifier.name] = true;
		setFocusedLi(nextState);
		//return focusedLi;
	};

	return (
		<li className={props.classNames}>
			<a
				href="#"
				className="nav_a"
				ref={navFirstElementRef}
				onFocus={() => focusHandler()}
			>
				{props.identifier(focusedLiContext.focusedLi[props.identifier.name])}
				<span
					className={
						focusedLiContext.focusedLi[props.identifier.name]
							? "nav_text-focused"
							: "nav_text"
					}
				>
					{props.label}
				</span>
			</a>
		</li>
	);
});
