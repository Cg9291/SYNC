import sax from "../audio/Midnight Sillage Kit/Sax_Midnight_Sillage.mp3";

export default function PadButtons(props) {
  return (
    <button
      id={props.id}
      ref={ref => (props.buttonRefs.current[props.keyid] = ref)}
      className="btn drum-btn btn-dark p-0"
      onClick={() => props.playSound([props.keyid])}
      style={{ boxShadow: `2px 5px ${props.boxshadowcolor}` }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="white"
      >
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="1.5em"
          letterSpacing="0"
          textLength="100%"
          lengthAdjust="Glyphs"
        >
          {props.keyid}
        </text>
      </svg>

      <audio
        id={props.keyid}
        ref={ref => (props.audioRefs.current[props.keyid] = ref)}
        className="clip"
        src={sax}
      >
        Your browser does not support this type of file.
      </audio>
    </button>
  );
}
