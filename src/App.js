import React, { Component } from 'react';
import './App.css';

class App extends Component{


  render(){

    const age= 10;
    let ageTemplate = '';
    let users = [
      {id: 1, name: "hussein", age: 23},
      {id: 2, name: "Mohamad", age: 25},
      {id: 3, name: "Ali", age: 27},
    ]

    if(age>5){
      ageTemplate = <h1>you are older than 5</h1>;
    } else{
      ageTemplate = <p>you are not older than 5</p>;
    }

    return(
      <div className="App">
        {ageTemplate}
        <ul>
          {users.map((user, index) => <li key={user.id}>{index} - {user.name}</li>)}
        </ul>
        
      </div>
    );
  }
}

export default App;
