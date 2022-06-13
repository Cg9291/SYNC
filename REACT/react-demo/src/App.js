import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'

//DIV1      
function Hello() {
  return <div className="divA">
    <h1>
      This is the first div's header
    </h1>
    <h2>and the first div's subheader</h2>
    </div>;
}

//DIV 2
const JSX = (
  <div className="divB">
    <h1>This is the FCC practice div</h1>
    <p>Lets render this to the DOM</p>
  </div>

  
); 
ReactDOM.render(JSX,document.getElementById("lol"))


//DIV 3
 const MyComponent = function() {
  return (
    <div>This is a Stateless Functional React Component</div>
  )
};


//DIV 4
class Dogs extends React.Component {

  render(){
    return ( 
      <div>
        This is how you create a Class React Component
      </div>
    )
  }
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <div id="lol">
        </div>
        <MyComponent />
        <Dogs />  
        <Parent />
        
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
