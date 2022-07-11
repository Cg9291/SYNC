import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { useState } from "react";
let arr=[0,1,2,3,4,5]
let arr1=["Bleu","Blanc","Rouge"].join(",")

/* bulbs pics for toggle exercise
https://www.w3schools.com/js/pic_bulboff.gif
https://www.w3schools.com/js/pic_bulbon.gif */

//DIV1      
function Hello(props) {
  return <div className="divA">
    <h1>
      What'up {props.name} from {props.city} {props.province},{props.country}?
    </h1>
    <h2>and the first div's subheader</h2>
    </div>;
    
};

Hello.defaultProps={
  city:"Vancouver",
  province:"BC",
  country:"Canada",
}

//DIV 2
/*const JSX = (
  <div className="divB">
    <h1>This is the FCC practice div</h1>
    <p>Lets render this to the DOM</p>
  </div> 
); 
ReactDOM.render(JSX,document.getElementById("#lol"))*/


//DIV 3
 const FunctionalStatelessComponent = function(props) {
  return (
    <div>
      <div>This is a Stateless Functional React Component by {props.name} from {props.city} {props.province},{props.country}.</div>
      <div>
        {props.data} <br />
        {props.data1}
      </div>
    </div>
  )
};

FunctionalStatelessComponent.defaultProps={
  name:"Carl G",
  city:"Vancouver",
  province:"BC",
  country:"Canada",
  //see obj child form below
}


//DIV 4
class ClassComponent extends React.Component {
  render(){
    return ( 
      <div>
        This is how you create a Class React Component.<br/>
        And this took about <span id="tt">{this.props.tries}</span> attempts to correctly render!!
      </div>
    )
  }
}

ClassComponent.defaultProps={
  tries:"10",
}
ClassComponent.propTypes={
  tries:PropTypes.number.isRequired
}


//DIV5
let Child=function(){
  return(
    <div>I am the child component</div>
  )
};

class Parent extends React.Component{
  render(){
    return(
      <Child />
    )
  }
}

//DIV 6
class Stateful extends React.Component{
  constructor(props){
    super(props);  
    this.state={
      name:"Mr.Goga",
      skills:["Html","Css","Javascript","BOOTSRAP","React.js","SASS","JQuery","Git","CLI"].join(",")
    }
    this.clicked1=this.clicked1.bind(this);
  }
  clicked1(){
    this.setState({
      skills:"The Skills section has been wiped"
    })
  }
  render(){
    const pskills=this.state.skills;
    return (
     <div>
      <div>{this.state.name}</div>
      <div>{pskills}</div>
      <button onClick={this.clicked1}>Wipe Skills</button>
    </div> 
    )
  }
}


//DIV 7
function clicked(){
  window.alert("The button has been clicked");
}

//TOGGLE BULB - Light
class Light extends React.Component{
  constructor(props){
    super(props);
    this.state={
      lightstatus:true
    }
    this.toggleLight=this.toggleLight.bind(this)
  }

  toggleLight(){
    this.setState((state)=>({
      lightstatus:!state.lightstatus
    })
    )
    if (this.state.lightstatus){
      document.getElementById("light-img").setAttribute("src","https://www.w3schools.com/js/pic_bulbon.gif ");
      document.getElementById("light-switch").innerText="Turn off the light";
    }else{
      document.getElementById("light-img").setAttribute("src","https://www.w3schools.com/js/pic_bulboff.gif ");
      document.getElementById("light-switch").innerText="Turn on the light"};
  }

  render(){
    return (
      <div>
        <img id="light-img" src="https://www.w3schools.com/js/pic_bulboff.gif " alt=" a lightbulb"></img>
        <button id="light-switch" onClick={this.toggleLight}>Turn on the light</button>
      </div>)
  }
}

//COUNTER
/*
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    this.add=this.add.bind(this)
    this.substract=this.substract.bind(this)
    this.reset=this.reset.bind(this)
  }

  add(){
    this.setState(state=>({
      count:state.count+1
    }))
  }

  substract(){
    this.setState(state=>({
      count:state.count-1
    }))
  }

  reset(){
    this.setState({
      count:0
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.add}>add</button>
        <button onClick={this.substract}>substract</button>
        <button onClick={this.reset}>reset</button>
        <p>You are on a <span id="streak-days">{this.state.count}</span> days streak!</p>
      </div>
    )
  }
}*/

function Counter(){
  const [count,setCount]=useState(0);
  const [hair,setHair]=useState({
    length:"short",
    style:"buzzed",
    color:"black",
  })

  const updateProp = (pro,valeur) => {
    setHair(previousState =>{ 
      if(pro=="length"){
        return { ...previousState,length:valeur };
      }else if(pro=="style"){
        return { ...previousState,style:valeur };
      }else if(pro=="color"){
        return { ...previousState,color:valeur };
      }
    });
  }
    let purple="purple"
  return(
    <div>
        <button onClick={()=>setCount(count+1)}>add</button>
        <button onClick={()=>setCount(count-1)}>substract</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <p>You are on a <span id="streak-days">{count}</span> days streak!</p>
        <div>
          <button onClick={()=>updateProp("length","short")}>short</button>
          <button onClick={()=>setHair(p=>{return {...p,length:"medium"}})}>medium</button>
          <button onClick={()=>updateProp("length","long")}>long</button>
          <button onClick={()=>setHair(p=>{return {...p,style:"buzzed"}})}>buzzed</button>
          <button onClick={()=>updateProp("style","curly")}>curly</button>
          <button onClick={()=>setHair(p=>{return {...p,style:"frizzy"}})}>frizzy</button>
          <button onClick={()=>updateProp("color","black")}>black</button>
          <button onClick={()=>setHair(p=>{return {...p,color:"blond"}})}>blond</button>
          <button onClick={()=>updateProp("color","red")}>red</button>
        </div>
        <p>You currently have {hair.length},{hair.style} {hair.color} hair!</p>
      </div>

      //only the red button works...review
  )
}

//INPUT COLOR CHANGE
class Input extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color:"",
      submit:""
    }
    this.setColor=this.setColor.bind(this)
    this.changeColor=this.changeColor.bind(this)
  }

  setColor(event){
    this.setState({
      color:event.target.value
    })
  }

  changeColor(event){
    event.preventDefault()
    this.setState({
      submit:this.state.color
    })
    document.getElementById("streak-days").style.setProperty("color",this.state.color)
    return false
  }

    render(){
      return(
        <div>
          <form onSubmit={this.changeColor}>
          <input value={this.state.color}  onChange={this.setColor} placeholder="Enter a color?"></input>
          <button>Submit</button>
          </form>
          <p>{this.state.color}</p>
        </div>
      )
    }
}


//APP DISPLAY
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Light />
        <Counter />
        <Input />
        <div id="for-reveal">
        <Hello name="Cg" />
        <div id="lol" />
        <FunctionalStatelessComponent data={arr} data1={arr1} province="WA" country="America" />
        <ClassComponent tries={19} />  
        <Parent />
        <Stateful />
        <button onClick={clicked}>Click me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </header>
    </div>
  );
}





export default App;
