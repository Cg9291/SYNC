import { Timer } from "./TimerComponent.js";

export default function Circle(props) {
  return (
    <div id="circle" >
      <div id="timer-label">{props.timerLabelState}</div>
      <div id="time-left" style={props.timerColorState}>
        {props.minutesRendererFunction()}:{props.secondsRendererFunction()}
      </div>
      <Timer/>
    </div>
  );
}
