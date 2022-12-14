const quotePickerReducer=(state={quote:Math.floor(Math.random()*11.9),color:Math.floor(Math.random()*8.9)},action)=>{
    switch(action.type){
        case "NEWQUOTE":
            return {quote:action.index,
                    color:action.colorNum};
        default:
            return state;
    }
}

export default quotePickerReducer