import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
let arr=[0,1,2,3,4,5]
let arr1=["Bleu","Blanc","Rouge"].join(",")

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="Cg" />
        <div id="lol">
        </div>
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
      </header>
    </div>
  );
}





export default App;
