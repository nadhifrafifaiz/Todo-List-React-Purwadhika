import logo from './logo.svg';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoItem from './components/TodoItem';
import TodoItemFunction from './components/TodoItemFunction';
import React from 'react';
// Props
// -Data dari parent ke child component
// -Parent component yang membungkus child component

class App extends React.Component {
  // State
  // -Mengirim data ke component itu sendiri
  state = {
    todoList: [
      { activity: "Makan", id: 1 },
      { activity: "Lari", id: 2 },
      { activity: "Pulang", id: 3 },
    ],
    inputTodo: ""
  }

  deleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((val) => {
        return val.id != id
      })
    })
  }

  renderTodoList = () => {
    // return this.statement itu untuk lempar nilai ke baris 44
    return this.state.todoList.map((val) => {
      return (
        <TodoItem deleteTodoHandler={this.deleteTodo} todoData={val} />
      )
    })
  }

  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList, { activity: this.state.inputTodo, id: this.state.todoList.length + 1 }
      ]
    })
  }


  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {/* Merender barisan todo item dari fungsi renderTodoList() */}
        {this.renderTodoList()}

        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3" />
          <button className="btn btn-primary" onClick={this.addTodo}>Add Todo</button>
        </div>


      </div >
    );
  }
}


export default App;
