import './App.scss';
import Presentational from './redux/components/presentational.js';
import {useEffect, useRef} from 'react'


export default function App() {
  const ref=useRef();
  return (
    <div className="App bg-sync"  ref={ref}>
      <Presentational/>
    </div>
  );
}
console.log("aa")

