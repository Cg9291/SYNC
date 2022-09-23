export default function Inputs(){
  let fieldsArr=["FirstName","LastName","ID","Gender","Date of Birth"];
  let fields=fieldsArr.map((fieldName)=><label>{fieldName}:<input type="text"></input></label>)
  return(
    <form>
      {fields}
    </form>
  )
}