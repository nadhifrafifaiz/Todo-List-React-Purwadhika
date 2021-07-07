import logo from './logo.svg';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoPage from './pages/TodoPage';
import Navbar from './components/MyNavbar';
import React from 'react';
import { render } from 'react-dom';


// Props
// -Data dari parent ke child component
// -Parent component yang membungkus child component

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <TodoPage />
      </div>
    )
  }
}


export default App;
