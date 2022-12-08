import './App.scss';
import {useRef} from 'react'
import Container from './redux/components/Container.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

export default function App() {
  const appRef=useRef('green')
  return (
    <div className="App" ref={appRef}>
      <Provider store={store}>
        <Container/>
      </Provider>
    </div>
  );
}

//export {appRef}
