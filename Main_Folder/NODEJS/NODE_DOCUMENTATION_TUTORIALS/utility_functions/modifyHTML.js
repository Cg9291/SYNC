export default function modifyHTML(oldHTML,newData){
const modifiedHTML=oldHTML.replace("{variable}",newData);
return modifiedHTML;
}
