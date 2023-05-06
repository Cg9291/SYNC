import { useContext } from "react";
import { handlersContext } from "../contexts/handlersContext";
export default function NumberKeys(props){
  const handlers=useContext(handlersContext);
    return (
      <>
        <button
          id={props.id}
        //   ref={btnRef}
          className={`col-3 btn btn-dark border rounded  shadow h-80 my-auto bg-color3 text-dark ${props.optionalClasses}`}
          value={props.value}
          onClick={handlers.handleClick}
        >
          {props.value}
        </button>
      </>
    );
}
