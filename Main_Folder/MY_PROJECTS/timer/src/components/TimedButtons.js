import Session from "./SessionComponent.js"
import Break from "./BreakComponent.js"

export default function TimedButtons(){
  return(
    <div style={{display:'flex',justifyContent:'space-evenly',width:'200px',margin:'auto',justifySelf:'center',border:'solid green'}}>
      <Session/>
      <Break/>
    </div>
  )
};