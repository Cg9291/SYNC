export default function Display(props){
    if (props.outPut===0){
        return(
            <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light" >
                {props.outputState}
                {props.testState}
            </div>
         )
    }
    else{
        return(
            <div>
              <div /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column align-items-center" >
              </div>  
                <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column align-items-center" >
              <div>{props.outputState}</div>
              {/*<div>{props.inputState}</div>*/}
            </div>
            </div>
        )
    }
}