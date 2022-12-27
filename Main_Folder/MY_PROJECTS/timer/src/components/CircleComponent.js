export default function Circle(props){
    return(
        <div id="circle">
            <div className="fa fa-car" id="timer-label">
                {props.timerLabelState}
            </div>
            <div id="time-left" style={props.timerColorState}>
                {props.minutesRendererFunction()}:{props.secondsRendererFunction()}
            </div> 
        </div>
    )
};