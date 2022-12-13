import './App.scss';
import {useRef} from 'react'
import Container from './redux/components/Container.js';
import QuoteBox from './redux/components/QuoteBox.js';

export default function App() {
  const appRef=useRef('green')
  return (
    <div className="App" ref={appRef}>
        {/*<Container/>*/}
        <QuoteBox/>
    </div>
  );
}

//export {appRef}
