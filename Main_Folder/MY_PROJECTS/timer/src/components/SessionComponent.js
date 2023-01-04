export default function Session(props){
    return(
        <div>
            <div id='session-label' className="labels">
                Session<br/>
                Length
            </div>
            <button id="session-increment" className="fa fa-arrow-circle-up settings-buttons" onClick={props.sessionHandlerFunction}></button>
            <div id="session-length"  className="settings-buttons">{props.sessionLengthState}</div>
            <button id="session-decrement" className="fa fa-arrow-circle-down settings-buttons" onClick={props.sessionHandlerFunction}></button>
        </div>
    );
}