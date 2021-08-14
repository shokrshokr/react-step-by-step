import './App.css';
import React, { Component } from 'react';

class App extends Component {

  
  render() {
    //using string variable
    let classes = '';
    if(true)
      classes += 'green ';
    if(true)
      classes += 'whiteText ';
    if(true)
      classes +='boldText ';

    //using array variable
    let classess = [];
      if(true)
        classess.push('green');
      if(true)
        classess.push('whiteText');
      if(true)
        classess.push('boldText');

    return (
      <div>
        <div className={classes}>
          Test
        </div>

        <br/><br/>

        <div className={classess.join(' ')}>
          Test
        </div>

        
        
      </div>
    );
  }
  
}

export default App;
