import {connect } from "react-redux"
import { useEffect, useState,useRef } from "react";
import Display from "./Display";
import {Keys} from "./Calculator_keys"
import {runOperation} from "../functions/arithmetic_Function";
import {isOperator} from "../functions/isOperator_Function";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

export default function Container(){
    const [input,setInput]=useState([]);  
    const [output,setOutput]=useState();
    const [displayStyle,setDisplayStyle]=useState({backgroundColor:'red'});
    const [test,setTest]=useState(0);
    const [isOperator,setIsOperator]=useState(false);
    const [operator,setOperator]=useState()
    const btnRef=useRef();

    
   //EVENTS HANDLER FUNCTIONS
    const handleClick=(event)=>{
        let etv=event.target.value;
        if(isOperator===false){
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
        }
        

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
        }    */
    }

    const handleClickOperator=(event)=>{
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
    }
    
    const handleEqualClick=()=>{
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
   
    const handleAcClick=()=>{
        setInput([]);
        setOutput();
        setTest(0);
        setIsOperator(false)
       }


    //DEFAULT PROPS ASSIGNMENTS
    Display.defaultProps={
        outputState:output,
        inputState:input,
        testState:test,
        isOperatorState:isOperator,
        operatorState:operator,
        handleClick:handleClick
       }
       
    Keys.defaultProps={
        handleAcClick:handleAcClick,
        handleClickOperator:handleClickOperator,
        handleClick:handleClick,
        handleEqualClick:handleEqualClick,
        isOperatorState:isOperator,
        operatorState:operator,
    }

    return(
        <div>
            <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">   
                <Display outPut={output}/>
                <Keys ref={btnRef}/>
            </div>
        </div>
    )
}