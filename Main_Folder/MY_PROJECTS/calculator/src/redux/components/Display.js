export default function Display(props) {
  return (
    <div className="bg-warning">
      <div
        /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column
                align-items-center "
      >
        <div>{props.input}</div>
      </div>
      <div
        id="display"
        /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex
                flex-column align-items-center"
      >
        <div>{props.output}</div>
        {/*<div>{props.inputState}</div>*/}
      </div>
    </div>
  );
}
