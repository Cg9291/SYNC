

export default function Timer(props){
    return(
        <div>
            <div className="fa fa-car" id="timer-label">{props.timerLabelState}</div>
            <div id="time-left" style={props.timerColorState}>{props.minutesRendererFunction()}:{props.secondsRendererFunction()}</div> 

            {(props.startedState===true) && <button id="start_stop" className="fa fa-pause" style={props.timerColorState} onClick={props.startTimerFunction}></button>}
            {props.startedState===false && <button id="start_stop" className="fa fa-play" onClick={props.startTimerFunction}>{props.startTimerFunction}</button>}

            <button id="reset" className="fa fa-refresh" onClick={props.refreshHandler}></button>
        </div>
    );
}