import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/welcome';
class App extends Component{
  render(){
    return(
      <div className="App">
        Welcome from App.
        <Welcome/>
        <Hello/>
      </div>
    );
  }
}

export default App;
