const quotePickerReducer=(state={quote:Math.floor(Math.random()*(12-0)+0)},action)=>{
    switch(action.type){
        case "NEWQUOTE":
            return {quote:action.index};
        default:
            return state;
    }
}

export default quotePickerReducer
