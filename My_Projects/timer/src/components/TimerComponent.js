

export default function Timer(props){
    return(
        <div>
            <div className="fa fa-car" id="timer-label">Time remaining</div>

            {props.startedState===true && <div id="time-left" style={{color:'red'}}>{props.sessionLengthState}:{props.timeSecondsState}//{props.timeState}</div>} 
            {props.startedState===false && <div id="time-left">{props.sessionLengthState}:{props.timeSecondsState}//{props.timeState}</div>}

            {props.startedState===true && <button id="start_stop" className="fa fa-pause" style={{color:'red'}} onClick={props.startTimerFunction}></button>}
            {props.startedState===false && <button id="start_stop" className="fa fa-play" onClick={props.startTimerFunction}></button>}

            <button id="reset" className="fa fa-refresh" onClick={props.refreshHandler}></button>
        </div>
    );
}