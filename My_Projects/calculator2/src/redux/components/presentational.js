import {connect } from "react-redux"
import { useState } from "react";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

export default function Presentational(){
    const [input,setInput]=useState([0]);
    const [calc,setCalc]=useState();
    const [operator,setOperator]=useState();
    const [output,setOutput]=useState();
    const [lastIsOperator,setLastIsOperator]=useState(false);

    let turnToOperators={
        'x':function(a,b){return a*b},
        '+':function(a,b){return a+b},
        '/'(a,b){return a/b},
        '-'(a,b){return a-b}
    };
    
    const handleClick=(event)=>{
        let etg=event.target.value;
        if(input==0){
            if(lastIsOperator===false){
                if(turnToOperators.hasOwnProperty(etg)){
                    setCalc(input);
                    setInput(input.concat(etg));
                    setOperator(turnToOperators[etg]);
                    setLastIsOperator(true);
                }
                else{
                    setInput([etg]);
                }
            }
            else{
                setInput(input.concat(etg));
            }
        }else{
            if(lastIsOperator===false){
                if(turnToOperators.hasOwnProperty(etg)){
                    setCalc(input);
                    setInput(input.concat(etg));
                    setOperator(turnToOperators[etg]);
                    setLastIsOperator(true);
                }
                else{
                    setInput(input.concat(etg));
                }
            }
            else{
                setInput(input.concat(etg));
        }}        
    };

    const handleEqualClick=()=>{
     setOutput(operator(1,2));
    };

    const handleAcClick=()=>{
        setInput([]);
    }

    return(
        <div>
            <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
                <div id="display" className="row-cols-4 justify-content text-light" onClick={handleClick}>
                   {input} //{output}
                </div>
                <div className="row-cols-4 justify-content">
                    <button id='clear' className="col-6 btn btn-danger shadow-none rounded-0 border" value={'AC'} onClick={handleAcClick}>AC</button>
                    <button id="divide" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'/'} onClick={handleClick}>/</button>
                    <button id="multiply" className="col-3 btn btn-primary shadow-none rounded-0 border" value='x' onClick={handleClick}>x</button>
                </div>
                <div className="row-cols-4  justify-content">
                    <button id="seven" className="col-3 btn btn-dark shadow-none rounded-0 border" value={7} onClick={handleClick}>7</button>
                    <button id="eight" className="col-3 btn btn-dark shadow-none rounded-0 border" value={8} onClick={handleClick}>8</button>
                    <button id="nine" className="col-3 btn btn-dark shadow-none rounded-0 border" value={9} onClick={handleClick}>9</button>
                    <button id="subtract" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'-'} onClick={handleClick}>-</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button id="4" className="col-3 btn btn-dark shadow-none rounded-0 border" value={4} onClick={handleClick}>4</button>
                    <button id="5" className="col-3 btn btn-dark shadow-none rounded-0 border" value={5} onClick={handleClick}>5</button>
                    <button id="6" className="col-3 btn btn-dark shadow-none rounded-0 border" value={6} onClick={handleClick}>6</button>
                    <button id="add" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'+'} onClick={handleClick}>+</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button id="1" className="col-3 btn btn-dark shadow-none rounded-0 border" value={1} onClick={handleClick}>1</button>
                    <button id="2" className="col-3 btn btn-dark shadow-none rounded-0 border" value={2} onClick={handleClick}>2</button>
                    <button id="3" className="col-3 btn btn-dark shadow-none rounded-0 border" value={3} onClick={handleClick}>3</button>
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

//export default connect(mapStateToProps,mapDispatchToProps)(Presentational)