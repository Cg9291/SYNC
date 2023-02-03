import colorPicker from '../functions/colorPicker.js'

let colorAction=()=>{
    return {
        type:"NEWCOLOR",
        colorNum:colorPicker()
    }
}

export default colorAction;
