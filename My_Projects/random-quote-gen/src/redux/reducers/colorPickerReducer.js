let colorPickerReducer=(state=0,action)=>{
    switch(action.type){
        case 'COL':
            return action.colorNum;
        default:
            return state;
    }
    
}

export default colorPickerReducer