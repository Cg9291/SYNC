let colorPickerReducer=(state=Math.floor(Math.random()*8.9),action)=>{
    switch(action.type){
        case 'COLR':
            return action.colorNum;
        default:
            return state;
    }
    
}

export default colorPickerReducer