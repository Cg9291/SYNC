 import sendMessages from "../actions/sendMessages";
 const mapStateToProps=(state)=>{
    return {
      messageState:state,
    }
  };
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      messageDispatch:(message)=>{
          dispatch(sendMessages(message))
      }
    }
  };
  
  export {mapDispatchToProps,mapStateToProps}