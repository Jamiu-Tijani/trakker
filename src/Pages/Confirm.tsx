import React from "react";
import TopNav from "../layouts/TopNav";
import "../Styles/confirm.css";
import { AiTwotonePicture } from "react-icons/ai";

const Confirm = () => {
  return (
    <div className="board">
      <TopNav title="Product" />

      <h2 style={{margin:"2em 0 0 2em"}}>Order Details</h2>
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
            <p>Peding</p>
          </div>
        </div>
        <div className="productImage">
          <AiTwotonePicture className="imgIcon" />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
