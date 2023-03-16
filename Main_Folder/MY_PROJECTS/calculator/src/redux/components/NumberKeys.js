import { useContext } from "react";
import { handlersContext } from "../contexts/handlersContext";
export default function NumberKeys(props){
  const handlers=useContext(handlersContext);
    return (
      <>
        <button
          id={props.id}
        //   ref={btnRef}
          className={`col-4 btn btn-dark shadow-none rounded-0 border ${props.optionalClass}`}
          value={props.value}
          onClick={handlers.handleClick}
        >
          {props.value}
        </button>
      </>
    );
}
