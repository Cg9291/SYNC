import quotePicker from '../functions/quotePicker.js';
import colorPicker from '../functions/colorPicker.js';

let quoteAction=()=>{
    return {
        type:"NEWQUOTE",
        index:quotePicker(),
        colorNum:colorPicker()
    }
}

export default quoteAction;