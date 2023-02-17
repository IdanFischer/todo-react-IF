import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <TaskAdd 
        tasks={tasks}
        setTasks={setTasks}
        />
        <TaskList 
        tasks={tasks}
        setTasks={setTasks}
        />
      </header>
    </div>
  );
}

export default App;
