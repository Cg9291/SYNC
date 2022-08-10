import {connect } from "react-redux"
import { useEffect, useState,useRef } from "react";
import Display from "./Display";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

export default function Presentational(){
    const [input,setInput]=useState([]);  
    const [output,setOutput]=useState(0);
    const [lastIndex,setLastIndex]=useState(0);//index
    const [operatorsList,setOperatorsList]=useState(['+','-','x','/']);  
    const [operator,setOperator]=useState();
    const [tally,setTally]=useState(0);
    const [secondVar,setSecondVar]=useState([[]]);
    const [result,setResult]=useState(0);
    const [clickStatus,setClickStatus]=useState();
    //const [isOperator,setLastIsOperator]=useState();
    //const [output,setOutput]=useState();
    //const [input,setInput]=useState();
    //const[outPut,setOuput]=useState();
    //const [displayStyle,setDisplayStyle]=useState({backgroundColor:'red'});

    const btnRef=useRef();

    /*function handleKeyPress(event){
        setClickStatus(event.key);
        if(clickStatus==btnRef.current.value){
            btnRef.current.style=displayStyle;
        }
        
    };

    useEffect(()=>window.addEventListener("keydown",handleKeyPress,false),[]);*/

    let turnToOperators=(op,a,b)=>{  
        return op=='x'?a*b
        :op=='+'?a+b
        :op=='/'?a/b
        :op=='-'?a-b
        :'sign not recognized'
    };

    let isNumber=(state)=>{
        return typeof state==='number';}

    const handleClick=(event)=>{
        let etv=event.target.value;
        if(input.length===0){
            setOutput(Number(etv));
            setInput([etv]);
        }else if(isNumber(output)===true||etv==='.'){
            setOutput(Number(output+etv));
            setInput(input.map(x=>{if(input.indexOf(x)==input.length-1){
                return x+etv;
            }
            else{
                return x;}}));  

        }
        else{
            setOutput(Number(etv))  
            setInput([...input,etv])
        }
        
    }

    const handleClickOperator=(event)=>{
        let etv=event.target.value;
        if(isNumber(output)===true||etv==='.'){
            setOperator(etv);
            setOutput(etv);
            setInput([...input,etv])
        }
        else if(etv==='-'){
            setOperator(etv);
            setOutput(etv);
            setInput([...input,etv])
           // setTally(tally+Number(output));
            
            
            
        }
    }
    
    const handleEqualClick=()=>{
        setTally(turnToOperators(operator,Number(tally),Number(secondVar)));
       };
   
    const handleAcClick=()=>{
        setInput([]);
        setTally(0)
        setOutput(0);
        setOperator();
        setSecondVar([])
       }

    //DEFAULT PROPS ASSIGNMENTS
    Display.defaultProps={
        outputState:output,
        inputState:input,
        hadleClick:handleClick,
        tallyState:tally,
        operatorState:operator
       }

    /* const handleClick=(event)=>{
        let etv=event.target.value;
    
        if(output===0){
            setOutput(etv);
            setInput([...input,etv])
        }
        else if (output>0){
            setOutput(output+etv);
            setInput([...input.concat(etv)])
        }
        else{
            setSecondVar([...secondVar,etv]);
            setOutput(etv);
            setInput([...input.concat(etv)])
        }
    }*/

    /*const handleClick=(event)=>{
    let etg=event.target.value;
    let isOperator=(val)=>{
        return operatorsList.indexOf(val)>=0;
    }
        switch(true){
            case input[0]==0:
                setInput([etg]);
                break;
            case isOperator(input[0]):
                switch(true){
                    case isOperator(etg):
                        setOperator(true);
                        //setDisplayStyle({backgroundColor:'red'});
                        break;
                    default:
                        setInput([...input,etg]);
                        break;   
                }
                break;
            default:
                switch(true){
                    case isOperator(etg):
                        setOperator(true);
                        setInput([...input,etg])
                        break;
                    default:
                        setInput([...input,etg]);
                        break; 
                }
                };
    }*/

    /*const handleClick=(event)=>{
        let etg=event.target.value;
        if(input==0){//NO INPUT YET
            if(lastIsOperator===false){
                if(operatorsList.indexOf(etg)>=0){//entered an operator
                    setCalc(input.slice());
                    setOperator(etg);
                    setInput(input.concat(etg));
                    setLastIsOperator(true);
                }
                else{
                    //setCalc('etg='+etg);
                    setInput([etg]);
                    setLastIsOperator(false);
                }
            }
            else{//should be entering a number
                setCalc(calc.concat(input[1]));
                setInput(input.concat(etg));
                setLastIsOperator(false);
            }
        }else{
            if(lastIsOperator===false){//INPUT ALREADY EXISTS
                if(operatorsList.indexOf(etg)>=0){//entered an operator
                    setCalc(input.slice);
                    setOperator(etg);
                    setInput(input.concat(etg));
                    setLastIsOperator(true);
                }
                else{
                    //setCalc('etg='+etg);
                    setInput(input.concat(etg));
                    setLastIsOperator(false);
                }
            }
            else{
                setCalc(calc.concat(input[1]));
                setInput(input.concat(etg));
                setLastIsOperator(false);
        }}        
    };*/

    
    return(
        <div>
            <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
                
                <Display outPut={output}/>
                <div className="row-cols-4 justify-content">
                    <button id='clear' className="col-6 btn btn-danger shadow-none rounded-0 border" value={'AC'} onClick={handleAcClick}>AC</button>
                    <button id="divide" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'/'} onClick={handleClickOperator}>/</button>
                    <button id="multiply" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'x'} onClick={handleClickOperator}>x</button>
                </div>
                <div className="row-cols-4  justify-content">
                    <button id="seven" ref={btnRef} className="col-3 btn btn-dark shadow-none rounded-0 border" value={7} onClick={handleClick}>7</button>
                    <button id="eight" ref={btnRef} className="col-3 btn btn-dark shadow-none rounded-0 border" value={8} onClick={handleClick}>8</button>
                    <button id="nine" ref={btnRef} className="col-3 btn btn-dark shadow-none rounded-0 border" value={9} onClick={handleClick} >9</button>
                    <button id="subtract" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'-'} onClick={handleClickOperator}>-</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button id="four" className="col-3 btn btn-dark shadow-none rounded-0 border" value={4} onClick={handleClick}>4</button>
                    <button id="five" className="col-3 btn btn-dark shadow-none rounded-0 border" value={5} onClick={handleClick}>5</button>
                    <button id="six" className="col-3 btn btn-dark shadow-none rounded-0 border" value={6} onClick={handleClick}>6</button>
                    <button id="add" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'+'} onClick={handleClickOperator}>+</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button id="one" className="col-3 btn btn-dark shadow-none rounded-0 border" value={1} onClick={handleClick}>1</button>
                    <button id="two" className="col-3 btn btn-dark shadow-none rounded-0 border" value={2} onClick={handleClick}>2</button>
                    <button id="three" className="col-3 btn btn-dark shadow-none rounded-0 border" value={3} onClick={handleClick}>3</button>
                    <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='} onClick={handleEqualClick}>=</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button className="col-6 btn btn-dark shadow-none rounded-0 border" value={0} onClick={handleClick}>0</button>
                    <button id="decimal" className="col-3 btn btn-secondary shadow-none rounded-0 border" value={'.'} onClick={handleClick}>.</button>
                    <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='} onClick={handleEqualClick}>=</button>
                </div>
            </div>
        </div>
    )
}

//export default connect(mapStateToProps,mapDispatchToProps)(Presentational