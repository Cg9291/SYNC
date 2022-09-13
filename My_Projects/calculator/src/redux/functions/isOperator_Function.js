export let isOperator=(sign)=>{
    switch(sign){
        case '+':
        case '-':
        case 'x':
        case '/': 
            return true;
        default:
            return false;
    }}