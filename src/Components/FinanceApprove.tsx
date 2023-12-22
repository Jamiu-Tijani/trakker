import React from "react";
import "../Styles/Modal.css";
import { ImCancelCircle } from "react-icons/im";
import pop from "../pop.jpeg";

const FinanceApprove = ({ handleAddPro }: any) => {

  return (
    <div className="modal">
      <div className="catModal">
        <div className="catModalTop">
          <h4>Clear Order</h4>
          <ImCancelCircle className="catCancel" onClick={handleAddPro} />
        </div>
        <div className="line"></div>

        <div className="catModalInput branchInput">
          <h3>Sales Report</h3>

          <div className="det">
            <div className="orDetails">
              <div className="detailsCap">
                <h2>Name:</h2>
                <p>Biscuit</p>
              </div>
              <div className="detailsCap">
                <h2>Description:</h2>
                <p>Big</p>
              </div>
              <div className="detailsCap">
                <h2>Quantity:</h2>
                <p>300</p>
              </div>
              <div className="detailsCap">
                <h2>Weight:</h2>
                <p>70kg</p>
              </div>
              <div className="detailsCap">
                <h2>Pick Up:</h2>
                <p>Oyingbo</p>
              </div>
              <div className="detailsCap">
                <h2>Drop Off:</h2>
                <p>Sanngo</p>
              </div>
              <div className="detailsCap">
                <h2>Owner:</h2>
                <p>Jamo</p>
              </div>
              <div className="detailsCap">
                <h2>Driver:</h2>
                <p>Egbon</p>
              </div>
              <div className="detailsCap">
                <h2>Status:</h2>
                <p>Confirmed</p>
              </div>
            </div>
          </div>

          <h3>Prove of Payment </h3>
          <div className="pop">
            <img src={pop} alt="" />
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
          <button className="catBtn2" onClick={handleAddPro}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceApprove;
