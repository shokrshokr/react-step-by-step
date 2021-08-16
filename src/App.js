import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import {Provider} from "react-redux"
import store from './store/store';
class App extends Component{
  


  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <Counter />
        
        </div>
      </Provider>
      
    );
  }
}

export default App;