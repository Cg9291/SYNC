import { useContext } from "react";
import { handlersContext } from "../contexts/handlersContext";
export default function Display(props){const handlers = useContext(handlersContext);
        return(
            <div>
              <div /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex flex-column
                align-items-center">
                    <div>{props.input}</div>
              </div>
              <div id="display" /*style={displayStyle}*/ className="row-cols-4 justify-content text-light d-flex
                flex-column align-items-center" >
                <div>{props.output}</div>
                <>
                {handlers.ab}
                </>
              {/*<div>{props.inputState}</div>*/}
            </div>
            </div>
        )
    }
