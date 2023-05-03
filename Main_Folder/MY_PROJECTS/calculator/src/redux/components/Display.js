export default function Display(props) {
  return (
    <div className=" h-25  bg-dark d-flex flex-column justify-content-center border rounded m-0 mb-4 p-0">
      <div
        className="  text-light d-flex flex-column
                align-items-end fs-1  mt-auto "
      >
        <div>{props.input}</div>
      </div>
      <div
        id="display"
        className="  text-light d-flex
                flex-column align-items-end fs-1  m-0 p-0  "
      >
        <div>{props.output}</div>
      </div>
    </div>
  );
}
