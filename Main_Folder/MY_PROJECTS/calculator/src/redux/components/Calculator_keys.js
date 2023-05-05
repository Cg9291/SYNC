import {forwardRef} from "react";
import NumberKeys from "./NumberKeys.js";
import OperatorKeys from "./OperatorKeys.js";
import {useContext} from "react";
import {handlersContext} from "../contexts/handlersContext.js";

export const Keys = forwardRef(function Keys(props, btnRef) {
	const handlers = useContext(handlersContext);

	return (
		<div className=" d-flex h-100 m-0 border rounded p-2 ">
			<div className="container-fluid m-0 p-0 w-100 h-100">
				<div className="row justify-content-evenly p-0 m-0   h-20 border ">
					<button
						id="clear"
						value="AC"
						className="col-6 btn btn-danger shadow-none border top-row-buttons"
						onClick={handlers.handleAcClick}
					>
						AC
					</button>
					<OperatorKeys
						id="divide"
						value="/"
						optionalClasses="col-2 top-row-buttons"
					/>
					<OperatorKeys
						id="multiply"
						value="x"
						optionalClasses=" h-20"
					/>
				</div>
				<div className=" row p-0 m-0 h-20 border justify-content-evenly aling-items-center ">
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
						optionalClasses=" h-20"
					/>
				</div>
				<div className="row p-0 m-0 h-20  border justify-content-evenly">
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
				</div>

				<div className="row  p-0 m-0 h-20 border justify-content-evenly">
					<NumberKeys
						id="one"
						value={1}
						optionalClasses=""
					/>
					<NumberKeys
						id="two"
						value={2}
						optionalClasses=""
					/>
					<NumberKeys
						id="three"
						value={3}
						optionalClasses=""
					/>

					<div className="m-0 p-0 col-3 border border-danger ">
						<OperatorKeys
							id="equals"
							value="="
							optionalClasses="border  w-100 h-200 mt-2 "
						/>

					</div>
				</div>
				<div className="row w-75 p-0 m-0 h-20  border ">
					<NumberKeys
						id="zero"
						value={0}
						optionalClasses="col-8"
					/>
					<button
						id="decimal"
						className="col-4 btn btn-secondary shadow-none rounded border  h-80 my-auto"
						value={"."}
						onClick={handlers.handleDecimalClick}
					>
						.
					</button>
				</div>
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
