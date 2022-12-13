import quotePicker from '../functions/quotePicker.js';


let quoteAction=()=>{
    return {
        type:"QUOT",
        index:quotePicker()
    }
}

export default quoteAction;