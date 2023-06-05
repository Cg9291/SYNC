import { searchIcon } from "../assets/icons/svg_exports";

export default function SearchBar(props) {
	return (
		<div className="searchBar-wrapper">
			<label className="searchBar">
				<div className="searchBar_searchIcon-wrapper">
					{searchIcon}</div>
				<input
					className="searchBar_input"
					placeholder="Search Twitter"
				></input>
			</label>
		</div>
	);
}
