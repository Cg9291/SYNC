import stateTrackingObject from "../objects/stateTracking.js";


let quotePicker=()=>{
    let quoteIndex=Math.floor(Math.random()*(12-0)+0);
        return quoteIndex;
}
export default quotePicker;