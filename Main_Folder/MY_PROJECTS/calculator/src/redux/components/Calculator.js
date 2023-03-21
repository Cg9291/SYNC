import NumberKeys from "./NumberKeys.js";
import { Keys } from "./Calculator_keys.js";
import Display from "./Display.js";
import { handlersContext } from "../contexts/handlersContext.js";
import { useContext } from "react";
export default function Calculator(  props ) {
  return (
    <>
      <handlersContext.Provider value={props.handlers}>
        <Display/>
        <Keys  /*ref=btnRef*/ />
      </handlersContext.Provider>
    </>
  );
}
