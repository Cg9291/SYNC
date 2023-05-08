import { useContext } from "react";import { handlersContext } from "../contexts/handlersContext";

export default function OperatorKeys (props){
  const handlers=useContext(handlersContext)
    return (
      <>
        <button
          id={props.id}
          className={` btn border shadow-none rounded h-100  m-0 p-0 my-auto bg-color4 text-light fs-1 ${props.optionalClasses}`}
          value={props.value}
          onClick={handlers.handleOperatorClick}
        >
          {props.value}
        </button>
      </>
    );
}
