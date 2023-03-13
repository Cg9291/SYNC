import NumberKeys from "./NumberKeys.js";
import { Keys } from "./Calculator_keys.js";
import Display from "./Display.js";

export default function Calculator(props) {
  return (
    <>
      <Display outPut={props.output} />
      <Keys /*ref=btnRef*/ />
    </>
  );
}
{/* <OperatorKeys
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
       /> */}
;
