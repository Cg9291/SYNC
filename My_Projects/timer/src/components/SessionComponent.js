export default function Session(props){
    return(
        <div>
            <div id='session-label'>
                Session Length
            </div>
            <button id="session-increment" className="fa fa-arrow-circle-up" onClick={props.sessionHandler}></button>
            <div id="session-length">{props.sessionLengthState}</div>
            <button id="session-decrement" className="fa fa-arrow-circle-down" onClick={props.sessionHandler}></button>
        </div>
    );
}