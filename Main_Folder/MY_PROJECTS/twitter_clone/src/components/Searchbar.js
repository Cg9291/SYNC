import { useState } from "react";
import { SvgIcon } from "./SvgIcon";
import { generalIcons } from "../objects/navListIcons.js";

export default function SearchBar(props) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className={isFocused ? "searchBar--focused" : "searchBar"}>
			<div className="searchBar_wrapper">
				<label className="searchBar_container">
					<div
						className={
							isFocused
								? "searchBar_searchIcon-wrapper--focused"
								: "searchBar_searchIcon-wrapper"
						}
					>
						<SvgIcon
							classNames={generalIcons.searchIconSearchBar.classNames}
							path={generalIcons.searchIconSearchBar.path}
						/>
					</div>
					<input
						className="searchBar_input"
						type="text"
						placeholder="Search"
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
					></input>
				</label>
			</div>
			<div className="searchBar_prompt-wrapper">
				<span className="searchBar_prompt">
					Try searching for people, lists, or keywords
				</span>
			</div>
		</div>
	);
}
