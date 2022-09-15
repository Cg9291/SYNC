import colorPicker from '../functions/colorPicker.js'

let colorAction=()=>{
    return {
        type:'COLR',
        colorNum:colorPicker()
    }
}

export default colorAction;