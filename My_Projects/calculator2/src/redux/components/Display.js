export default function Display(props){
    if (props.outPut===0){
        return(
            <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light" onClick={props.handleClick}>
                {props.outputState}/{props.tallyState}
            </div>
         )
    }
    else{
        return(
            <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light" onClick={props.handleClick}>
                {props.outputState}/{props.inputState}/{props.tallyState}
            </div>
        )
    }
}