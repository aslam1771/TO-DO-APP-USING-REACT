import React, { useState, useEffect } from 'react';
import './Todo.css';
import Addtask from '../Addtask';
import List from './List';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`;
  }, [tasks]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <>
      <div className='todo-container'>
        <div className='header'>To DO APP</div>
        <div className='add-task'>
          <Addtask addTask={addTask} />
        </div>
        <div className='tasks'>
          {tasks.map((task, index) => (
            <List key={index} task={task} removeTask={removeTask} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;



