export default function Display(props) {
  return (
    <div className="row-cols-1 h-25 mh-25 bg-dark border border-danger d-flex flex-column justify-content-end">
      <div
        className=" col text-light d-flex flex-column
                align-items-end fs-1 "
      >
        <div >{props.input}</div>
      </div>
      <div
        id="display"
        className=" col text-light d-flex
                flex-column align-items-end fs-1"
      >
        <div>{props.output}</div>
      </div>
    </div>
  );
}
