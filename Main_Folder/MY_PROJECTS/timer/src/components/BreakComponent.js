export default function Break(props){
    return(
        <div>
            <div id='break-label'>
                Break <br/>
                Length
            </div>
            <button id="break-increment" className="fa fa-arrow-circle-up" onClick={props.breakHandlerFunction}></button>
            <div id="break-length">{props.breakLengthState}</div>
            <button id="break-decrement" className="fa fa-arrow-circle-down" onClick={props.breakHandlerFunction}></button> 
        </div>
    );
}