export default function Timer(props){
    return(
        <div>
            <div className="fa fa-car" id="timer-label">Time remaining</div>
            <div id="time-left">{props.secondsState}</div>  
            <button id="start_stop" className="fa fa-play" onClick={props.timeFunction}></button>
            <button id="reset"></button>
        </div>
    );
}