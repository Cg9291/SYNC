import NumberKeys from "./NumberKeys.js";
import { Keys } from "./Calculator_keys.js";
import Display from "./Display.js";
import { handlersContext } from "../contexts/handlersContext.js";
import { useContext } from "react";
export default function Calculator(  props ) {
  const handlers=useContext(handlersContext)
  return (
    <>
      <handlersContext.Provider value={props.handlers}>
        <Display outPut={props.input} />
        <Keys handlers={handlers} handleAcClick={props.handleAcClick} /*ref=btnRef*/ />
      </handlersContext.Provider>
    </>
  );
}
{
  /* <OperatorKeys
  id="multiply"
  value="x"
/>
<OperatorKeys
         id="subtract"
         value="-"
       />
        <OperatorKeys
         id="add"
         value="+"
       /> */
}
