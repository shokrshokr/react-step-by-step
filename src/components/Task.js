import React from 'react';

function Task(props) {
    const todo = props.todo;
    const index = props.index;
    const completeTask = props.completeTask;
  
    return(
      <li key={index}>
        {todo.text } 
        {/**method one */}
        {/*
          <button 
            onClick={() => 
              {completeTask(index)}}
          >
            Done
          </button>
          */}
        {/** End // method one */}
        {/**method two */}
          <button onClick={completeTask}>
            Done
          </button>
        {/** End // method two */}
      </li>
    );
  }

export  default Task;