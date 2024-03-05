import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTask = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      const newTasks = [...tasks, trimmedValue];
      setTasks(newTasks);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default TodoList;
