import '../styling/Inputs.scss';
import { useState,useRef } from 'react';

export default function Inputs(){
  let fieldsArr=["FirstName","LastName","Year of Birth","Height","Weight","Occupation","City","Country of Origin","ID"];
  let fields=fieldsArr.map((fieldName)=><label className="inputs"><input type="text" name={fieldName.replace(/\s/g, '')} placeholder={fieldName}/>{fieldName.replace(/\s/g, '')}</label>);
  const [jObj,setJObj]=useState({});
  const formRef=useRef();
  const myObj={};
  let val;
  const formData=new FormData(formRef.current);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    for(const [key,value] of formData){
    	if(key=="FirstName"){
        	val=value;
            myObj[value]={};
            }
        else{
            myObj[val][key]=value;
            }
      }
  }
  return(
    <>
      <form className="form" ref={formRef}>
        {fields}
        <button type='submit' className="submits" onSubmit={(e)=>handleSubmit(e)}>Submit</button>
      </form>
      {JSON.stringify(myObj)}
    </>
    
  )
}




	const form=document.getElementById('form');
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
      output.textContent=JSON.stringify(myObj);

