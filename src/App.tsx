import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";

import Dashboard from "./Pages/Dashboard";
import DashboardHome from "./Pages/DashboardHome";
import Order from "./Pages/Order";
import Confirm from "./Pages/Confirm";
import Sales from "./Pages/Sales";
import Finance from "./Pages/Finance";

function App() {
  const token = window.localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Order />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="sales" element={<Sales />} />
          <Route path="finace" element={<Finance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
