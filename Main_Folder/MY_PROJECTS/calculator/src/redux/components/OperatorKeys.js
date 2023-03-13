export default function OperatorKeys (props){
    return (
      <>
        <button
          id={props.id}
          className={`col-3 btn btn-primary shadow-none rounded-0 border ${props.optionalClasses}`}
          value={props.value}
          onClick={props.handleClick}
        >
          {props.value}
        </button>
      </>
    );
}
