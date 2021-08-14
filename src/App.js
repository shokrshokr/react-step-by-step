import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    active: true
  }
  render() {
    const Style = {color: 'white', 'font-weight': 'bold' };

    if(this.state.active){
      Style.color = 'blue';
    }
    return (
      <div>
        <p>men 5elel state</p>
        <div className={this.state.active ? 'green':'red'} style={Style}>
          Test Three
        </div>

        <button onClick={()=> {
          this.setState({active: ! this.state.active})
        }}>
          Change active
        </button>
        

        <br /><br />
        <div className='green' style={{color: 'white', fontWeight: 'bold' }}> {/* or 'font-weight': 'bold' */}
          Test 4
        </div>
      </div>
    );
  }
  
}

export default App;
