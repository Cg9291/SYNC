//MUST REPLACE KICK!!! (FILE DOESNT WORK)
//OPTIONAL IMPROVEMENTS:(1-CHANGE KEYS COLOR WHEN PRESSED/CLICKED 2-ADD WINDOWS FOR LABEL AND POWER ON/OFF 3-FIX UNEVEN VOLUME)
/*had to convert Midnight Sillage Kit (logic macbook sounds) from aif to mp3 using online converter*/

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton.js";
import PadButtons from "./PadButtons.js";
import Vinyl from "./Vinyl.js";
//import "../buttons.scss";
import clap_Sound from "../audio/basic sounds/clap.mp3";
import closed_HH_Sound from "../audio/basic sounds/closed-HH.mp3";
import heater_1_Sound from "../audio/basic sounds/heater-1.mp3";
import heater_2_Sound from "../audio/basic sounds/heater-2.mp3";
import heater_3_Sound from "../audio/basic sounds/heater-3.mp3";
import heater_4_Sound from "../audio/basic sounds/heater-4.mp3";
import kick_n_hat_Sound from "../audio/basic sounds/kick_n_Hat.mp3";
import kick_Sound from "../audio/basic sounds/kick.mp3";
import open_HH_Sound from "../audio/basic sounds/open - HH.mp3";
import sax from "../audio/Midnight Sillage Kit/Sax_Midnight_Sillage.mp3";
import electric_guitar_01 from "../audio/Midnight Sillage Kit/Electric Guitar 01 - Midnight Sillage.mp3";
import kick from "../audio/Midnight Sillage Kit/Electric Piano 01 - Midnight Sillage.mp3";

