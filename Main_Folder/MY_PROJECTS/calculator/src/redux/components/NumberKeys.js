import { useContext } from "react";
import { handlersContext } from "../contexts/handlersContext";
export default function NumberKeys(props){
  const handlers=useContext(handlersContext);
    return (
      <>
        <button
          id={props.id}
        //   ref={btnRef}
          className={`col-3 btn btn-dark shadow-none rounded border  h-80 my-auto ${props.optionalClass}`}
          value={props.value}
          onClick={handlers.handleClick}
        >
          {props.value}
        </button>
      </>
    );
}
