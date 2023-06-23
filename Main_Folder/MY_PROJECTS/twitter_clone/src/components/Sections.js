import TrendingCards from "./TrendingCards";
import {CardsInfoContext} from "../contexts/contexts.js";

export default function Section({level}) {
	return (
		<div className="thesec">
			<CardsInfoContext.Provider value={level}>
				{/* {JSON.stringify(level)} */}
				<TrendingCards />
			</CardsInfoContext.Provider>
		</div>
	);
}
