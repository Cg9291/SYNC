import './App.scss';
import Presentational from './redux/components/presentational.js';
import {useRef} from 'react'


export default function App() {
  const appRef=useRef('green')
  return (
    <div className="App" ref={appRef}>
      <Presentational/>
    </div>
  );
}

//export {appRef}
