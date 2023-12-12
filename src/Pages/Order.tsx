import React, { useEffect, useState } from "react";
import TopNav from "../layouts/TopNav";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../Styles/order.css";
import AddOrder from "../Components/AddOrder";
import { BsSearch, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ isOpen }: any) => {
  const [proAddModal, setProAddModal] = useState(false);

  const handleAddPro = () => {
    setProAddModal(!proAddModal);
  };

  return (
    <div className="board">
      <TopNav title="Buld Order" />
      <div className="product">
        <div className="catModalInput branchInput">
          <h3>Order details</h3>
          <div className="div modalDouble addPrroduct">
            <select name="name">
              <option value="">Select Product</option>
              <option value="">Biscuit</option>
              <option value="">Sweet</option>
              <option value="">RIce</option>
              <option value="">Card</option>
            </select>
          </div>
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="Quantity" name="quantity" />
            <input type="text" placeholder="Description" name="description" />
          </div>
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="User Name" name="unitOfMeasure" />
            <input
              type="text"
              placeholder="Phone Number"
              name="unitOfMeasure"
            />
          </div>
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="Pick up Location" name="selling" />

            <input type="text" placeholder="Drop of Location" name="category" />
          </div>
          <div className="productBtn">
            <button className="productBtn1">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Order Delivery
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="product">
        <div className="catModalInput branchInput">
          <h3>Track Order</h3>
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="Traking ID" name="unitOfMeasure" />
          </div>
          <button className="productBtn1">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Track
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
