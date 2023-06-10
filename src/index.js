import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NotesProvider } from "./contexts/NotesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />

    <BrowserRouter>
      <ThemeProvider theme={{}}>
        <NotesProvider>
          <App />
        </NotesProvider>
      </ThemeProvider>
    </BrowserRouter>

    {/* <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
