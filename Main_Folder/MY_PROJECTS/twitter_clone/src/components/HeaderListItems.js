import { useState } from "react";

export default function HeaderListItems(props) {
	const [focusStatus, setFocusStatus] = useState({
		"For you": false,
		"Following": true,
		"My feed": false,
	}); //im using this instead of css:focus in order to prevent losing focus when any other element outside of this ul is clicked

	  const handleFocus=(e)=>{
        let focusStatusCopy = JSON.parse(JSON.stringify(focusStatus));
        Object.keys(focusStatusCopy).forEach(y=>y=false);
        focusStatusCopy[props.value]=true;
        setFocusStatus(focusStatusCopy)
       // e.target.className = "header_anchor:";
       console.log(focusStatus)
    };

	return (
		<li
			className="header_li"
		>
			<a
				//id="forYou"
				href="#"
				className={focusStatus[props.value]==true?"header_anchor-focus":"header_anchor"}
				onFocus={handleFocus}
				/* {`${
					props.clickedElement === "forYou"
						? "header_anchor--clicked"
						: "header_anchor"
				}`} */
				/*   onFocus={handleFocus}
                onBlur={handleBlur} */
			>
				<div className="awrapper">
					<div /* ref={ref => (props.focusedText.current["forYou"] = ref)} */>
						{props.value}
					</div>
					<div
						className="blue-focused-bar"
						//style={{ width: props.focusedBarLength }}
					></div>
				</div>
			</a>
		</li>
	);
}
