import {connect } from "react-redux"
import { useEffect, useState,useRef } from "react";
import Display from "./Display";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

export default function Presentational(){
    const [input,setInput]=useState([]);  
    const [output,setOutput]=useState(0);
    const [displayStyle,setDisplayStyle]=useState({backgroundColor:'red'});
    
    const btnRef=useRef();

    function handleKeyPress(event){
        setClickStatus(event.key);
        if(clickStatus==btnRef.current.value){
            btnRef.current.style=displayStyle;
        }
        
    };

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
        }else if(isNumber(output)===true||output==='.'||etv==='.'){
            setOutput(Number(output+etv));
            setInput(input.map(x=>{if(input.indexOf(x)==input.length-1){
                return x+etv;
            }
            else{
                return x;}}));  
        }
        else{
            setOutput(Number(etv));  
            setInput([...input,etv]);
        }    
    }

    const handleClickOperator=(event)=>{
        let etv=event.target.value;
       
        if(isNumber(output)===true||output==='.'){//added output as dot so that it doesnt mess the inferred conditions of else statement
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
        }
    }
    
    const handleEqualClick=()=>{
        let inputSlice=input.slice();

        for(let i=0;i<inputSlice.length;i++){
            switch(inputSlice[i]){//must fix so that '.' is accounted for
                case '+':
                case '-':
                case 'x':
                case '/':
                    if(inputSlice[i-1]==null){
                        if(inputSlice[i+1]==='+'||inputSlice[i+1]==='x'||inputSlice[i+1]==='/'){
                            setOutput(turnToOperators(inputSlice[i+1],0,Number(inputSlice[i+2])));
                            setInput([turnToOperators(inputSlice[i+1],0,Number(inputSlice[i+2]))]);
                            i++;
                        }
                        else if(inputSlice[i+1]==='-'){
                            setOutput(turnToOperators(inputSlice[i],0,Number(inputSlice[i+1]+inputSlice[i+2])));
                            setInput([turnToOperators(inputSlice[i],0,Number(inputSlice[i+1]+inputSlice[i+2]))]);
                            i++;
                        }
                        else{
                            setOutput(turnToOperators(inputSlice[i],0,Number(inputSlice[i+1])));
                            setInput([turnToOperators(inputSlice[i],0,Number(inputSlice[i+1]))]);
                        }
                    }
                    else{
                        if(inputSlice[i+1]==='+'||inputSlice[i+1]==='x'||inputSlice[i+1]==='/'){
                            setOutput(turnToOperators(inputSlice[i+1],inputSlice[i-1],Number(inputSlice[i+2])));
                            setInput([turnToOperators(inputSlice[i+1],inputSlice[i-1],Number(inputSlice[i+2]))]);
                               i++;
                        }
                        else if(inputSlice[i+1]==='-'){
                            setOutput(turnToOperators(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1]+inputSlice[i+2])));
                            setInput([turnToOperators(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1]+inputSlice[i+2]))]);
                            i++;
                            }
                        else{
                            setOutput(turnToOperators(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1])));
                            setInput([turnToOperators(inputSlice[i],Number(inputSlice[i-1]),Number(inputSlice[i+1]))]);
                        }
                    }                  
            }
        }
        
    };
   
    const handleAcClick=()=>{
        setInput([]);
        setOutput(0);
       }

    //DEFAULT PROPS ASSIGNMENTS
    Display.defaultProps={
        outputState:output,
        inputState:input,
        handleClick:handleClick
       }

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
                    <button id="zero" className="col-6 btn btn-dark shadow-none rounded-0 border" value={0} onClick={handleClick}>0</button>
                    <button id="decimal" className="col-3 btn btn-secondary shadow-none rounded-0 border" value={'.'} onClick={handleClick}>.</button>
                    <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='} onClick={handleEqualClick}>=</button>
                </div>
            </div>
        </div>
    )
}

//export default connect(mapStateToProps,mapDispatchToProps)(Presentational