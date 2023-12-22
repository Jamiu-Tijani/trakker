import React, { useState } from "react";
import TopNav from "../layouts/TopNav";
import "../Styles/order.css";
import { BsSearch } from "react-icons/bs";
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
              <th>Tracking Number</th>
              <th>Product Name</th>
              <th>Order Status</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">1</td>
              <td>23486</td>
              <td>Biscuit</td>
              <td style={{ color: "green", fontWeight: "800" }}>Complete</td>
              <td style={{ color: "red", fontWeight: "800" }}>Not Recieved</td>
              <td>pending</td>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">2</td>
              <td>23486</td>
              <td>Rice</td>
              <td style={{ color: "green", fontWeight: "800" }}>Complete</td>
              <td style={{ color: "orange", fontWeight: "800" }}>
                On Delivery
              </td>
              <td>pending</td>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">3</td>
              <td>23486</td>
              <td>Memory</td>
              <td style={{ color: "green", fontWeight: "800" }}>Complete</td>
              <td style={{ color: "red", fontWeight: "800" }}>Not Recieved</td>
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
