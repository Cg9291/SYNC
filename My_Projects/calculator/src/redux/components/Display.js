export default function Display(props){
    if (props.outPut===0){
        return(
            <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light" onClick={props.handleClick}>
                {props.outputState}
                {props.testState}
            </div>
         )
    }
    else{
        return(
            <div>
              <div /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column        align-items-center" onClick={props.handleClick}>
              </div>  
                <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column align-items-center" onClick={props.handleClick}>
              <div>{props.outputState}</div>
              {/*<div>{props.inputState}</div>*/}
            </div>
            </div>
        )
    }
}