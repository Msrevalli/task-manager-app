import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask } from './api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  const handleAddTask = () => {
    const newTask = { title, priority: 'Low', status: 'To Do' };
    createTask(newTask).then(() => fetchTasks().then((res) => setTasks(res.data)));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
