import { searchIconSearchBar } from "../assets/icons/svg_exports";
import { useState } from "react";

export default function SearchBar(props) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className={isFocused ? "searchBar--focused" : "searchBar"}>
			<label className="searchBar_container">
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
				<span className="searchBar_prompt">
					Try searching for people, lists, or keywords
				</span>
			</div>
		</div>
	);
}
