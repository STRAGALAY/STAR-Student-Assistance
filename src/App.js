import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import GoalTrackingPage from "./components/GoalTracking/GoalTrackingPage";
import NoteGroup from "./components/Dashboard/NoteGroup";

// npm set strict-ssl false

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/asd" element={<div>Bruh</div>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/goals" element={<GoalTrackingPage />} />
      <Route path="/note/:category" element={<NoteGroup />} />
    </Routes>
  );
}

function Home() {
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
            src="https://images.ctfassets.net/9haz2glq4wt0/3xY2T0RH0qoiyJWD0SS0CI/b4b3949bdf1420e9c34200f6d7429a12/1_14H3oKuTWKAhO95WRu3xzA.png"
            // width="500"
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

      <div className="app">
        <div className="homepage-panel-1">
          <div className="side right-side">
            <img
              className="dashboard-img"
              src="https://images.ctfassets.net/9haz2glq4wt0/3xY2T0RH0qoiyJWD0SS0CI/b4b3949bdf1420e9c34200f6d7429a12/1_14H3oKuTWKAhO95WRu3xzA.png"
              // width="500"
            />
          </div>

          <div className="side left-side">
            <div className="headertop">Seamless collaboration, from anywhere</div>
            <div className="headerbot">
              Edit together in real-time with easy sharing, and use comments, suggestions, and
              action items to keep things moving. Or use @-mentions to pull relevant people, files,
              and events into your online Docs for rich collaboration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
