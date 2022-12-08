import quotePicker from '../functions/quotePicker.js';


let indexAction=()=>{
    return {
        type:"QUOT",
        index:quotePicker()
    }
}

export default indexAction;