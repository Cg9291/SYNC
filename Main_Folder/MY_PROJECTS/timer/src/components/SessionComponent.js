export default function Session(props){
    return(
        <div>
            <div id='session-label'>
                Session<br/>
                Length
            </div>
            <button id="session-increment" className="fa fa-arrow-circle-up" onClick={props.sessionHandlerFunction}></button>
            <div id="session-length">{props.sessionLengthState}</div>
            <button id="session-decrement" className="fa fa-arrow-circle-down" onClick={props.sessionHandlerFunction}></button>
        </div>
    );
}