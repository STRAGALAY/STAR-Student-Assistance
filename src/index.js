import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import TodoForm from "./components/GoalTracking/Goalsorsoemthing";
import Dashboard from "./components/Dashboard/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
        {/* <Footer /> */}
      </>
    ),
  },
  { path: "/asd", element: <div>Bruh</div> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/goals", element: <TodoForm /> },
  { path: "*", element: <div>Nothing</div> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
