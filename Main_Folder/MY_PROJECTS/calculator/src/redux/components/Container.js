import { connect } from "react-redux";
import { useEffect, useState, useRef } from "react";
import Display from "./Display";
import { Keys } from "./Calculator_keys";
import NumberKeys from "./NumberKeys.js";
import { runOperation } from "../functions/arithmetic_Function";
import { isOperator } from "../functions/isOperator_Function";
import Calculator from "./Calculator";
import OperatorKeys from "./OperatorKeys";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

export default function Container() {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState(0);
  const [displayStyle, setDisplayStyle] = useState({ backgroundColor: "red" });
  const [num, setNum] = useState(0);
  const [isOperator, setIsOperator] = useState(false);
  const [operator, setOperator] = useState();
  const btnRef = useRef();

  //EVENTS HANDLER FUNCTIONS
  const handleClick = event => {
    let etv = event.target.value;
    setInput(input => [...input, etv]);

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

  const handleOperatorClick = event => {
    let etv = event.target.value;
    let firstVal=output;
    let secondVal;
    let op;
    const compute = () => {
      switch (op) {
        case "x":
          return firstVal * secondVal;
        case "/":
          return firstVal / secondVal;
        case "-":
          return firstVal - secondVal;
        case "+":
          return firstVal + secondVal;
      }
    };
    switch (output) {
      case 0:
        setOutput(input);
        setInput([]);
        //op=etv;
      default:
        setOutput(compute())

    }

    /*let etv=event.target.value;

        if(isOperator(output)===false){//
            //added output as dot so that it doesnt mess the inferred conditions of else statement
            //setOperator(etv);
            setOutput(etv);
            setInput([...input,etv])
        }
        else{
            switch(etv){
                case '-':
                    setOutput(etv);
                    setInput([...input,etv]);
            }
        }*/
  };

  const handleEqualClick = () => {
    let result = eval(input.join(""));
    setInput([result]);
    setNum(result.toString());

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
    setOutput();
    setNum(0);
    setIsOperator(false);
    setOperator();
  };

  //DEFAULT PROPS ASSIGNMENTS
  Display.defaultProps = {
    output: output,
    input: input,
    numState: num,
    isOperatorState: isOperator,
    operatorState: operator,
    handleClick: handleClick,
  };

  Keys.defaultProps = {
    handleAcClick: handleAcClick,
    handleOperatorClick: handleOperatorClick,
    handleClick: handleClick,
    handleEqualClick: handleEqualClick,
    isOperatorState: isOperator,
    operatorState: operator,
  };

  Calculator.defaultProps = {
    output: output,
  };

  NumberKeys.defaultProps = {
    handleClick: handleClick,
  };
  OperatorKeys.defaultProps = {
    handleOperatorClick: handleOperatorClick,
  };

  return (
    <div>
      <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
        <Calculator />
      </div>
    </div>
  );
}
