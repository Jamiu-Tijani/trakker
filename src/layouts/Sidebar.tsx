import React from "react";
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
import "../Styles/SideBar.css";
import { Link } from "react-router-dom";

const navData = [
  {
    name: "Dashboard",
    icons: <RxDashboard />,
    link: "/dashboard",
  },
  {
    name: "Bulk Orders",
    icons: <GrAddCircle />,
    link: "/dashboard/order",
  },
  {
    name: "Sales",
    icons: <RxDashboard />,
    link: "/dashboard/sales",
  },
  {
    name: "Finance",
    icons: <GrHistory />,
    link: "/dashboard/price",
  },
];

const SideBar = ({ handleChange, isOpen, handleMenuItemClick }: any) => {
  const user = JSON.parse(window.localStorage.getItem("userData") as string);
  return (
    <div className={`${isOpen ? "activeSide" : "side"}`}>
      <div className="log">
        <img alt="" onClick={handleChange} className="ham" />
      </div>
      <div className="line"></div>

      <ul>
        {navData.map((nav, ind) => (
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
