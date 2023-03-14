const inputReducer=(state={input:[0]},action)=>{
    switch(action.type){
        case 'INPUT':
            return state.concat(action)
    }
}

export default inputReducer
