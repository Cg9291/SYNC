import { forwardRef } from "react"
import NumberKeys from "./NumberKeys.js"
import OperatorKeys from "./OperatorKeys.js"

 export const Keys = forwardRef((props, btnRef) => (
   <div>
     <div className="row-cols-4 justify-content">
       <button
         id="clear"
         className="col-6 btn btn-danger shadow-none rounded-0 border"
         value={"AC"}
         onClick={props.handleAcClick}
       >
         AC
       </button>
       <OperatorKeys
         id="divide"
         value="/"
       />
       <OperatorKeys
         id="multiply"
         value="x"
       />
     </div>
     <div className="row-cols-4  justify-content">
       <NumberKeys
         id="nine"
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
       />
     </div>
     <div className="row-cols-4 justify-content">
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
       />
     </div>
     <div className="row-cols-4 justify-content">
       <NumberKeys
         id="one"
         value={1}
       />
       <NumberKeys
         id="two"
         value={2}
       />
       <NumberKeys
         id="three"
         value={3}
       />
       <button
         id="equals"
         className="col-3 btn btn-success shadow-none rounded-0 border"
         value={"="}
         onClick={props.handleEqualClick}
       >
         =
       </button>
     </div>
     <div className="row-cols-4 justify-content">
       <button
         id="zero"
         className="col-6 btn btn-dark shadow-none rounded-0 border"
         value={0}
         onClick={props.handleClick}
       >
         0
       </button>
       <button
         id="decimal"
         className="col-3 btn btn-secondary shadow-none rounded-0 border"
         value={"."}
         onClick={props.handleClick}
       >
         .
       </button>
       <button
         id="equals"
         className="col-3 btn btn-success shadow-none rounded-0 border"
         value={"="}
         onClick={props.handleEqualClick}
       >
         =
       </button>
     </div>
   </div>
 ));
