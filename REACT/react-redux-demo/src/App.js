import React from 'react';
import './App.css';
import{connect} from "react-redux"
import { useState } from "react";
import {Todo,mapDispatchToProps,mapStateToProps} from './react-redux'
//import Redux from 'redux';
//import ReactRedux from 'react-redux';



function App(props) {
  return (
    <div className="App">
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);