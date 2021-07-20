import React, { Component } from 'react';
import './App.css';
import AgeComponent from './components/Age';
import UsersList from './components/UsersList';

class App extends Component{


  render(){
    const age= 10;
    /* loop - list */
      let users = [
        {id: 1, name: "hussein", age: 23},
        {id: 2, name: "Mohamad", age: 25},
        {id: 3, name: "Ali", age: 27},
      ]

      let guests = [
        {id: 1, name: "huss", age: 2},
        {id: 2, name: "Moha", age: 5},
      ]
    /* End // loop - list */
    return(
      <div className="App">
        <AgeComponent age={age} />
        <AgeComponent age={3} />

        <UsersList users={users} />
        <UsersList users={guests} />
        
      </div>
    );
  }
}

export default App;
