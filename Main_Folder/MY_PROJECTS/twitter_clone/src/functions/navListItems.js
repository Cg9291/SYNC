import { useContext } from "react";
import { NavFocusContext } from "../contexts/contexts.js";


export default function NavListItems (props){
    const focusedLiContext=useContext(NavFocusContext);
    return (
			<li className={props.classNames}>
				<a
					href="#"
					className="nav_a"
					//ref={ref}
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
};
