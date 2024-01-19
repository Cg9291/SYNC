import sax from "../audio/Midnight Sillage Kit/Sax_Midnight_Sillage.mp3";

export default function PadButtons(props) {
  return (
    <button
      id={props.id}
      ref={ref => (props.buttonRefs.current[props.keyid] = ref)}
      className="btn drum-btn btn-dark m-0 p-0"
      onClick={() => props.playSound([props.keyid])}
      style={{ boxShadow: `2px 5px ${props.boxshadowcolor}` }}
    >
      <text className="fs-1">{props.keyid}</text>

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
