export let runOperation=(op,a,b)=>{ //RUNS THE OPERATIONS 
    return op=='x'?a*b
    :op=='+'?a+b
    :op=='/'?a/b
    :op=='-'?a-b
    :'sign not recognized'
};