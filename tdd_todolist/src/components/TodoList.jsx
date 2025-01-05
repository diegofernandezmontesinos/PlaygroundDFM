import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");


  const addTask =() => {
    if (input.trim()) {
        setTasks([...tasks, { text: input, completed: false }]);
        setInput('');
      }
  }

  const completeTask = (index) => {
    const updatedTask = [...tasks]
    updatedTask[index].completed = !updatedTask[index].completed
    setTasks(updatedTask)
  }

  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  const editTask = (index, newText) => {
    const updatedTask = [...tasks]
    updatedTask[index].text = newText
    setTasks(updatedTask)
  }

  const pendingTaks = tasks.filter((task) => !task.completed).length
  return (
    <>
      <div>Todo List</div>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            </span>
            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTask(index, prompt("Edit task:", task.text) || task.text)}>Edit a task</button>
            </li>
        ))}
      </ul>
      <p>Pending Tasks: {pendingTaks} </p>
    </>
  );
};

export default TodoList;
