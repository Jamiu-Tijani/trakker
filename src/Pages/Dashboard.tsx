import React, { useState } from "react";
import SideBar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import "../Styles/dashboard.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = () => {
    setIsOpen(true); 
  };

  return (
    <div className="fullBoard">
      <SideBar handleChange={handleChange} isOpen={isOpen}  handleMenuItemClick={handleMenuItemClick} />
      <div className={`${isOpen ? "boardPartAct" : "boardPart"}`}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
