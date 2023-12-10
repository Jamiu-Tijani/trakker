import React, { useState } from "react";
import { RxDashboard, RxActivityLog } from "react-icons/rx";
import { GrAddCircle, GrHistory, GrNotes } from "react-icons/gr";
import { TbHistory, TbUsersGroup } from "react-icons/tb";
import { PiNotepadBold, PiNotePencil } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import {
  AiOutlineBank,
  AiOutlineUsergroupAdd,
  AiOutlineSetting,
} from "react-icons/ai";
// import logo from "../asset/Image/logo1.png";
// import menu from "../asset/Image/menu.png";
import "../Styles/SideBar.css";
import { Link } from "react-router-dom";

const navData = [
  {
    name: "Dashboard",
    icons: <RxDashboard />,
    link: "/dashboard",
  },
  {
    name: "Product",
    icons: <GrAddCircle />,
    link: "/dashboard/product",
  },
  {
    name: "Quantity Update history",
    icons: <RxDashboard />,
    link: "/dashboard/quantity",
  },
  {
    name: "Price Update History",
    icons: <GrHistory />,
    link: "/dashboard/price",
  },
  {
    name: "Customer",
    icons: <TbUsersGroup />,
    link: "/dashboard/customer",
  },
  {
    name: "Create Requisition",
    icons: <GrNotes />,
    link: "/dashboard/requisition",
  },
  {
    name: "Approval",
    icons: <TbHistory />,
    link: "/dashboard/approve",
  },
  {
    name: "Loading Slip",
    icons: <PiNotepadBold />,
    link: "/dashboard/loadingtable",
  },
  {
    name: "Invoice",
    icons: <PiNotePencil />,
    link: "/dashboard/invoicetable",
  },
  {
    name: "Report",
    icons: <MdOutlineEventNote />,
    link: "/dashboard/report",
  },
  {
    name: "Activity Log",
    icons: <RxActivityLog />,
    link: "/dashboard/activitylogs",
  },
  {
    name: "Bank",
    icons: <AiOutlineBank />,
    link: "/dashboard/bank",
  },
  {
    name: "Transport",
    icons: <FiTruck />,
    link: "/dashboard/transport",
  },
  {
    name: "User Account Profile",
    icons: <AiOutlineUsergroupAdd />,
    link: "/dashboard/userstaff",
  },
  {
    name: "Settings",
    icons: <AiOutlineSetting />,
    link: "/dashboard/settings",
  },
];

const SeniorStaffnavData = [
  {
    name: "Dashboard",
    icons: <RxDashboard />,
    link: "/dashboard",
  },
  {
    name: "Product",
    icons: <GrAddCircle />,
    link: "/dashboard/product",
  },

  {
    name: "Customer",
    icons: <TbUsersGroup />,
    link: "/dashboard/customer",
  },
  {
    name: "Create Requisition",
    icons: <GrNotes />,
    link: "/dashboard/requisition",
  },
  {
    name: "Loading Slip",
    icons: <PiNotepadBold />,
    link: "/dashboard/loadingtable",
  },
  {
    name: "Invoice",
    icons: <PiNotePencil />,
    link: "/dashboard/invoicetable",
  },
  {
    name: "Bank",
    icons: <AiOutlineBank />,
    link: "/dashboard/bank",
  },
  {
    name: "Transport",
    icons: <FiTruck />,
    link: "/dashboard/transport",
  },
  {
    name: "User Account Profile",
    icons: <AiOutlineUsergroupAdd />,
    link: "/dashboard/userstaff",
  },
];
const StaffnavData = [
  {
    name: "Dashboard",
    icons: <RxDashboard />,
    link: "/dashboard",
  },
  {
    name: "Product",
    icons: <GrAddCircle />,
    link: "/dashboard/product",
  },
  {
    name: "Customer",
    icons: <TbUsersGroup />,
    link: "/dashboard/customer",
  },
  {
    name: "Create Requisition",
    icons: <GrNotes />,
    link: "/dashboard/requisition",
  },
  {
    name: "Loading Slip",
    icons: <PiNotepadBold />,
    link: "/dashboard/loadingtable",
  },
  {
    name: "Invoice",
    icons: <PiNotePencil />,
    link: "/dashboard/invoicetable",
  },
  {
    name: "Report",
    icons: <MdOutlineEventNote />,
    link: "/dashboard/report",
  },

  {
    name: "Bank",
    icons: <AiOutlineBank />,
    link: "/dashboard/bank",
  },
  {
    name: "Transport",
    icons: <FiTruck />,
    link: "/dashboard/transport",
  },
  {
    name: "User Account Profile",
    icons: <AiOutlineUsergroupAdd />,
    link: "/dashboard/userstaff",
  },
];

const SideBar = ({ handleChange, isOpen, handleMenuItemClick }: any) => {
  const user = JSON.parse(window.localStorage.getItem("userData") as string);
  return (
    <div className={`${isOpen ? "activeSide" : "side"}`}>
      <div className="log">
        <img alt="" className="logoImg" />
        <img alt="" onClick={handleChange} className="ham" />
      </div>
      <div className="line"></div>

      <ul>
        {user.account.role === "admin"
          ? navData.map((nav, ind) => (
              <li key={ind} onClick={handleMenuItemClick}>
                <Link to={`${nav.link}`}>
                  {nav.icons} <span>{nav.name}</span>
                </Link>
              </li>
            ))
          : user.account.role === "seniorStaff"
          ? SeniorStaffnavData.map((nav, ind) => (
              <li key={ind} onClick={handleMenuItemClick}>
                <Link to={`${nav.link}`}>
                  {nav.icons} <span>{nav.name}</span>
                </Link>
              </li>
            ))
          : StaffnavData.map((nav, ind) => (
              <li key={ind} onClick={handleMenuItemClick}>
                <Link to={`${nav.link}`}>
                  {nav.icons} <span>{nav.name}</span>
                </Link>
              </li>
            ))}

        <div className="line"></div>

        <li>
          <Link to="/">
            <GoSignOut style={{ color: "red" }} />
            <span style={{ color: "red" }}>Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
