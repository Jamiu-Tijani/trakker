import React, { useEffect, useState } from "react";
import TopNav from "../layouts/TopNav";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../Styles/order.css";
import AddOrder from "../Components/AddOrder";
import { BsSearch, BsPencil } from "react-icons/bs";

const Product = ({ isOpen }: any) => {
  const [proAddModal, setProAddModal] = useState(false);

  const handleAddPro = () => {
    setProAddModal(!proAddModal);
  };

  return (
    <div className="board">
      <TopNav title="Product" />
      <div className="product">
        <div className="productBtn">
          <button onClick={handleAddPro} className="productBtn1">
            <AiOutlinePlusCircle />
            Order Delivery
          </button>
        </div>
        <div className="method">
          <div className="apInput">
            <input
              type="text"
              placeholder="search"
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <BsSearch className="apIcon" />
          </div>
        </div>

        <div className="proDuctTable">
          <table className="inTable">
            <tr className="heTable poHead">
              <th className="sn">S/N</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Type/Categories</th>
              <th>Unit of Measurement</th>
              <th>Quantity</th>
            </tr>
            <tr className="Tbody">
              <td className="sn">1</td>
              <td>Biscuit</td>
              <td>Big</td>
              <td>500 </td>
              <td>snack</td>
              <td>number</td>
              <td>30</td>
            </tr>
            <tr className="Tbody">
              <td className="sn">2</td>
              <td>Rice</td>
              <td>Big</td>
              <td>1900 </td>
              <td>Food</td>
              <td>dirika</td>
              <td>70</td>
            </tr>
            <tr className="Tbody">
              <td className="sn">3</td>
              <td>Memory</td>
              <td>small</td>
              <td>2500 </td>
              <td>Tech</td>
              <td>ram</td>
              <td>10</td>
            </tr>
          </table>
        </div>
      </div>
      {proAddModal ? <AddOrder handleAddPro={handleAddPro} /> : null}
    </div>
  );
};

export default Product;
