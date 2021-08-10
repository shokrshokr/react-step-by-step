import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    className: 'green'
  }
  render() {
    const className = 'green';
    return (
      <div>
        <div className='green'>
          Test
        </div>
        <br />
        <div className={className}>
          Test Two
        </div>
        <br />
        <p>men 5elel state</p>
        <div className={this.state.className}>
          Test Three
        </div>

        <button onClick={()=> {
          this.setState({className: 'red'})
        }}>
          Change to red
        </button>
        <button onClick={()=> {
          this.setState({className: 'green'})
        }}>
          Change to green
        </button>
      </div>
    );
  }
  
}

export default App;
