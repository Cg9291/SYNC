export default function Display(props){
    if (props.outPut===0){
        return(
            <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light" onClick={props.handleClick}>
                {props.outputState}/{props.tallyState}/
            </div>
         )
    }
    else{
        return(
            <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column align-items-center" onClick={props.handleClick}>
              <div>output={props.outputState}</div>
              <div>input={props.inputState}</div>
              <div>tally={props.tallyState}</div>
              <div>operator={props.operatorState}</div>
              <div>result={props.resultState}</div>
              <div></div>///
            </div>
        )
    }
}