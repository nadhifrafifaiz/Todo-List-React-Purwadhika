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
  const kegiatan = "Makan";

  return (
    <div>
      <h1>Todo List</h1>
      <TodoItem todoData={{ activity: "Lari", id: 1 }} />
      <TodoItem todoData={{ activity: "Mandi", id: 2 }} />

      <TodoItemFunction todoData={{ activity: "Jalan", id: 2 }} />
    </div>
  );
}

export default App;
