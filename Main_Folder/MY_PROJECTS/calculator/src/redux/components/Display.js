export default function Display(props){
        return(
            <div>
              <div /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column     
                align-items-center">
              </div>  
              <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex  
                flex-column align-items-center" >
                <div>{props.inputState}</div>
                <div>{props.testState}</div>
              {/*<div>{props.inputState}</div>*/}
            </div>
            </div>
        )
    }
