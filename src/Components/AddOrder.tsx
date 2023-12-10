import React, { useEffect, useState } from "react";
import "../Styles/Modal.css";
import { ImCancelCircle } from "react-icons/im";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const AddProduct = ({ handleAddPro }: any) => {
  return (
    <div className="modal">
      <form className="catModal">
        <div className="catModalTop">
          <h4>Order</h4>
          <ImCancelCircle className="catCancel" onClick={handleAddPro} />
        </div>
        <div className="line"></div>
        <div className="catModalInput branchInput">
          <h3>Product details</h3>
          <select name="name">
            <option value="">Select Product</option>
            <option value="">Biscuit</option>
            <option value="">Sweet</option>
            <option value="">RIce</option>
            <option value="">Card</option>
          </select>
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="Quantity" name="quantity" />
            <input type="text" placeholder="Description" name="description" />
          </div>

          <div className="line"></div>
          <h3>Product details</h3>

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
        </div>

        <div className="catModalBtn">
          <button className="catBtn1">
            <Link to="/dashboard/confirm" style={{ color: "#fff" }}>
              Confirm Order
            </Link>
          </button>
          <button className="catBtn2" onClick={handleAddPro}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
