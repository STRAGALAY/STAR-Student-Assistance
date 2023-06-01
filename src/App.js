import "./App.css";
import { useState, useEffect } from "react";

// npm set strict-ssl false

export default function App() {
  const [count, setCount] = useState(0);

  function handleKey(event) {
    console.log("as");
    
    // if (event.key == "Enter","a") {
    setCount((p) => p + 1); 
    // }
  }

  useEffect(() => {
    //
    document.addEventListener('keydown', handleKey)
  }, []);

  return (
    <div className="app" >
      <div >{count}</div>
      <button onClick={() => setCount((p) => p + 1)}>Up 1</button>
      <button onClick={() => setCount((p) => p - 1)}>Down 1</button>

      <a href="/goals">
        <button>aksdsadddd</button>
      </a>

      <div>alksjd</div>
    </div>
  );
}
