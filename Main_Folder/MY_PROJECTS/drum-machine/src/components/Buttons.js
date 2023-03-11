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

export default function Buttons(props) {
  const buttonRefs = useRef([]); //using REFCALLBACK to target specific node/element

  const audioRefs = useRef([]);

  const [playing, setPlaying] = useState();
  const [toggle, setToggle] = useState(true);

  const [indicatorLightColor, setIndicatorLightColor] = useState("black");

  const switchToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
      setPlaying(props.volume);
    }
  };

  function playSound(keyid) {
    if (toggle) {
      audioRefs.current[keyid].play();
      audioRefs.current[keyid].volume = props.volume / 100;
      setPlaying(buttonRefs.current[keyid].id);
    }
  }

  function handleKeyPress(event) {
    const btnDefaultClass = buttonRefs.current.Q.className;
    if (event.key.toUpperCase() === "Q") {
      audioRefs.current.Q.play();
      audioRefs.current.Q.volume = props.volume / 100;
      buttonRefs.current.Q.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.Q.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.Q.id);
    } else if (event.key.toUpperCase() === "W") {
      audioRefs.current.W.play();
      audioRefs.current.W.volume = props.volume / 100;
      buttonRefs.current.W.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.W.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.W.id);
    } else if (event.key.toUpperCase() === "E") {
      audioRefs.current.E.play();
      audioRefs.current.E.volume = props.volume / 100;
      buttonRefs.current.E.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.E.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.E.id);
    } else if (event.key.toUpperCase() === "R") {
      audioRefs.current.R.play();
      audioRefs.current.R.volume = props.volume / 100;
      buttonRefs.current.R.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.R.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.R.id);
    } else if (event.key.toUpperCase() === "A") {
      audioRefs.current.A.play();
      audioRefs.current.A.volume = props.volume / 100;
      buttonRefs.current.A.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.A.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.A.id);
    } else if (event.key.toUpperCase() === "S") {
      audioRefs.current.S.play();
      audioRefs.current.S.volume = props.volume / 100;
      buttonRefs.current.S.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.S.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.S.id);
    } else if (event.key.toUpperCase() === "D") {
      audioRefs.current.D.play();
      audioRefs.current.D.volume = props.volume / 100;
      buttonRefs.current.D.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.D.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.D.id);
    } else if (event.key.toUpperCase() === "F") {
      audioRefs.current.F.play();
      audioRefs.current.F.volume = props.volume / 100;
      buttonRefs.current.F.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.F.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.F.id);
    } else if (event.key.toUpperCase() === "Z") {
      audioRefs.current.Z.play();
      audioRefs.current.Z.volume = props.volume / 100;
      buttonRefs.current.Z.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.Z.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.Z.id);
    } else if (event.key.toUpperCase() === "X") {
      audioRefs.current.X.play();
      audioRefs.current.X = props.volume / 100;
      buttonRefs.current.X.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.X.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.X.id);
    } else if (event.key.toUpperCase() === "C") {
      audioRefs.current.C.play();
      audioRefs.current.C = props.volume / 100;
      buttonRefs.current.C.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.C.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.C.id);
    } else if (event.key.toUpperCase() === "V") {
      audioRefs.current.V.play();
      audioRefs.current.V.volume = props.volume / 100;
      buttonRefs.current.V.className += " pad-keys";
      setTimeout(() => {
        buttonRefs.current.V.className = btnDefaultClass;
      }, 100);
      setPlaying(buttonRefs.current.V.id);
    }
  }

  useEffect(() => {
    setPlaying(props.volume);
  }, [props.volume]);

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
  }, [toggle, props.volume]);

  PadButtons.defaultProps = {
    playSound: playSound,
    buttonRefs: buttonRefs,
    audioRefs: audioRefs,
  };

  return (
    <div
      id="buttons-pane"
      className=" vh-100 d-flex flex-column mx-0 p-0 bg-black align-items-evenly "
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
          switchToggle={switchToggle}
        />
      </div>

      <div
        id="pad"
        className="container-fluid d-flex flex-column justify-content-center align-items-center h-50 mt-5"
      >
        <div className="row pad-row">
          <PadButtons
            id="1"
            keyid="Q"
            boxshadowcolor="red"
          />
          <PadButtons
            id="2"
            keyid="W"
            boxshadowcolor="blue"
          />
          <PadButtons
            id="3"
            keyid="E"
            boxshadowcolor="green"
          />
          <PadButtons
            id="4"
            keyid="R"
            boxshadowcolor="lightgreen"
          />
        </div>

        <div className="row pad-row">
          <PadButtons
            id="5"
            keyid="A"
            boxshadowcolor="purple"
          />
          <PadButtons
            id="6"
            keyid="S"
            boxshadowcolor="brown"
          />
          <PadButtons
            id="7"
            keyid="D"
            boxshadowcolor="orange"
          />
          <PadButtons
            id="8"
            keyid="F"
            boxshadowcolor="lightgreen"
          />
        </div>

        <div className="row pad-row">
          <PadButtons
            id="9"
            keyid="Z"
            boxshadowcolor="turquoise"
          />
          <PadButtons
            id="10"
            keyid="X"
            boxshadowcolor="yellow"
          />
          <PadButtons
            id="11"
            keyid="C"
            boxshadowcolor="white"
          />
          <PadButtons
            id="12"
            keyid="V"
            boxshadowcolor="lightgreen"
          />
        </div>
      </div>

      <div
        id="display"
        className="row d-flex  p-0  justify-content-center bg-warning col-6 fs-2 fw-bold align-items-center mx-auto my-auto  "
        style={{ minHeight: "10vh" }}
      >
        <div className="col-11 h-75 d-flex align-items-center justify-content-center border border-dark ">
          {playing}
        </div>
      </div>
    </div>
  );
}
