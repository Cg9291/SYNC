import { forwardRef } from "react";
import NumberKeys from "./NumberKeys.js";
import OperatorKeys from "./OperatorKeys.js";

export const Keys = forwardRef((props, btnRef) => (
  <div className="d-flex ">
    <div className="container-fluid m-0 p-0 justify-content-start w-75">
      <div className="row-cols-3 justify-content">
        <OperatorKeys
          id="clear"
          value="AC"
          optionalClasses="col-8 btn btn-danger"
        />
        <OperatorKeys
          id="divide"
          value="/"
          optionalClasses="col-4"
        />
      </div>
      <div className="row-cols-3  justify-content">
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
      <div className="row-cols-3 justify-content">
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
      <div className="row-cols-3 justify-content">
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

      <div className="row-cols-3 justify-content ">
        <NumberKeys
          id="zero"
          value={0}
          optionalClass="col-8"
        />
        <button
          id="decimal"
          className="col-4 btn btn-secondary shadow-none rounded-0 border"
          value={"."}
          onClick={props.handleClick}
        >
          .
        </button>
      </div>
    </div>
    <div className="w-25  d-flex flex-column">
      <OperatorKeys
        id="multiply"
        value="x"
        optionalClasses="col-12"
      />
      <OperatorKeys
        id="subtract"
        value="-"
        optionalClasses="col-12"
      />
      <OperatorKeys
        id="add"
        value="+"
        optionalClasses="col-12"
      />
      <OperatorKeys
        id="equals"
        value="="
        optionalClasses="col-12  flex-grow-1"
      />
    </div>
  </div>
));
