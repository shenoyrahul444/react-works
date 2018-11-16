import React, { Component } from 'react';
import Todos from "./Todos";
import AddTask from "./AddTask";

class App extends Component {
  state = {
    todos: [
      {id:1,content:"Learn React-Redux"},
      {id:2,content:"Build an App"}
  ]}

  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.todos,task]
    this.setState({
      todos:tasks
    })
  }
  
  removeTask = (newTask) => {
    let updatedTasks = this.state.todos.filter(task => {
       return task.id !== newTask.id 
      })
    this.setState({todos:updatedTasks})
  }
  
  render() {
    return (
      <div className=" todo-app container">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} removeTask={this.removeTask} />
        <AddTask addTask={this.addTask}  />
        
      </div>
    );
  }
}

export default App;
