import './App.scss';
import Presentational from './redux/components/presentational.js';
import {useEffect, useRef} from 'react'
import variables from'./variables.scss'

export default function App() {
  const ref=useRef();
  return (
    <div className="App" ref={ref}>
      <Presentational/>
    </div>
  );
}
console.log("aa")

