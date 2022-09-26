import "../styling/Form.scss"
import Inputs from "./Inputs";


export default function Form(){
  return(
    <div id='form' action="http://localhost:3001/data" method="POST">
      <h1>
        <b>
        Form Header
        </b>
      </h1>
      <Inputs/>
    </div>
  )
}