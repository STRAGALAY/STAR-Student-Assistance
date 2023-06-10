import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NotesProvider } from "./contexts/NotesProvider";

// import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <Header />

    <BrowserRouter>
      <ThemeProvider theme={{}}>
        <NotesProvider>
          <App />
        </NotesProvider>
      </ThemeProvider>
    </BrowserRouter>

    {/* <Footer /> */}

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
  </>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
