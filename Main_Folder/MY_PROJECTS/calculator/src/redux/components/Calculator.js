import NumberKeys from "./NumberKeys.js";
import { Keys } from "./Calculator_keys.js";
import Display from "./Display.js";
import { handlersContext } from "../contexts/handlersContext.js";
import { useContext } from "react";
export default function Calculator(  props ) {
  return (
    <div className="border border-success h-100 mh-100">
      <handlersContext.Provider value={props.handlers}>
        <Display/>
        <Keys  /*ref=btnRef*/ />
      </handlersContext.Provider>
    </div>
  );
}
