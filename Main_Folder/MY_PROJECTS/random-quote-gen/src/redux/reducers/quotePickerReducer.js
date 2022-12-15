const quotePickerReducer=(state={quote:Math.floor(Math.random()*(12-0)+0),color:Math.floor(Math.random()*(14-0)+0)},action)=>{
    switch(action.type){
        case "NEWQUOTE":
            return {quote:action.index,
                    color:action.colorNum};
        default:
            return state;
    }
}

export default quotePickerReducer