import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import GoalTrackingPage from "./components/GoalTracking/GoalTrackingPage";
import Dashboard from "./components/Dashboard/Dashboard";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import NoteGroup from "./components/Dashboard/NoteGroup";
import { Routes, Route } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        {/* <Footer /> */}
      </>
    ),
  },
  { path: "/asd", element: <div>Bruh</div> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/note/:category", element: <NoteGroup /> },
  { path: "/goals", element: <GoalTrackingPage /> },
  { path: "*", element: <div>Nothing</div> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
