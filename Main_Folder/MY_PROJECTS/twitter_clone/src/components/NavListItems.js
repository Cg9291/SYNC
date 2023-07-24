import { useContext, forwardRef } from "react";
import { NavFocusContext } from "../contexts/contexts.js";

export const NavListItems = forwardRef(function (props, navFirstElementRef) {
	const focusedLiContext = useContext(NavFocusContext);
	return (
		<li className={props.classNames}>
			<a
				href="#"
				className="nav_a"
				ref={navFirstElementRef}
				onClick={() =>
					focusedLiContext.setFocusedLi(po => ({
						...po,
						[props.identifier]: true,
					}))
				}
				onFocus={() =>
					focusedLiContext.setFocusedLi(po => ({
						...po,
						[props.identifier]: true,
					}))
				}
				onBlur={() =>
					focusedLiContext.setFocusedLi(po => ({
						...po,
						[props.identifier]: false,
					}))
				}
			>
				{props.identifier(focusedLiContext.focusedLi[props.identifier])}
				<span className="nav_text">{props.label}</span>
			</a>
		</li>
	);
});
