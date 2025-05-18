import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <h1 className="text-center bg-info text-dark p-3">To Do App</h1>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
