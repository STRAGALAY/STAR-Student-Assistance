import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, input];
    });
    setInput("");
  }

  function handleKey(event) {
    if (event.key == 'Enter') {
      addTodo(event)
    }
  }

  return (
    <div className="goalspage">
      <header className="todo-header">
        <h1>FT and GN Todo List</h1>
      </header>
      <div className="todo-form">
        <input
          type="text"
          class="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          class="todo-button"
          onClick={addTodo}
          
        >
          Add
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
      <div class="todo-container">
        <ul class="todo-list">
          {todos.map((todo) => (
            <div>{todo}</div>
          ))}
        </ul>
      </div>
      <a href="/">
        <button>home</button>
      </a>
    </div>
  );
}
    