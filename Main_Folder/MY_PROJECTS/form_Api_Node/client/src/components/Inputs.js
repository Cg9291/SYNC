import '../styling/Inputs.scss';
import { useState,useRef } from 'react';

export default function Inputs(){
  let fieldsArr=["FirstName","LastName","Year of Birth","Height","Weight","Occupation","City","Country of Origin","ID"];
  let fields=fieldsArr.map((fieldName)=><label className="inputs"><input type="text" name={fieldName.replace(/\s/g, '')} placeholder={fieldName}/></label>);
  const [jObj,setJObj]=useState({});
  const formRef=useRef();
  const formData = new FormData(formRef.current)

  const handleChange=(e)=>{

  }

  const handleSubmit=(e)=>{
    jObj.firstName={

    }
  }
  return(
    <>
      <form className="form" ref={formRef}>
        {fields}
        <button type='submit' className="submits">Submit</button>
      </form>
      {formData}
    </>
    
  )
}