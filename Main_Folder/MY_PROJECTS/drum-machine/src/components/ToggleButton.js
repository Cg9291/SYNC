export default function ToggleButton(props) {
  if (props.toggle) {
    return (
      <div
        className="row m-0 p-0  bg-warning h-50 w-25 mt-3"
        style={{marginRight:"0%" }}
      >
        <div className="col-6 d-flex justify-content-center align-items-center">ON</div>
        <button
          className="col col-6  m-0 p-0 border border-3 bg-primary "
          onClick={props.switchToggle}
        ></button>
      </div>
    );
  } else {
    return (
      <div
        className="row m-0 p-0 border border-dark bg-warning h-50 w-25 mt-3 ms-0 me-4"
        //style={{ minHeight: "25px", marginRight: "10%" }}
      >
        <button
          className="col col-6 m-0 p-0 bg-primary border border-3"
          onClick={props.switchToggle}
        ></button>
        <div className="col-6 d-flex justify-content-center align-items-center">OFF</div>
      </div>
    );
  }
}
