import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [todos, setTodos] = useState([]);

  return (
    <div className = "goalspage">
      <header>
        <h1>FT and GN Todo List</h1>
      </header>
      <form>
        <input type="text" class="todo-input" />
        <button class="todo-button" type="submit">
          Add
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div class="todo-container">
        <ul class="todo-list"></ul>
      </div>
      <a href="/">
        <button>home</button>
      </a>
    </div>
    
  );
}
