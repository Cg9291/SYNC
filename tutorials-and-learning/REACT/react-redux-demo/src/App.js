import React from 'react';
import './App.css';
import Todo from "./components/Todo"
import Toda from "./components/Toda"

export default function App(props) {
  return (
    <div className="App">
      <Toda/>
      <Todo/>
    </div>
  )
};
