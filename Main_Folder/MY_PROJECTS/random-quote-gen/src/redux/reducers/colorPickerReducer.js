const colorPickerReducer=(state={color:Math.floor(Math.random()*8.9)},action)=>{
    switch(action.type){
        case "NEWCOLOR":
            return {color:action.colorNum};
        default:
            return state;
    }

}

export default colorPickerReducer
