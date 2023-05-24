import "./App.css";
import { useState, useEffect } from "react";

// npm set strict-ssl false

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //
  }, []);

  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={() => setCount((p) => p + 1)}>Up 1</button>
      <button onClick={() => setCount((p) => p - 1)}>Down 1</button>
      <a href="/something">
        <button>aksdsad</button>
      </a>

      <div>alksjd</div>
    </div>
  );
}
