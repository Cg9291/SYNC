import { searchIconSearchBar } from "../assets/icons/svg_exports";

export default function SearchBar(props) {
	return (
		<div className="searchBar-wrapper">
			<label className="searchBar">
				<div className="searchBar_searchIcon-wrapper">
					{searchIconSearchBar}</div>
				<input
					className="searchBar_input"
					type="text"
					placeholder="Search Twitter"
				></input>
			</label>
		</div>
	);
}
