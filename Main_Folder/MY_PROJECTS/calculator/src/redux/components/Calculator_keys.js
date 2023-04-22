import { forwardRef } from "react";
import NumberKeys from "./NumberKeys.js";
import OperatorKeys from "./OperatorKeys.js";
import { useContext } from "react";
import { handlersContext } from "../contexts/handlersContext.js";

export const Keys = forwardRef(function Keys(props, btnRef) {
  const handlers = useContext(handlersContext);

  return (
    <div className=" border border-warning  d-flex w-100 h-100 m-0 p-0 ">
      <div className="container-fluid m-0 p-0 border w-100 h-100">
        <div className="row justify-content p-0 m-0 border border-success h-20">
          <button
            id="clear"
            value="AC"
            className="col-8 btn btn-danger shadow-none rounded-0 border"
            onClick={handlers.handleAcClick}
          >
            AC
          </button>
          <OperatorKeys
            id="divide"
            value="/"
            optionalClasses="col-4"
          />
        </div>
        <div className=" row p-0 m-0 h-20">
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
        </div>
        <div className="row p-0 m-0 h-20">
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
        </div>
        <div className="row  p-0 m-0 h-20">
          <NumberKeys
            id="one"
            value={1}
            optionalClass="col-4"
          />
          <NumberKeys
            id="two"
            value={2}
            optionalClass="col-4"
          />
          <NumberKeys
            id="three"
            value={3}
            optionalClass="col-4"
          />
        </div>

        <div className="row  p-0 m-0 h-20">
          <NumberKeys
            id="zero"
            value={0}
            optionalClass="col-8"
          />
          <button
            id="decimal"
            className="col-4 btn btn-secondary shadow-none rounded-0 border"
            value={"."}
            onClick={handlers.handleDecimalClick}
          >
            .
          </button>
        </div>
      </div>
      <div className="d-flex flex-column w-25 h-100 m-0 p-0  border border-warning">

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
            optionalClasses="col-12 flex-grow-1"
          />

      </div>
    </div>
  );
});
