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
  const buttonRefs = useRef([]); //using REFCALLBACK to dynamically target specific node/element

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
      const btnDefaultClass = buttonRefs.current.Q.className;

      audioRefs.current[keyid].play();
      audioRefs.current[keyid].volume = props.volume / 100;
      buttonRefs.current[keyid].className += " pad-keys";
      setPlaying(buttonRefs.current[keyid].id);

      setTimeout(() => {
        buttonRefs.current[keyid].className = btnDefaultClass;
      }, 100);
    }
  }

  function handleKeyPress(event) {
    const btnDefaultClass = buttonRefs.current.Q.className;
    let pressedKey = event.key.toUpperCase();

    audioRefs.current[pressedKey].play();
    audioRefs.current[pressedKey].volume = props.volume / 100;
    buttonRefs.current[pressedKey].className += " pad-keys";
    setPlaying(buttonRefs.current[pressedKey].id);

    setTimeout(() => {
      buttonRefs.current[pressedKey].className = btnDefaultClass;
    }, 100);
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
