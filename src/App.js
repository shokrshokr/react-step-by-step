import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Lists from './components/Lists';
import Conditions from './components/Conditions';
import Welcome from './components/Welcome';
class App extends Component{
  render(){
    return(
      <div className="App">
        Welcome from App.
        <Welcome name="hussein" lastName="shokr">Description</Welcome>
        <Hello name="hussein"/>
        <Lists/>
        <Conditions />
      </div>
    );
  }
}

export default App;
