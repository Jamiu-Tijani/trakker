import React, { useEffect, useState } from "react";
import "../Styles/Modal.css";
import { ImCancelCircle } from "react-icons/im";
import { CircularProgress } from "@mui/material";

const AddProduct = ({ handleAddPro }: any) => {
  return (
    <div className="modal">
      <form className="catModal">
        <div className="catModalTop">
          <h4>Add Product</h4>
          <ImCancelCircle className="catCancel" onClick={handleAddPro} />
        </div>
        <div className="line"></div>
        <div className="catModalInput branchInput">
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="Product Name" name="name" />
            <input type="text" placeholder="Description" name="description" />
          </div>
          <div className="div modalDouble addProduct">
            <input type="text" placeholder="Quantity" name="quantity" />

            <input
              type="text"
              placeholder="Unit Of Measurment"
              name="unitOfMeasure"
            />
          </div>
          <input type="text" placeholder="Unit Selling" name="selling" />
          <input type="text" placeholder="Category" name="category" />
        </div>

        <div className="catModalBtn">
          <button className="catBtn1">Add Product</button>
          <button className="catBtn2" onClick={handleAddPro}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
