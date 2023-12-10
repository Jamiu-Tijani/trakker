import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";

import Dashboard from "./Pages/Dashboard";
import DashboardHome from "./Pages/DashboardHome";

function App() {
  const token = window.localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
