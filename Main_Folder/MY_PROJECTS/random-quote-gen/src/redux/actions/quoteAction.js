import indexPicker from '../functions/quotePicker.js'


let indexAction=()=>{
    return {
        type:"QUOT",
        index:indexPicker()
    }
}

export default indexAction;