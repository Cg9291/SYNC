import indexPicker from '../components/indexPicker.js'


let indexAction=()=>{
    return {
        type:"idx",
        index:indexPicker()
    }
}

export default indexAction;