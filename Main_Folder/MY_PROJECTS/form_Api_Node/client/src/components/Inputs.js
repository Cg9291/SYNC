import '../styling/Inputs.scss';
import { useState,useRef } from 'react';

export default function Inputs(){
  let fieldsArr=["FirstName","LastName","City","Year of Birth","Height","Weight","Occupation","Country of Origin","ID"];//FOR NOW WILL ONLY RENDER THE FN,LN,CITY,OCCUPATION(TESTING PURPOSES)

  const [jObj,setJObj]=useState({});
  const formRef=useRef();
  const [myObj1,setmyObj1]=useState();
  const [inputValue,setInputValue]=useState();
  const myObj={};
  let val;
  const formData=new FormData(formRef.current);


  const handleChange=(e)=>{
      setmyObj1((myObj1)=>({...myObj1,[e.target.name]:e.target.value}));
      setInputValue(e.target.value)
    }
    
  
  const handleSubmit=(e)=>{
    //e.preventDefault();
    for(const [key,value] of myObj1){
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
      <form className="form" ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
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
      {JSON.stringify(myObj)}
      {JSON.stringify(myObj1)}
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

