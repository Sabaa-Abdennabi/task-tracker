import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

import { useState } from 'react';


function App() {
  const [showAddTask, setshowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc Appointement',
      day: 'today',
      reminder: true
    }, {
      id: 2,
      text: 'Shppoing',
      day: 'tomorrow',
      reminder: true,
    }, {
      id: 3,
      text: 'Pick the kids',
      day: '11th of august',
      reminder: false,
    }])
  //add task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  //delete task 
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder 
  const toogleReminder = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )))
  }
  return (
    <div className='Container'>
      <Header Add={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} /> : 'No tasks to show'}
      <Footer />

    </div>
  );
}

export default App;
