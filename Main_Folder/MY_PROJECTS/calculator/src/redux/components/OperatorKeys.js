import { useContext } from "react";import { handlersContext } from "../contexts/handlersContext";

export default function OperatorKeys (props){
  const handlers=useContext(handlersContext)
    return (
      <>
        <button
          id={props.id}
          className={`col-2 btn btn-primary shadow-none rounded border h-80 m-0 p-0 my-auto ${props.optionalClasses}`}
          value={props.value}
          onClick={handlers.handleOperatorClick}
        >
          {props.value}
        </button>
      </>
    );
}
