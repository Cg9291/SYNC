export default function NumberKeys(props){
    return (
      <>
        <button
          id={props.id}
        //   ref={btnRef}
          className={`col-4 btn btn-dark shadow-none rounded-0 border ${props.optionalClass}`}
          value={props.value}
          onClick={props.handleClick}
        >
          {props.value}
        </button>
      </>
    );
}
