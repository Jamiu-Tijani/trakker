import React from "react";
import "../Styles/Modal.css";
import { ImCancelCircle } from "react-icons/im";

const FinanceApprove = () => {
  return (
    <div className="modal">
      <div className="catModal">
        <div className="catModalTop">
          <h4>Clear Order</h4>
          <ImCancelCircle className="catCancel"  />
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default FinanceApprove;
