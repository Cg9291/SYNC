import { searchIconSearchBar } from "../assets/icons/svg_exports";
import { useState } from "react";
export default function SearchBar(props) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div
			className="searchBar-wrapper"
			onFocus={e => console.log(e.target)}
		>
			<label className={isFocused ? "searchBar--focused" : "searchBar"}>
				<div
					className={
						isFocused
							? "searchBar_searchIcon-wrapper--focused"
							: "searchBar_searchIcon-wrapper"
					}
				>
					{searchIconSearchBar}
				</div>
				<input
					className="searchBar_input"
					type="text"
					placeholder="Search"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				></input>
			</label>
			<div className="searchBar_prompt-wrapper">
				<div className="searchBar_prompt">
					Try searching for people, topics, or keywords
				</div>
			</div>
		</div>
	);
}

