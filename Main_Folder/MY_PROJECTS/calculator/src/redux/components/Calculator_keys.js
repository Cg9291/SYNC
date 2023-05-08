import {forwardRef} from "react";
import NumberKeys from "./NumberKeys.js";
import OperatorKeys from "./OperatorKeys.js";
import {useContext} from "react";
import {handlersContext} from "../contexts/handlersContext.js";

export const Keys = forwardRef(function Keys(props, btnRef) {
	const handlers = useContext(handlersContext);

	return (
		<div className=" d-flex h-100 m-0  rounded p-2  bg-color2 pb-5">
			<div
				id="keys-grid-container"
				className="container-fluid m-0 p-0 w-100 h-100 "
			>
				<button
					id="clear"
					value="AC"
					className=" btn border shadow-none rounded h-100  m-0 p-0 my-auto bg-color4 text-light wide-btns "
					onClick={handlers.handleAcClick}
				>
					AC
				</button>
				<OperatorKeys
					id="divide"
					value="/"
					optionalClasses=" "
				/>
				<OperatorKeys
					id="multiply"
					value="x"
					optionalClasses=" "
				/>

				<NumberKeys
					id="seven"
					value={7}
				/>
				<NumberKeys
					id="eight"
					value={8}
				/>
				<NumberKeys
					id="nine"
					value={9}
				/>
				<OperatorKeys
					id="subtract"
					value="-"
					optionalClasses=" "
				/>

				<NumberKeys
					id="four"
					value={4}
				/>
				<NumberKeys
					id="five"
					value={5}
				/>
				<NumberKeys
					id="six"
					value={6}
				/>
				<OperatorKeys
					id="add"
					value="+"
					optionalClasses=""
				/>

				<NumberKeys
					id="one"
					value={1}
					optionalClasses="  m-0 p-0"
				/>
				<NumberKeys
					id="two"
					value={2}
					optionalClasses=" m-0 p-0"
				/>
				<NumberKeys
					id="three"
					value={3}
					optionalClasses=" m-0 p-0"
				/>

				<NumberKeys
					id="zero"
					value={0}
					optionalClasses="wide-btns"
				/>
				<button
					id="decimal"
					className=" btn btn-secondary shadow-none rounded  h-100 my-auto border"
					value={"."}
					onClick={handlers.handleDecimalClick}
				>
					.
				</button>

				<OperatorKeys
					id="equals"
					value="="
					optionalClasses=" equal-btn"
				/>
			</div>
			{/* <div className="d-flex flex-column w-25 h-100 m-0 p-0 ">
				<OperatorKeys
					id="multiply"
					value="x"
					optionalClasses="col-12 h-20"
				/>
				<OperatorKeys
					id="subtract"
					value="-"
					optionalClasses="col-12 h-20"
				/>
				<OperatorKeys
					id="add"
					value="+"
					optionalClasses="col-12 h-20"
				/>

				<OperatorKeys
					id="equals"
					value="="
					optionalClasses="col-12 h-equal-sign"
				/>
			</div> */}
		</div>
	);
});
