import './App.scss';
import {useRef} from 'react'
import QuoteBox from './redux/components/QuoteBox.js';


export default function App() {
  const appRef=useRef('green')
  return (
    <div className="App" ref={appRef}>
      <QuoteBox/>
    </div>
  );
}

//export {appRef}
