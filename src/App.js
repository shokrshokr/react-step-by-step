import React, { Component } from 'react';
import './App.css';

import Task from './components/Task';
import CreateTask from './components/CreateTask';



class App extends Component{
  state = {
    newTask : "",
    todos: [
      {text: 'learn ReactJs'},
      {text: 'learn AngularJs'},
      {text: 'learn NodeJs'},
      {text: 'learn VueJs'},
    ]
  }
  completeTask = (index) => {
    //console.log(index);
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  updateNewTask = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState({
      todos,
      newTask: ''
    });
  }


  render(){
    return(
      <div className="App">
        {/** Method one */}
          {/*this.state.todos.map((todo, index) => 
            <Task 
              todo={todo} 
              completeTask={this.completeTask} 
              index={index} 
              key={index} 
            /> )
          */}
        {/** End // Method one */}
        {/** Method two */}
          {this.state.todos.map((todo, index) => 
            <Task 
              todo={todo} 
              completeTask={() => 
                this.completeTask(index)
              } 
              key={index} 
            /> 
          )}
        {/** End // Method two */}

        <CreateTask 
          value={this.state.newTask} 
          onChange={this.updateNewTask} 
          addTask={this.addTask} 
        />
        
      </div>
    );
  }
}

export default App;
