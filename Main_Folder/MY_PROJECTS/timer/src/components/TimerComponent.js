import React from "react";
import beepSound from "../audio/beep.mp3";

export const Timer = React.forwardRef((props, beep) => (
  <>
    <div id="start-pause-refresh-buttons">
      <>
        {props.startedState === true && (
          <button
            id="start_stop"
            className="start-refresh-buttons"
            onClick={props.startTimerFunction}
          >
            <i className="fa fa-pause" style={props.timerColorState}></i>
          </button>
        )}
        {props.startedState === false && (
          <button
            id="start_stop"
            className="start-refresh-buttons"
            onClick={props.startTimerFunction}
          >
            <i className="fa fa-play " style={props.timerColorState}></i>
          </button>
        )}
      </>
      <button
        id="reset"
        className="fa fa-refresh start-refresh-buttons"
        onClick={props.refreshHandler}
      ></button>
    </div>
    <audio id="beep" ref={beep}>
      <source src={beepSound} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </>
));
