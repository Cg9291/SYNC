import { forwardRef } from "react"

 export const Keys=forwardRef((props,btnRef)=>(
        <div>
            <div className="row-cols-4 justify-content">
                <button id='clear' className="col-6 btn btn-danger shadow-none rounded-0 border" value={'AC'} onClick={props.handleAcClick}>AC</button>
                <button id="divide" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'/'} onClick={props.handleClick}>/</button>
                <button id="multiply" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'x'} onClick={props.handleClick}>x</button>
            </div>
            <div className="row-cols-4  justify-content">
                <button id="seven" ref={btnRef} className="col-3 btn btn-dark shadow-none rounded-0 border" value={7} onClick={props.handleClick}>7</button>
                <button id="eight" ref={btnRef} className="col-3 btn btn-dark shadow-none rounded-0 border" value={8} onClick={props.handleClick}>8</button>
                <button id="nine" ref={btnRef} className="col-3 btn btn-dark shadow-none rounded-0 border" value={9} onClick={props.handleClick} >9</button>
                <button id="subtract" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'-'} onClick={props.handleClick}>-</button>
            </div>
            <div className="row-cols-4 justify-content">
                <button id="four" className="col-3 btn btn-dark shadow-none rounded-0 border" value={4} onClick={props.handleClick}>4</button>
                <button id="five" className="col-3 btn btn-dark shadow-none rounded-0 border" value={5} onClick={props.handleClick}>5</button>
                <button id="six" className="col-3 btn btn-dark shadow-none rounded-0 border" value={6} onClick={props.handleClick}>6</button>
                <button id="add" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'+'} onClick={props.handleClick}>+</button>
            </div>
            <div className="row-cols-4 justify-content">
                <button id="one" className="col-3 btn btn-dark shadow-none rounded-0 border" value={1} onClick={props.handleClick}>1</button>
                <button id="two" className="col-3 btn btn-dark shadow-none rounded-0 border" value={2} onClick={props.handleClick}>2</button>
                <button id="three" className="col-3 btn btn-dark shadow-none rounded-0 border" value={3} onClick={props.handleClick}>3</button>
                <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='} onClick={props.handleEqualClick}>=</button>
            </div>
            <div className="row-cols-4 justify-content">
                <button id="zero" className="col-6 btn btn-dark shadow-none rounded-0 border" value={0} onClick={props.handleClick}>0</button>
                <button id="decimal" className="col-3 btn btn-secondary shadow-none rounded-0 border" value={'.'} onClick={props.handleClick}>.</button>
                <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='} onClick={props.handleEqualClick}>=</button>
            </div>
        </div>
    )
 )