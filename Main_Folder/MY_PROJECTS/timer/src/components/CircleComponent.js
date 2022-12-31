export default function Circle(props) {
  return (
    <div >
      <div id="timer-label">{props.timerLabelState}</div>
      <div id="time-left" style={props.timerColorState}>
        {props.minutesRendererFunction()}:{props.secondsRendererFunction()}
      </div>
      <div id="test-area">
        <div
          className="test"
          style={{ backgroundColor: "red", gridArea: "ar1" }}
        >
          uno
        </div>
        <div
          className="test"
          style={{ backgroundColor: "green", gridArea: "ar2" }}
        >
          dos
        </div>
        <div
          className="test"
          style={{ backgroundColor: "blue", gridArea: "ar3" }}
        >
          tres
        </div>
        <div
          className="test"
          style={{ backgroundColor: "yellow", gridArea: "ar4" }}
        >
          quatro
        </div>
      </div>
    </div>
  );
}
