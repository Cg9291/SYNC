const inputReducer=(state,action)=>{
    switch(action.type){
        case 'INPUT':
            return state.concat(action)
    }
}