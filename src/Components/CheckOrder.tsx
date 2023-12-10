import React, { useEffect, useState } from "react";
import "../Styles/Modal.css";
import { ImCancelCircle } from "react-icons/im";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const CheckOrder = ({ handleAddPro }: any) => {
  return (
    <div className="modal">
      <div className="catModal">
        <div className="catModalTop">
          <h4>Clear Order</h4>
          <ImCancelCircle className="catCancel" onClick={handleAddPro} />
        </div>
        <div className="line"></div>
        <div className="catModalInput branchInput">
          <h3>Product details</h3>
          <select name="name">
            <option value="">Select Product</option>
            <option value="" selected>
              Biscuit
            </option>
            <option value="">Sweet</option>
            <option value="">RIce</option>
            <option value="">Card</option>
          </select>
          <div className="div modalDouble addProduct">
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              value="20"
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              value="big"
            />
          </div>

          <div className="line"></div>
          <h3>Product details</h3>

          <div className="div modalDouble addProduct">
            <input
              type="text"
              placeholder="User Name"
              name="unitOfMeasure"
              value="Jamo"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="unitOfMeasure"
              value="0987654321"
            />
          </div>
          <div className="div modalDouble addProduct">
            <input
              type="text"
              placeholder="Pick up Location"
              name="selling"
              value="Sango"
            />

            <input
              type="text"
              placeholder="Drop of Location"
              name="category"
              value="Ota"
            />
          </div>
        </div>

        <div className="catModalBtn">
          <button className="catBtn1" style={{ width: "120px" }}>
            Accept
          </button>
          <button className="catBtn3">Modify</button>
          <button className="catBtn2" onClick={handleAddPro}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
