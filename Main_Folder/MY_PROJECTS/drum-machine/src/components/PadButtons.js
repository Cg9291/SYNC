import { useRef } from "react";
 import sax from "../audio/Midnight Sillage Kit/Sax_Midnight_Sillage.mp3";

export default function PadButtons(props){



  return (
    <button
      id={props.id}
      className="btn drum-btn btn-dark p-0"
      ref={ref => (props.buttonRefs.current[props.keyid] = ref)}
      onClick={props.playSound}
      //onKeyDown={()=>buttonRefs.qParent.style.color='red'}
      //    onKeyDown={}qqa
      style={{ boxShadow: `2px 5px ${props.boxshadowcolor}` }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="white"
        className=""
      >
        <text
          x="34.5"
          y="66.5"
          textLength="20"
          lengthAdjust="spacing"
          className=""
          // height="80px"
          // width="50px"
        >
          {props.keyid}
        </text>
      </svg>

      <audio
        src={sax}
        className="clip"
        id={props.keyid}
        ref={ref => (props.audioRefs.current[props.keyid] = ref)}
      >
        Your browser does not support this type of file.
      </audio>
    </button>
  );
}
