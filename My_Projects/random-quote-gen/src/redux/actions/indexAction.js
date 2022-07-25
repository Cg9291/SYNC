import indexPicker from '../functions/indexPicker.js'


let indexAction=()=>{
    return {
        type:"idx",
        index:indexPicker()
    }
}

export default indexAction;