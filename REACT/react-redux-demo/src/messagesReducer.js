export const messagesReducer=(state=[],action)=>{
    switch(action.type){
      case 'mess':
        return [...state,action.message];
      default:
        return state;
    }  
  };