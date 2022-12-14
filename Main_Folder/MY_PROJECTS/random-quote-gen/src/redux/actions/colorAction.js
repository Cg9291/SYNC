import colorPicker from '../functions/colorPicker.js'

let colorAction=()=>{
    return {
        type:"JK",
        colorNum:colorPicker()
    }
}

export default colorAction;