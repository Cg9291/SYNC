import React from "react";
import beepSound from "../audio/beep.mp3";

export const Timer = React.forwardRef((props, beep) => (
  <>
    <div id="start-pause-refresh-buttons">
      <>
        {props.startedState === true && (
          <button
            id="start_stop"
            className="fa fa-pause start-refresh-buttons"
            style={props.timerColorState}
            onClick={props.startTimerFunction}
          ></button>
        )}
        {props.startedState === false && (
          <button
            id="start_stop start-refresh-buttons">
              <div className="fa fa-play " onClick={props.startTimerFunction}
          >
            {props.startTimerFunction}
            </div>
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
