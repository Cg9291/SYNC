export default function Break(props){
    return(
        <div id='break' className="time-modifiers">
            <div id='break-label' className="labels">
                Break Length
            </div>
<<<<<<< HEAD
            <button id="break-increment" className="fa fa-arrow-circle-up settings-buttons" onClick={props.breakHandlerFunction}></button>
            <div id="break-length">{props.breakLengthState}</div>
            <button id="break-decrement" className="fa fa-arrow-circle-down settings-buttons" onClick={props.breakHandlerFunction}></button> 
=======
            <button id="break-increment" className="fa fa-arrow-circle-up settings-buttons increment-buttons" onClick={props.breakHandlerFunction}></button>
            <div id="break-length" className="length-values">{props.breakLengthState}</div>
            <button id="break-decrement" className="fa fa-arrow-circle-down settings-buttons decrement-buttons" onClick={props.breakHandlerFunction}></button> 
>>>>>>> c5ff90e26140a8fcfdbd6aff901954b96155d751
        </div>
    );
}