import './App.scss';
import Container from './redux/components/Container.js';


function App() {
  return (
    <div className="App" style={{width:'100vw',height:'100vh',maxHeight:'100vh',backgroundColor: '#282c34',color:'white', textAlign:'center'}}>
     <Container/>
    </div>
  );
}

export default App;
