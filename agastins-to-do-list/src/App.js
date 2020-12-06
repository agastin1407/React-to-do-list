import React,{Component} from 'react';
import AddTask from './AddTask';
import Todos from './Todos';


class App extends Component {
  state = {
    tasks  : [
      {id:1,content:"Watch AOT"},
    {id:2,content:"Present Final check"}
  ]
  }

  addTask = (task) =>{
    task.id=Math.random();
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
  }

  deleteTask = (id) =>{
    const tasks = this.state.tasks.filter( task =>{
      return task.id !== id
    })
    
    this.setState({
      tasks
    })
  }
  render(){
  return (
    <div className="App container">
      <h1 className="center green-text">Agastin's Today's Task</h1>
      <Todos todos={this.state.tasks} deleteTask={this.deleteTask}/>
      <AddTask addTask={this.addTask} />
      
    </div>
  );
}
}

export default App;
