import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
