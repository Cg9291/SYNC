export default function Session(props) {
  return (
    <div id='session' className="time-modifiers">
      <div id="session-label" className="labels">
        Session Length
      </div>
      <button
        id="session-increment"
        className="fa fa-arrow-circle-up increment-buttons settings-buttons "
        onClick={props.sessionHandlerFunction}
      ></button>
      <div id="session-length" className="length-values">{props.sessionLengthState}</div>
      <button
        id="session-decrement"
        className="fa fa-arrow-circle-down decrement-buttons settings-buttons"
        onClick={props.sessionHandlerFunction}
      ></button>
    </div>
  );
}
