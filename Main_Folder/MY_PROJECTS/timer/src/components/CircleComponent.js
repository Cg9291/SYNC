export default function Circle(props) {
  return (
    <div >
      <div id="timer-label">{props.timerLabelState}</div>
      <div id="time-left" style={props.timerColorState}>
        {props.minutesRendererFunction()}:{props.secondsRendererFunction()}
      </div>
    </div>
  );
}
