import Session from "./SessionComponent.js"
import Break from "./BreakComponent.js"

export default function TimedButtons(){
  return(
    <div style={{position:'relative',marginBottom:'968px',marginLeft:'1400px', display:'flex',justifyContent:'space-evenly',width:'200px',justifySelf:'center',marginBottom:'20px'}}>
      <Session/>
      <Break/>
    </div>
  )
};