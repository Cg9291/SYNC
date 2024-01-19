import '../styling/Inputs.scss';
import { useState,useRef } from 'react';

export default function Inputs(){
  let fieldsArr=["FirstName","LastName","City","Year of Birth","Height","Weight","Occupation","Country of Origin","ID"];//FOR NOW WILL ONLY RENDER THE FN,LN,CITY,OCCUPATION(TESTING PURPOSES)
  
  const [objState,setObjState]=useState({});
  const formRef=useRef();
 
  let value;
  


  const handleChange=(e)=>{
      setObjState(objState=>({...objState,[e.target.name]:e.target.value}))
    }
    
  
  const handleSubmit=(e)=>{
    //e.preventDefault();
    const data=new FormData(e.target);
    value=Object.fromEntries(data.entries());
    
  }
  return(
    <>
      <form className="form" ref={formRef} onSubmit={(e)=>handleSubmit(e)} action="/" method='POST'>
        <label className="inputs">
          <input type="text" name={fieldsArr[0].replace(/\s/g, '')} placeholder={fieldsArr[0]} onChange={(e)=>handleChange(e)}/>
        </label>
        <label className="inputs">
          <input type="text" name={fieldsArr[1].replace(/\s/g, '')} placeholder={fieldsArr[1]} onChange={(e)=>handleChange(e)}/>
        </label>
        <label className="inputs">
          <input type="text" name={fieldsArr[2].replace(/\s/g, '')} placeholder={fieldsArr[2]} onChange={(e)=>handleChange(e)}/>
        </label>
        <button type='submit' className="submits">Submit</button>
      </form>
      {JSON.stringify(objState)}
    </>
    
  )
}




	/*const form=document.getElementById('form');
    const formData=new FormData(form);
    const myObj={};
    const output=document.getElementById('output');
    let val;
    
    for(const [key,value] of formData){
    	if(key==='text1'){
        	val=value;
            myObj[value]={};
            }
        else{
            myObj[val][key]=value;
            }
      }
      output.textContent=JSON.stringify(myObj);*/

//export let myObj=[...jsonObj,value]