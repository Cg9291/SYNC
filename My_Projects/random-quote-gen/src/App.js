import './App.scss';
import Presentational from './redux/components/presentational.js';
import {useRef} from 'react'


export default function App() {
  return (
    <div className="App bg-sync">
      <Presentational/>
    </div>
  );
}


