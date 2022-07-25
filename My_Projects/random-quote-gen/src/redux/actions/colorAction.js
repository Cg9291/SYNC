import colorPicker from '../functions/colorPicker.js'

let colorAction=()=>{
    return {
        type:'COL',
        colorNum:colorPicker()
    }
}

export default colorAction;