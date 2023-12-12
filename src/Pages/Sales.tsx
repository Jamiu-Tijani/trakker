import React, { useEffect, useState } from "react";
import TopNav from "../layouts/TopNav";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../Styles/order.css";
import AddOrder from "../Components/AddOrder";
import { BsSearch, BsPencil } from "react-icons/bs";
import CheckOrder from "../Components/CheckOrder";

const Sales = ({ isOpen }: any) => {
  const [proAddModal, setProAddModal] = useState(false);

  const handleAddPro = () => {
    setProAddModal(!proAddModal);
  };

  return (
    <div className="board">
      <TopNav title="Sales" />
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
              <th>Description</th>
              <th>Unit Price</th>
              <th>Type/Categories</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">1</td>
              <td>Biscuit</td>
              <td>Big</td>
              <td>500 </td>
              <td>snack</td>
              <td>30</td>
              <td>pending</td>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">2</td>
              <td>Rice</td>
              <td>Big</td>
              <td>1900 </td>
              <td>Food</td>
              <td>70</td> <td>pending</td>
            </tr>
            <tr onClick={handleAddPro} className="Tbody">
              <td className="sn">3</td>
              <td>Memory</td>
              <td>small</td>
              <td>2500 </td>
              <td>Tech</td>
              <td>10</td> <td>pending</td>
            </tr>
          </table>
        </div>
      </div>
      {proAddModal ? <CheckOrder handleAddPro={handleAddPro} /> : null}
    </div>
  );
};

export default Sales;
