import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div id="App">
      <section id="left-container">
        <Navigation/>
      </section>
      <section id="middle-container"></section>
      <section id="right-container">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP



function Navigation(props){
  return (
    <nav>
      <ul>
        <img id="twitter-logo" 
      src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png" 
      alt="twitter logo" />
        <li><b>Home</b></li>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Bookmarks</li>
        <li>Lists</li>
        <li>Profile</li>
        <li>More</li>
        <button type="click">Tweet</button>
      </ul>
    </nav>
  )
}


