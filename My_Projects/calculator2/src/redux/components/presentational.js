import {connect } from "react-redux"
//import { mapStateToProps,mapDispatchToProps } from "react-redux"
//import { mapStateToProps } from "../../../../random-quote-gen/src/redux/mappings"

export default function Presentational(){
    
    return(
        <div>
            <div className="container col-3 px-1 pb-1 pt-4 justify-content-center justify-self-center bg-dark border border-primary">
                <div id="display" className="row-cols-4 justify-content text-light">
                    PLACEHOLDER FOR RESULT
                </div>
                <div className="row-cols-4 justify-content">
                    <button id='clear' className="col-6 btn btn-danger shadow-none rounded-0 border" value={'AC'}>AC</button>
                    <button id="divide" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'/'}>/</button>
                    <button id="multiply" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'x'}>x</button>
                </div>
                <div className="row-cols-4  justify-content">
                    <button id="seven" className="col-3 btn btn-dark shadow-none rounded-0 border" value={7}>7</button>
                    <button id="eight" className="col-3 btn btn-dark shadow-none rounded-0 border" value={8}>8</button>
                    <button id="nine" className="col-3 btn btn-dark shadow-none rounded-0 border" value={9}>9</button>
                    <button id="subtract" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'-'}>-</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button id="4" className="col-3 btn btn-dark shadow-none rounded-0 border" value={4}>4</button>
                    <button id="5" className="col-3 btn btn-dark shadow-none rounded-0 border" value={5}>5</button>
                    <button id="6" className="col-3 btn btn-dark shadow-none rounded-0 border" value={6}>6</button>
                    <button id="add" className="col-3 btn btn-primary shadow-none rounded-0 border" value={'+'}>+</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button id="1" className="col-3 btn btn-dark shadow-none rounded-0 border">1</button>
                    <button id="2" className="col-3 btn btn-dark shadow-none rounded-0 border">2</button>
                    <button id="3" className="col-3 btn btn-dark shadow-none rounded-0 border">3</button>
                    <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='}>=</button>
                </div>
                <div className="row-cols-4 justify-content">
                    <button className="col-6 btn btn-dark shadow-none rounded-0 border" value={0}>0</button>
                    <button id="decimal" className="col-3 btn btn-secondary shadow-none rounded-0 border" value={'.'}>.</button>
                    <button id="equals" className="col-3 btn btn-success shadow-none rounded-0 border" value={'='}>=</button>
                </div>
            </div>
        </div>
    )
}

//export default connect(mapStateToProps,mapDispatchToProps)(Presentational)