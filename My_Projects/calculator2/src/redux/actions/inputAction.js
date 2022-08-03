const inputAction=(event)=>{
    return{
        type:'INPUT',
        value:event.target.value
    }
};

export default inputAction