import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/welcome';
class App extends Component{
  render(){
    return(
      <div className="App">
        Welcome from App.
        <Welcome name="hussein" lastName="shokr">Description</Welcome>
        <Hello name="hussein"/>
      </div>
    );
  }
}

export default App;
