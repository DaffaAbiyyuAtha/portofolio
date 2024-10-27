import React from "react";
import './App.css';
import About from "./page/About";
import Index from "./page/Index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
