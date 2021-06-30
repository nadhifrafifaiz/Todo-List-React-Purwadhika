import logo from './logo.svg';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoItem from './components/TodoItem';
import TodoItemFunction from './components/TodoItemFunction';
// Props
// -Data dari parent ke child component
// -Parent component yang membungkus child component

function App() {


  return (
    <div>
      <h1>Todo List</h1>
      <TodoItem />
      <TodoItem />

      <TodoItemFunction />
    </div>
  );
}

export default App;
