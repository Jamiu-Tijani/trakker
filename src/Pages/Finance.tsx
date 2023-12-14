import React, { useEffect, useState } from "react";
import TopNav from "../layouts/TopNav";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../Styles/order.css";
import AddOrder from "../Components/AddOrder";
import { BsSearch, BsPencil } from "react-icons/bs";
import CheckOrder from "../Components/CheckOrder";
import FinanceApprove from "../Components/FinanceApprove";

const Finance = () => {
  const [proAddModal, setProAddModal] = useState(false);

  const handleAddPro = () => {
    setProAddModal(!proAddModal);
  };
  return (
    <div className="board">
      <TopNav title="Finance" />
      <div className="product">
        <div className="method" style={{ marginTop: "2em" }}>
          <div className="apInput">
            <input type="text" placeholder="search" />
            <BsSearch className="apIcon" />
          </div>
        </div>

        <div className="proDuctTable">
          <table className="inTable">
            <tr onClick={handleAddPro} className="heTable poHead">
              <th className="sn">S/N</th>
              <th>Product Name</th>
              <th>Tracking Number</th>
              <th>Sales</th>
              <th>Status</th>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">1</td>
              <td>Biscuit</td>
              <td>23486</td>
              <td>Complete</td>
              <td>pending</td>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">2</td>
              <td>Rice</td>
              <td>23486</td>
              <td>Complete</td>
              <td>pending</td>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">3</td>
              <td>Memory</td>
              <td>23486</td>
              <td>Complete</td>
              <td>pending</td>
            </tr>
          </table>
        </div>
      </div>
      {proAddModal ? <FinanceApprove handleAddPro={handleAddPro} /> : null}
    </div>
  );
};

export default Finance;
