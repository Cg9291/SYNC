import { useState, useRef} from "react";
import Display from "./Display";
import { Keys } from "./Calculator_keys";
import NumberKeys from "./NumberKeys.js";
import { runOperation } from "../functions/arithmetic_Function";
import { isOperator } from "../functions/isOperator_Function";
import Calculator from "./Calculator";
import OperatorKeys from "./OperatorKeys";
import { handlersContext } from "../contexts/handlersContext";

//TODOS
/*
-Despite them fully working..still need to tweak code to meet DISPLAY & DECIMALS requirements from fcc camp challenge.
-Add function to operate on negative numbers.
-Get ui design 
*/

export default function Container() {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState(0);
  const [operator, setOperator] = useState();
  const [operatorMode, setOperatorMode] = useState(false);
  const [displayStyle, setDisplayStyle] = useState({ backgroundColor: "red" });

  const btnRef = useRef();

  //EVENTS HANDLER FUNCTIONS
  const handleClick = event => {
    let etv = event.target.value;
    if (operatorMode) {
      setOperatorMode(false);
      setInput([etv]);
    } else {
      setInput(input => [...input, etv]);
    }
  };

  const compute = () => {
    switch (operator) {
      case "x":
        return output * Number(input.join(""));
      case "/":
        return output / Number(input.join(""));
      case "-":
        return output - Number(input.join(""));
      case "+":
        return output + Number(input.join(""));
    }
  };

  const handleOperatorClick = event => {
    let etv = event.target.value;

    if (!operatorMode) {
      //have not JUST cliked on an operator
      if (!operator) {
        //have not clicked on ANY operator yet
        setOperatorMode(true);
        setOperator(etv);
        setOutput(Number(input.join("")));
      } else {
        //operator has been clicked at some point,just not rn
        setOperatorMode(true);
        setOutput(compute());
        setInput([]);
        setOperator(etv);
      }
    } else {
      //have just clicked on operator
      setOperatorMode(true);
      setInput([]);
      switch (operator) {
        case "-":
          setOutput(-compute());
          //setOperator(etv);
          //setOutput(-compute());
          break;
        default:
          setOperator(etv);
        //setOutput(compute());
      }
    }
  };

  const handleEqualClick = event => {
    let etv = event.target.value;
    setOperatorMode(true);
    setOperator(etv);
    compute();
  };

  const handleAcClick = () => {
    setInput([]);
    setOutput(0);
    setOperator();
    setOperatorMode(false);
  };

  const handleDecimalClick = event => {
    let etv = event.target.value;
    if (operatorMode) {
      setOperatorMode(false);
      setInput([etv]);
    } else {
      if (input.indexOf(".") === -1) {
        setInput(input => [...input, etv]);
      }
    }
  };

  //DEFAULT PROPS ASSIGNMENTS
  Display.defaultProps = {
    output: output,
    input: input,

    isOperatorState: isOperator,
    operatorState: operator,
    handleClick: handleClick,
  };

  const handlersContextProps = {
    handleClick: handleClick,
    handleOperatorClick: handleOperatorClick,
    compute: compute,
    handleEqualClick: handleEqualClick,
    handleAcClick: handleAcClick,
    handleDecimalClick: handleDecimalClick,
  };

  return (
    <div>
      <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
        <Calculator
          handlers={handlersContextProps}
        />
      </div>
    </div>
  );
}
