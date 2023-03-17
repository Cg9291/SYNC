import { useContext } from "react";import { handlersContext } from "../contexts/handlersContext";

export default function OperatorKeys (props){
  const handlers=useContext(handlersContext)
    return (
      <>
        <button
          id={props.id}
          className={`col-3 btn btn-primary shadow-none rounded-0 border ${props.optionalClasses}`}
          value={props.value}
          onClick={handlers.handleOperatorClick}
        >
          {props.value}
        </button>
      </>
    );
}
