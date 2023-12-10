import React, { useState, useEffect } from "react";
import "../Styles/dashboard.css";
import TopNav from "../layouts/TopNav";
import {
  AiOutlineRise,
  AiOutlineInbox,
  AiOutlineCodeSandbox,
} from "react-icons/ai";
import { PiNoteDuotone } from "react-icons/pi";
import { IoIosCash } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";


const DashboardHome = () => {

 
  return (
    <div className="board">
      <TopNav title="Dashboard" />
      <div className="boardBody">
        <h2>Overview</h2>

        <div className="overview">
          <div className="overCon">
            <div className="viewItem">
              <div className="viewIcon">
                <PiNoteDuotone className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>Total LoadingSlip</h4>
                <p>20 </p>
              </div>
            </div>
            <div className="viewItem">
              <div className="viewIcon">
                <AiOutlineRise className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>Invoiced LoadingSlip</h4>
                <p>11</p>
              </div>
            </div>
            <div className="viewItem">
              <div className="viewIcon">
                <IoIosCash className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>Not Invoiced LoadingSlip</h4>
                <p>10</p>
              </div>
            </div>
          </div>
          <div className="overCon">
            <div className="viewItem">
              <div className="viewIcon">
                <AiOutlineInbox className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>Total Requisitions</h4>
                <p>40 </p>
              </div>
            </div>
            <div className="viewItem">
              <div className="viewIcon">
                <AiOutlineCodeSandbox className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>Approve Requisitions</h4>
                <p>20</p>
              </div>
            </div>
            <div className="viewItem">
              <div className="viewIcon">
                <AiOutlineCodeSandbox className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>UnApprove Requisitions</h4>
                <p>7</p>
              </div>
            </div>
            <div className="viewItem">
              <div className="viewIcon">
                <FiRefreshCw className="viewIcons" />
              </div>
              <div className="viewText">
                <h4>Cancelled Requisition </h4>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
