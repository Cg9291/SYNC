import NumberKeys from "./NumberKeys.js";
import { Keys } from "./Calculator_keys.js";
import Display from "./Display.js";
import { handlersContext } from "../contexts/handlersContext.js";
export default function Calculator(  props ) {
  return (
    <>
      <handlersContext.Provider value={props.handlers}>
        <Display outPut={props.input} />
        <Keys /*ref=btnRef*/ />
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
