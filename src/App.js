import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Lists from './components/Lists';
import Conditions from './components/Conditions';
import Welcome from './components/Welcome';
import LifeCycleEx from './components/LifeCycleEx';
class App extends Component{
  render(){
    return(
      <div className="App">
        Welcome from App.
        <hr/>
        <h3>component</h3>
        <Welcome name="hussein" lastName="shokr">Description</Welcome>
        <hr/>
        <h3>props-state-eventOnClick-onChangeEvent</h3>
        <Hello name="hussein"/>
        <hr/>
        <h3>list-loop</h3>
        <Lists/>
        <hr/>
        <h3>conditions</h3>
        <Conditions />
        <hr/>
        <h3>LifeCycle-Hooks</h3>
        <LifeCycleEx />
        <hr/>
        <h3></h3>
      </div>
    );
  }
}

export default App;
