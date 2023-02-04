//MUST REPLACE KICK!!! (FILE DOESNT WORK)
//OPTIONAL IMPROVEMENTS:(1-CHANGE KEYS COLOR WHEN PRESSED/CLICKED 2-ADD WINDOWS FOR LABEL AND POWER ON/OFF 3-FIX UNEVEN VOLUME)
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton.js";
import "../buttons.scss";
import clap_Sound from "../audio/clap.mp3";
import closed_HH_Sound from "../audio/closed-HH.mp3";
import heater_1_Sound from "../audio/heater-1.mp3";
import heater_2_Sound from "../audio/heater-2.mp3";
import heater_3_Sound from "../audio/heater-3.mp3";
import heater_4_Sound from "../audio/heater-4.mp3";
import kick_n_hat_Sound from "../audio/kick_n_Hat.mp3";
import kick_Sound from "../audio/kick.mp3";
import open_HH_Sound from "../audio/open - HH.mp3";

export default function Buttons() {
  const buttonRefs = useRef([]); //using refcallback to target specific node/element

  const Q = useRef();
  const W = useRef();
  const E = useRef();
  const A = useRef();
  const S = useRef();
  const D = useRef();
  const Z = useRef();
  const X = useRef();
  const C = useRef();

  const [playing, setPlaying] = useState();
  const [toggle, setToggle] = useState(true);
  const [volume, setVolume] = useState(50);
  const [indicatorLightColor, setIndicatorLightColor] = useState("black");

  function playSound(event) {
    if (toggle) {
      event.target.firstElementChild.play();
      event.target.firstElementChild.volume = volume / 100;
      setPlaying(event.target.id);
    }
  }

  function handleKeyPress(event) {
    const btnDefaultClass = buttonRefs.current.Q.className;
    if (event.key.toUpperCase() === "Q") {
      Q.current.play();
      Q.current.volume = volume / 100;
      buttonRefs.current.Q.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.Q.className = btnDefaultClass;
      }, 100);
      setPlaying(Q.current.parentNode.id);
    } else if (event.key.toUpperCase() === "W") {
      W.current.play();
      W.current.volume = volume / 100;
      buttonRefs.current.W.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.W.className = btnDefaultClass;
      }, 100);
      setPlaying(W.current.parentNode.id);
    } else if (event.key.toUpperCase() === "E") {
      E.current.play();
      E.current.volume = volume / 100;
      buttonRefs.current.E.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.E.className = btnDefaultClass;
      }, 100);
      setPlaying(E.current.parentNode.id);
    } else if (event.key.toUpperCase() === "A") {
      A.current.play();
      A.current.volume = volume / 100;
      buttonRefs.current.A.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.A.className = btnDefaultClass;
      }, 100);
      setPlaying(A.current.parentNode.id);
    } else if (event.key.toUpperCase() === "S") {
      S.current.play();
      S.current.volume = volume / 100;
      buttonRefs.current.S.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.S.className = btnDefaultClass;
      }, 100);
      setPlaying(S.current.parentNode.id);
    } else if (event.key.toUpperCase() === "D") {
      D.current.play();
      D.current.volume = volume / 100;
      buttonRefs.current.D.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.D.className = btnDefaultClass;
      }, 100);
      setPlaying(D.current.parentNode.id);
    } else if (event.key.toUpperCase() === "Z") {
      Z.current.play();
      Z.current.volume = volume / 100;
      buttonRefs.current.Z.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.Z.className = btnDefaultClass;
      }, 100);
      setPlaying(Z.current.parentNode.id);
    } else if (event.key.toUpperCase() === "X") {
      X.current.play();
      X.current.volume = volume / 100;
      buttonRefs.current.X.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.X.className = btnDefaultClass;
      }, 100);
      setPlaying(X.current.parentNode.id);
    } else if (event.key.toUpperCase() === "C") {
      C.current.play();
      C.current.volume = volume / 100;
      buttonRefs.current.C.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.C.className = btnDefaultClass;
      }, 100);
      setPlaying(C.current.parentNode.id);
    }
  }

  useEffect(() => {
    setPlaying(volume);
  }, [volume]);

  useLayoutEffect(() => {
    if (!toggle) {
      setPlaying();
      setIndicatorLightColor("bg-dark");
    } else {
      setIndicatorLightColor("red");
    }
  }, [toggle]);

  useLayoutEffect(() => {
    if (toggle) {
      window.addEventListener("keypress", handleKeyPress, false);
    }
    return () => window.removeEventListener("keypress", handleKeyPress, false);
  }, [toggle, volume]);

  function changeVolume(event) {
    setVolume(event.target.value);
  }

  return (
    <div className="container-fluid justify-content-center align-items-center col-6 m-auto">
      <div className="row m-auto">
        <div
          id="pad"
          className="row col-6 bg-dark" /*style={{border:'solid blue'}}*/
        >
          <div className="row justify-content-center">
            <button
              id="Clap"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.Q = ref)}
              onClick={playSound}
              //onKeyDown={()=>buttonRefs.qParent.style.color='red'}
              //    onKeyDown={}qqa
              style={{ boxShadow: "2px 5px red" }}
            >
              Q
              <audio
                src={clap_Sound}
                className="clip"
                id="Q"
                ref={Q}
              >
                Your browser does not support this type of file.
              </audio>
            </button>

            <button
              id="Closed HH"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.W = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px blue" }}
            >
              W
              <audio
                src={closed_HH_Sound}
                className="clip"
                id="W"
                ref={W}
              >
                Your browser does not support this type of file.
              </audio>
            </button>

            <button
              id="Heater 1"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.E = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px green" }}
            >
              E
              <audio
                src={heater_1_Sound}
                className="clip"
                id="E"
                ref={E}
              >
                Your browser does not support this type of file.
              </audio>
            </button>
          </div>

          <div className="row justify-content-center">
            <button
              id="Heater 2"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.A = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px purple" }}
            >
              A
              <audio
                src={heater_2_Sound}
                className="clip"
                id="A"
                ref={A}
              >
                Your browser does not support this type of file.
              </audio>
            </button>

            <button
              id="Heater 3"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.S = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px magenta" }}
            >
              S
              <audio
                src={heater_3_Sound}
                className="clip"
                id="S"
                ref={S}
              >
                Your browser does not support this type of file.
              </audio>
            </button>

            <button
              id="Heater 4"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.D = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px orange" }}
            >
              D
              <audio
                src={heater_4_Sound}
                className="clip"
                id="D"
                ref={D}
              >
                Your browser does not support this type of file.
              </audio>
            </button>
          </div>

          <div className="row justify-content-center">
            <button
              id="Kick n'Hat"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.Z = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px turquoise" }}
            >
              Z
              <audio
                src={kick_n_hat_Sound}
                className="clip"
                id="Z"
                ref={Z}
              >
                Your browser does not support this type of file.
              </audio>
            </button>

            <button
              id="Kick"
              className="drum-pad col-4 btn btn-dark m-2"
              onClick={playSound}
              ref={ref => (buttonRefs.current.X = ref)}
              style={{ boxShadow: "2px 5px yellow" }}
            >
              X
              <audio
                src={kick_Sound}
                className="clip"
                id="X"
                ref={X}
              >
                Your browser does not support this type of file.
              </audio>
            </button>

            <button
              id="Open HH"
              className="drum-pad col-4 btn btn-dark m-2"
              ref={ref => (buttonRefs.current.C = ref)}
              onClick={playSound}
              style={{ boxShadow: "2px 5px yellowgreen" }}
            >
              C
              <audio
                src={open_HH_Sound}
                className="clip"
                id="C"
                ref={C}
              >
                Your browser does not support this type of file.
              </audio>
            </button>
          </div>
        </div>
        <div
          id="controls"
          height="50px"
          className="row col-6 mx-0 p-0 bg-dark"
        >
          <div className="d-flex flex-column col-10 mx-auto p-0 bg-dark">
            <div className="row h-25 col-12 m-0 p-0 flex-grow-1">
              <div className="d-flex justify-content-between h-25 col-12 m-0 p-0">
                <ToggleButton
                  toggle={toggle}
                  setToggle={setToggle}
                  playing={playing}
                  setPlaying={setPlaying}
                />

                <svg
                  viewBox="0 0 100 100"
                  className="mt-1 me-2"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="50"
                    fill={indicatorLightColor}
                  />
                </svg>
              </div>
            </div>
            {/*<div className="d-flex h-75 m-0 p-0  justify-content-center align-items-start bg-primary">*/}

            <div
              id="display"
              className="row d-flex  m-0 p-0  justify-content-center bg-warning col-6 border border-dark fs-3 fw-bold align-items-center mx-auto my-auto flex-grow"
              style={{ minHeight: "65px" /*alignSelf:"center"*/ }}
            >
              {playing}
            </div>

            <div className="row h-25 flex-grow-1  col-12 m-0 p-0"></div>

            {/*</div>*/}
          </div>
          <div className="col-2 d-flex m-0 p-0">
            <input
              type="range"
              min={0}
              max={100}
              className="slider w-100 p-0 m-0"
              onChange={changeVolume}
              style={{ transform: "rotate(-90deg)" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
