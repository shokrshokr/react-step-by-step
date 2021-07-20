import React, { Component } from 'react';
import './App.css';

class App extends Component{


  render(){

    const age= 10;

    let ageTemplate = '';
    if(age>5){
      ageTemplate = <h1>you are older than 5</h1>;
    } else{
      ageTemplate = <p>you are not older than 5</p>;
    }

    return(
      <div className="App">
        {/** method one */}
          {/*age > 5 ? 'you are older than 5':
            age < 0 ? '' : 
              age > 10 ? '' : ''*/}
        {/** End // method one */}
        {/** method tow */}
          {ageTemplate}
        {/** End // method tow */}
      </div>
    );
  }
}

export default App;
