const indexReducer=(state=0,action)=>{
    switch(action.type){
        case "idx":
            return action.index;
        default:
            return state;
    }
}

export default indexReducer