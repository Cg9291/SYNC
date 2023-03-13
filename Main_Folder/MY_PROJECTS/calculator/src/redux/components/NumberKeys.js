export default function NumberKeys(props){
    return (
      <>
        <button
          id={props.id}
        //   ref={btnRef}
          className="col-3 btn btn-dark shadow-none rounded-0 border"
          value={props.value}
          onClick={props.handleClick}
        >
          {props.value}
        </button>
      </>
    );
}
