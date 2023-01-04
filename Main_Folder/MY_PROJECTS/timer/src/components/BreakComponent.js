export default function Break(props){
    return(
        <div>
            <div id='break-label' className="labels">
                Break <br/>
                Length
            </div>
            <button id="break-increment" className="fa fa-arrow-circle-up settings-buttons" onClick={props.breakHandlerFunction}></button>
            <div id="break-length" className="settings-buttons">{props.breakLengthState}</div>
            <button id="break-decrement" className="fa fa-arrow-circle-down settings-buttons" onClick={props.breakHandlerFunction}></button> 
        </div>
    );
}