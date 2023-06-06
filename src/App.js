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
        <button className="goals-button">
        <img
              className="goalspic"
              src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?t=st=1685989671~exp=1685990271~hmac=cef3442898edaa479d462947089e4c953c0bf35d8da91a6f34374cfacdd2fe08"
              width="85"
              height="85"
              
            ></img></button>
      </a>

      <div>alksjd</div>
    </div>
  );
}
