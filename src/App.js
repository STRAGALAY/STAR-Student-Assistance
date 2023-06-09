import "./App.css";
import { Button } from "@mui/material";

// npm set strict-ssl false

export default function App() {
  return (
    <div className="app">
      <div className="homepage-panel-1">
        <div className="side left-side">
          <div className="headertop">Build your best ideas together, in FT GN Notes App</div>
          <div className="headerbot">Create local documents in real-time and from any device.</div>

          <a href="/dashboard">
            <Button variant="contained" className="notes-direct">
              Go to Notes
            </Button>
          </a>
        </div>

        <div className="side right-side">
          <img
            className="dashboard-img"
            src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?t=st=1685989671~exp=1685990271~hmac=cef3442898edaa479d462947089e4c953c0bf35d8da91a6f34374cfacdd2fe08"
            width="85"
            height="85"
          />
        </div>
      </div>

      {/* goals popup */}
      <a href="/goals">
        <button className="goals-button">
          <img
            className="goalspic"
            src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?t=st=1685989671~exp=1685990271~hmac=cef3442898edaa479d462947089e4c953c0bf35d8da91a6f34374cfacdd2fe08"
            width="85"
            height="85"
          />
        </button>
      </a>
    </div>
  );
}
