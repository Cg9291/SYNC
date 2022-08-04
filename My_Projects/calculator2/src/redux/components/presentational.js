import {connect } from "react-redux"
import { useState } from "react";
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"
//FIGURE OUT HOW TO SELECT ALL ELEMENTS OF A CLASS/TYPE AND APPLY A FN/EVENTHANDLER TO THEM(REACT WAY)

export default function Presentational(){
    const [input,setInput]=useState([0]);
    const [inputLength,setInputLength]=useState(0);//index
    const [operatorsList,setOperatorsList]=useState(['+','-','x','/']);
    const [calc,setCalc]=useState([]);
    const [operator,setOperator]=useState();
    const [output,setOutput]=useState();
    const [lastIsOperator,setLastIsOperator]=useState(false);

    let turnToOperators=(op,a,b)=>{  
        return op=='x'?a*b
        :op=='+'?a+b
        :op=='/'?a/b
        :op=='-'?a-b
        :'sign not recognized'
    };

    const handleClick=(event)=>{
    let etg=event.target.value;
        switch(input.length){
            case 1:
                switch(input[0]){
                    case 0:
                        setInput([etg]);
                        break;
                    default:
                        setInput(input.concat(etg));
                };
                
            
        }
    }


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

    const handleEqualClick=()=>{
     setOutput(turnToOperators(operator,Number(calc[0]),Number(calc[2])))
    };

    const handleAcClick=()=>{
        setInput([]);
        setCalc([]);
        setOutput([]);
        setOperator();
    }

    return(
        <div>
            <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
                <div id="display" className="row-cols-4 justify-content text-light" onClick={handleClick}>
                   {input}/{operator}/{output}
                </div>
                <div className="row-cols-4 justify-content">
                    <button id='clear' className="col-6 btn btn-danger shadow-none rounded-0 border" value={'AC'} onClick={handleAcClick}>AC</button>
                    <button id="divide" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'/'} onClick={handleClick}>/</button>
                    <button id="multiply" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'x'} onClick={handleClick}>x</button>
                </div>
                <div className="row-cols-4  justify-content">
                    <button id="seven" className="col-3 btn btn-dark shadow-none rounded-0 border" value='7' onClick={handleClick}>7</button>
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