export default function Buttons() {
  const buttonRefs = useRef([]); //using REFCALLBACK to target specific node/element

  const audioRefs = useRef([]);

  const [playing, setPlaying] = useState();
  const [toggle, setToggle] = useState(true);
  const [volume, setVolume] = useState(50);
  const [indicatorLightColor, setIndicatorLightColor] = useState("black");

   function playSound(event) {
    if (toggle) {
      audioRefs.current.Q.play();
      audioRefs.current.Q.volume = volume / 100;
      /* event.target.firstElementChild.play();
      event.target.firstElementChild.volume = volume / 100;
      setPlaying(event.target.id); */
    }
  }

  function handleKeyPress(event) {
    const btnDefaultClass = buttonRefs.current.Q.className;
    if (event.key.toUpperCase() === "Q") {
      audioRefs.current.Q.play();
      audioRefs.current.Q.volume = volume / 100;
      buttonRefs.current.Q.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.Q.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.Q.id);
    } else if (event.key.toUpperCase() === "W") {
      audioRefs.current.W.play();
      audioRefs.current.W.volume = volume / 100;
      buttonRefs.current.W.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.W.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.W.id);
    } else if (event.key.toUpperCase() === "E") {
      audioRefs.current.E.play();
      audioRefs.current.E.volume = volume / 100;
      buttonRefs.current.E.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.E.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.E.id);
    } else if (event.key.toUpperCase() === "R") {
      audioRefs.current.R.play();
      audioRefs.current.R.volume = volume / 100;
      buttonRefs.current.R.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.R.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.R.id);
    } else if (event.key.toUpperCase() === "A") {
      audioRefs.current.A.play();
      audioRefs.current.A.volume = volume / 100;
      buttonRefs.current.A.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.A.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.A.id);
    } else if (event.key.toUpperCase() === "S") {
      audioRefs.current.S.play();
      audioRefs.current.S.volume = volume / 100;
      buttonRefs.current.S.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.S.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.S.id);
    } else if (event.key.toUpperCase() === "D") {
      audioRefs.current.D.play();
      audioRefs.current.D.volume = volume / 100;
      buttonRefs.current.D.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.D.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.D.id);
    } else if (event.key.toUpperCase() === "F") {
      audioRefs.current.F.play();
      audioRefs.current.F.volume = volume / 100;
      buttonRefs.current.F.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.F.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.F.id);
    } else if (event.key.toUpperCase() === "Z") {
      audioRefs.current.Z.play();
      audioRefs.current.Z.volume = volume / 100;
      buttonRefs.current.Z.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.Z.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.Z.id);
    } else if (event.key.toUpperCase() === "X") {
      audioRefs.current.X.play();
      audioRefs.current.X = volume / 100;
      buttonRefs.current.X.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.X.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.X.id);
    } else if (event.key.toUpperCase() === "C") {
      audioRefs.current.C.play();
      audioRefs.current.C = volume / 100;
      buttonRefs.current.C.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.C.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.C.id);
    } else if (event.key.toUpperCase() === "V") {
      audioRefs.current.V.play();
      audioRefs.current.V.volume = volume / 100;
      buttonRefs.current.V.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.V.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.V.id);
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

  PadButtons.defaultProps={
    // playSound:playSound,
    buttonRefs:buttonRefs,
    audioRefs:audioRefs
  }



  return (
    <div
      id="controls"
      /*  height="50px" */
      className=" vh-100 row d-flex flex-column mx-0 p-0 bg-black align-items-evenly "
    >
      <div
        id="indicators-row"
        className="row mw-100 mt-2 m-0 p-0 mb-2 justify-content-between"
      >
        <svg
          viewBox="0 0 100 100"
          className=" h-50  mt-3 ms-3 justify-self-start "
          style={{ width: "10%" }}
        >
          <circle
            cx="50"
            cy="50"
            r="90"
            fill={indicatorLightColor}
          />
        </svg>

        <ToggleButton
          toggle={toggle}
          setToggle={setToggle}
          playing={playing}
          setPlaying={setPlaying}
        />
      </div>
      {/* <div className="d-flex flex-column col-10 mx-auto p-0 bg-dark">
              <div className="row h-25 col-12 m-0 p-0 flex-grow-1">
                <div className="d-flex justify-content-between h-25 col-12 m-0 p-0"></div>
              </div>
              {/*<div className="d-flex h-75 m-0 p-0  justify-content-center align-items-start bg-primary">
            </div> */}
      <div
        id="pad"
        className="container-fluid d-flex flex-column justify-content-center align-items-center h-50 mt-5" /*style={{border:'solid blue'}}*/
      >
        <div className="row pad-row">
          <PadButtons
            id="tbd"
            keyid="Q"
            boxshadowcolor="red"
          />
          <PadButtons
            id="tbd"
            keyid="W"
            boxshadowcolor="blue"
          />
          <PadButtons
            id="tbd"
            keyid="E"
            boxshadowcolor="green"
          />
          <PadButtons
            id="tbd"
            keyid="R"
            boxshadowcolor="lightgreen"
          />
          {/* <button
            id="Clap"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.Q = ref)}
            onClick={playSound}
            //onKeyDown={()=>buttonRefs.qParent.style.color='red'}
            //    onKeyDown={}qqa
            style={{ boxShadow: "2px 5px red" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className=""
            >
              <text
                x="34.5"
                y="66.5"
                fill="red"
                textLength="90"
                lengthAdjust="spacing"
                className="p-0 m-0"
                // height="80px"
                // width="50px"
              >
                Q
              </text>
            </svg>

            <audio
              src={sax}
              className="clip"
              id="Q"
              ref={ref => (audioRefs.current.Q = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button> */}

          {/* <button
            id="Closed HH"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.W = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px blue" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              fontSize="50"
              className=""
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                W
              </text>
            </svg>
            <audio
              src={kick}
              className="clip"
              id="W"
              ref={ref => (audioRefs.current.W = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>

          <button
            id="Heater 1"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.E = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px green" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                E
              </text>
            </svg>
            <audio
              src={heater_1_Sound}
              className="clip"
              id="E"
              ref={ref => (audioRefs.current.E = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>

          <button
            id="#"
            className="btn drum-btn btn-dark p-0 "
            ref={ref => (buttonRefs.current.R = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px green" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="39"
                y="66.5"
                className="p-0 m-0"
              >
                R
              </text>
            </svg>
            <audio
              src={heater_1_Sound}
              className="clip"
              id="R"
              ref={ref => (audioRefs.current.R = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>*/}
        </div>

        <div className="row pad-row">
          <PadButtons
            id="tbd"
            keyid="A"
            boxshadowcolor="purple"
          />
          <PadButtons
            id="tbd"
            keyid="S"
            boxshadowcolor="brown"
          />
          <PadButtons
            id="tbd"
            keyid="D"
            boxshadowcolor="orange"
          />
          <PadButtons
            id="tbd"
            keyid="F"
            boxshadowcolor="lightgreen"
          />
          {/* <button
            id="Heater 2"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.A = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px purple" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                A
              </text>
            </svg>
            <audio
              src={heater_2_Sound}
              className="clip"
              id="A"
              ref={ref => (audioRefs.current.A = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>

          <button
            id="Heater 3"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.S = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px magenta" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                S
              </text>
            </svg>
            <audio
              src={heater_3_Sound}
              className="clip"
              id="S"
              ref={ref => (audioRefs.current.S = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>

          <button
            id="Heater 4"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.D = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px orange" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                D
              </text>
            </svg>
            <audio
              src={heater_4_Sound}
              className="clip"
              id="D"
              ref={ref => (audioRefs.current.D = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>
          <button
            id="#"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.F = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px green" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                F
              </text>
            </svg>
            <audio
              src={heater_1_Sound}
              className="clip"
              id="F"
              ref={ref => (audioRefs.current.F = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button> */}
        </div>

        <div className="row pad-row">
          <PadButtons
            id="tbd"
            keyid="Z"
            boxshadowcolor="turquoise"
          />
          <PadButtons
            id="tbd"
            keyid="X"
            boxshadowcolor="yellow"
          />
          <PadButtons
            id="tbd"
            keyid="C"
            boxshadowcolor="white"
          />
          <PadButtons
            id="tbd"
            keyid="V"
            boxshadowcolor="lightgreen"
          />
          {/* <button
            id="Kick n'Hat"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.Z = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px turquoise" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                Z
              </text>
            </svg>
            <audio
              src={kick_n_hat_Sound}
              className="clip"
              id="Z"
              ref={ref => (audioRefs.current.Z = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>

          <button
            id="Kick"
            className="btn drum-btn btn-dark p-0"
            onClick={playSound}
            ref={ref => (buttonRefs.current.X = ref)}
            style={{ boxShadow: "2px 5px yellow" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                X
              </text>
            </svg>
            <audio
              src={kick_Sound}
              className="clip"
              id="X"
              ref={ref => (audioRefs.current.X = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>

          <button
            id="Open HH"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.C = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px yellowgreen" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                C
              </text>
            </svg>
            <audio
              src={open_HH_Sound}
              className="clip"
              id="C"
              ref={ref => (audioRefs.current.C = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button>
          <button
            id="#"
            className="btn drum-btn btn-dark p-0"
            ref={ref => (buttonRefs.current.V = ref)}
            onClick={playSound}
            style={{ boxShadow: "2px 5px green" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              className="d-flex justify-content-center align-items-center m-0 p-0 "
            >
              <text
                x="34.5"
                y="66.5"
                className="p-0 m-0"
              >
                V
              </text>
            </svg>
            <audio
              src={heater_1_Sound}
              className="clip"
              id="V"
              ref={ref => (audioRefs.current.V = ref)}
            >
              Your browser does not support this type of file.
            </audio>
          </button> */}
        </div>
      </div>

      <div
        id="display"
        className="row d-flex  p-0  justify-content-center bg-warning col-6 border border-dark fs-3 fw-bold align-items-center mx-auto my-auto flex-grow "
        style={{ minHeight: "10vh" /*alignSelf:"center"*/ }}
      >
        <div className="col-11 h-75 d-flex align-items-center justify-content-center border border-dark ">
          {playing}
        </div>
      </div>

      {/* <div className="row h-25 flex-grow-1  col-12 m-0 p-0"></div> */}

      {/*</div>*/}
    </div>
  );
}
