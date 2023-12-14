import React, { useEffect, useState } from "react";
import "../Styles/Modal.css";
import { ImCancelCircle } from "react-icons/im";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const CheckOrder = ({ handleAddPro }: any) => {
  const [valueInput, setValueInput] = useState(false);
  const [productName, setProductName] = useState("Biscuit");
  const [quantity, setQuantity] = useState("60");
  const [description, setDescription] = useState("big");
  const [userName, setUserName] = useState("Jamo");
  const [phoneNumber, setPhoneNumber] = useState("0987654321");
  const [pickupLocation, setPickupLocation] = useState("Sango");
  const [dropoffLocation, setDropoffLocation] = useState("Ota");

  const handleInputChange = () => {
    setValueInput(true);
  };

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
          <select
            name="name"
            value={productName}
            style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
            onChange={(e) => setProductName(e.target.value)}
          >
            <option value="">Select Product</option>
            <option value="Biscuit">Biscuit</option>
            <option value="Sweet">Sweet</option>
            <option value="Rice">Rice</option>
            <option value="Card">Card</option>
          </select>
          <div className="div modalDouble addProduct">
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
              value={quantity}
              readOnly={!valueInput}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
              value={description}
              readOnly={!valueInput}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <h3>User details</h3>

          <div className="div modalDouble addProduct">
            <input
              type="text"
              placeholder="User Name"
              name="unitOfMeasure"
              value={userName}
              style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
              readOnly={!valueInput}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="unitOfMeasure"
              style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
              value={phoneNumber}
              readOnly={!valueInput}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="div modalDouble addProduct">
            <input
              type="text"
              placeholder="Pick up Location"
              name="selling"
              style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
              value={pickupLocation}
              readOnly={!valueInput}
              onChange={(e) => setPickupLocation(e.target.value)}
            />

            <input
              type="text"
              placeholder="Drop of Location"
              name="category"
              style={{ backgroundColor: valueInput ? "white" : "#f5f5f5" }}
              value={dropoffLocation}
              readOnly={!valueInput}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="catModalBtn">
          <button
            className="catBtn1"
            style={{ width: "120px" }}
            onClick={handleAddPro}
          >
            Accept
          </button>
          <button className="catBtn3" onClick={handleInputChange}>
            Modify
          </button>
          <button className="catBtn2" onClick={handleAddPro}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
