import { connect } from "react-redux";
import { useEffect, useState, useRef, createContext } from "react";
import Display from "./Display";
import { Keys } from "./Calculator_keys";
import NumberKeys from "./NumberKeys.js";
import { runOperation } from "../functions/arithmetic_Function";
import { isOperator } from "../functions/isOperator_Function";
import Calculator from "./Calculator";
import OperatorKeys from "./OperatorKeys";
import { handlersContext } from "../contexts/handlersContext";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

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

    /* let etv = event.target.value;☺
    if (isOperator === false) {
      switch (etv) {
        case "+":
        case "-":
        case "x":
        case "/":
          setIsOperator(true);
          setOperator(etv);
          setNum(etv);
          setInput([...input, etv]);
          break;
        default:
          let inputArr = input.slice();
          if (inputArr[inputArr.length - 1] !== "." || etv !== ".") {
            setNum(Number(num + etv));
            setInput([...input, etv]);
            setIsOperator(false);
          }
      }
    } else {
      let inputArr = input.slice();
      switch (etv) {
        case "+":
        case "x":
        case "/":
          inputArr.splice(input.length - 1, 1, etv);
          setIsOperator(true);
          setOperator(etv);
          setNum(etv);
          setInput(inputArr);
          break;
        case "-":
          setIsOperator(true);
          setOperator(etv);
          setNum(etv);
          setInput([...input, etv]);
          break;
        default:
          if (inputArr[inputArr.length - 1] !== "." || etv !== ".") {
            setNum(etv);
            setInput([...input, etv]);
            setIsOperator(false);
            break;
          }
      }
    } */
  };

  /*if(isOperator===false){
            switch(etv){
                case "+":
                case "-":
                case "x":
                case "/":
                    setIsOperator(true);
                    setOperator(etv);
                    setInput([...input,etv]);
                    break;
                default:
                    setTest(Number(test+etv));
                    setInput([...input,Number(etv)]);
                    break;
        }}
        else{
            switch(etv){
                case "+":
                case "x":
                case "/":
                    setOperator(etv);
                    setInput([...input,etv]);
                    break;
                case "-":
                    setOperator(operator+etv);
                    setInput([...input,etv]);
                    break;
                case "=":
                    setOutput(test);
                    break;
                default:
                    switch(operator){
                        case "+":
                            setTest(test+Number(etv));
                            setInput([...input,Number(etv)]);
                            break;
                        case "-":
                            setTest(test-Number(etv));
                            setInput([...input,Number(etv)]);
                            break;
                        case "x":
                            setTest(test*Number(etv));
                            setInput([...input,Number(etv)]);
                            break;
                        case "/":
                            setTest(test/Number(etv));
                            setInput([...input,Number(etv)]);
                            break;
                    }
                    setIsOperator(false);
            }
        }*/

  //start here
  /*if(input.length===0){//if nothing entered,set input and output to etv
            setOutput(etv);
            setInput([etv]);
        }else if(isOperator(output)===false||(output==="." && etv!=".")||(output==="0" && etv!=="0")){//if last entered is not operator OR if its not consecutive dots,concat etv to ouptput;concat etv to last entered in input
            setOutput(output+etv);
            setInput(input.map(x=>{if(input.indexOf(x)==input.length-1){
                return x+etv;
            }
            else{
                return x;}}));
        }
        else{//if last entered was operator
            setOutput(etv);
            setInput([...input,etv]);
        }
    }*/

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
      if (!operator) {
        setOperatorMode(true);
        setOperator(etv);
        setOutput(Number(input.join("")));
      } else {
        setOperatorMode(true);
        setOutput(compute());
        setInput([]);
        setOperator(etv);
      }
    }else{
      setOperatorMode(true);
      switch(operator) {
        case "-":
          setOperator(etv);
          setOutput(-compute());
          break;
          default:
            setOperator(etv);
            setOutput(compute());
      }
    }
  };

  const handleEqualClick = () => {
   setOperatorMode(true);
    //compute();

    /*let inputSlice=input.slice();

        for(let i=0;i<inputSlice.length;i++){
            switch(inputSlice[i]){//must fix so that '.' is accounted for
                case '+':
                case '-':
                case 'x':
                case '/':
                    if(inputSlice[i+1]===null){
                        inputSlice=inputSlice.slice(0,inputSlice[i+1])
                    }
                    if(inputSlice[i-1]==null){
                        if(inputSlice[i+1]==='+'||inputSlice[i+1]==='x'||inputSlice[i+1]==='/'){
                            setOutput(runOperation(inputSlice[i+1],0,Number(inputSlice[i+2])));
                            setInput([runOperation(inputSlice[i+1],0,Number(inputSlice[i+2]))]);
                            i++;
                        }
                        else if(inputSlice[i+1]==='-'){
                            setOutput(runOperation(inputSlice[i],0,Number(inputSlice[i+1]+inputSlice[i+2])));
                            setInput([runOperation(inputSlice[i],0,Number(inputSlice[i+1]+inputSlice[i+2]))]);
                            i++;
                        }
                        else{
                            setOutput(runOperation(inputSlice[i],0,Number(inputSlice[i+1])));
                            setInput([runOperation(inputSlice[i],0,Number(inputSlice[i+1]))]);
                        }
                    }
                    else{
                        if(inputSlice[i+1]==='+'||inputSlice[i+1]==='x'||inputSlice[i+1]==='/'){
                            setOutput(runOperation(inputSlice[i+1],inputSlice[i-1],Number(inputSlice[i+2])));
                            setInput([runOperation(inputSlice[i+1],inputSlice[i-1],Number(inputSlice[i+2]))]);
                               i++;
                        }
                        else if(inputSlice[i+1]==='-'){
                            setOutput(runOperation(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1]+inputSlice[i+2])));
                            setInput([runOperation(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1]+inputSlice[i+2]))]);
                            i++;
                            }
                        else{
                            setOutput(runOperation(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1])));
                            setInput([runOperation(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1]))]);
                        }
                    }
            }
        }*/
  };

  const handleAcClick = () => {
    setInput([]);
    setOutput(0);
    setOperator();
    setOperatorMode(false)
  };

  //DEFAULT PROPS ASSIGNMENTS
  Display.defaultProps = {
    output: output,
    input: input,

    isOperatorState: isOperator,
    operatorState: operator,
    handleClick: handleClick,
  };

  /* Keys.defaultProps = {
    handleAcClick: handleAcClick,
    handleOperatorClick: handleOperatorClick,
    handleClick: handleClick,
    handleEqualClick: handleEqualClick,
    isOperatorState: isOperator,
    operatorState: operator,
  }; */

  Calculator.defaultProps = {
    output: output,
  };

  NumberKeys.defaultProps = {
    handleClick: handleClick,
  };
  OperatorKeys.defaultProps = {
    /*  handleOperatorClick: handleOperatorClick, */
  };

  return (
    <div>
      <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
        <Calculator
          handlers={{ handleClick: handleClick, handleOperatorClick: handleOperatorClick ,compute:compute,
          handleEqualClick:handleEqualClick,handleAcClick:handleAcClick}}
        />
      </div>
    </div>
  );
}
