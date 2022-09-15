const quotePickerReducer=(state=Math.floor(Math.random()*11.9),action)=>{
    switch(action.type){
        case "QUOT":
            return action.index;
        default:
            return state;
    }
}

export default quotePickerReducer