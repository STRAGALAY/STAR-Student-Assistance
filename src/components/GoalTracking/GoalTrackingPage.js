import React, { useState, useEffect } from "react";

export default function GoalTrackingPage(props) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const prevTodos = localStorage.getItem("todos");
    if (prevTodos == null) {
      localStorage.setItem("todos", "[]");
      return;
    }

    setTodos(JSON.parse(prevTodos));
  }, []);

  function addTodo(event) {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, input];
    });

    const prevTodos = JSON.parse(localStorage.getItem("todos"));
    localStorage.setItem("todos", JSON.stringify([...prevTodos, input]));

    setInput("");
  }

  function handleKey(event) {
    if (event.key == "Enter") {
      addTodo(event);
    }
  }
  function onTodoClick(e) {
    const button = e.target;
    const buttonClass = button.classList[0];
    const todo = button.parentElement.parentElement.children[0];

    if (buttonClass === "complete-btn") {
      todo.classList.toggle("completed");
    } else if (buttonClass === "trash-btn") {
      setTodos((prevTodos) => {
        const newTodos = prevTodos.filter((t) => t != todo.innerText);
        localStorage.setItem("todos", JSON.stringify(newTodos));

        return newTodos;
      });
    }
  }

  // localStorage.setItem("todos", "[]");
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
        <button class="todo-button" onClick={addTodo}>
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
            <div className="todo" onClick={onTodoClick}>
              <div className="todo-item">{todo}</div>
              <div>
                <button className="complete-btn">Complete</button>
                <button className="trash-btn">Trash</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
