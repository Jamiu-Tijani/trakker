import React from "react";
import TopNav from "../layouts/TopNav";
import "../Styles/track.css";
import "../Styles/order.css";
import { Link } from "react-router-dom";
import { FaRegMap } from "react-icons/fa";

const Tracking = () => {
  const orderNumber = <p style={{ color: "blue" }}>#22346</p>;

  return (
    <div className="board">
      <TopNav title={`Track Order ${orderNumber.props.children}`} />

      <div className="product">
        <div className="proc">
          <h2>Tracking Process</h2>

          <div className="progress">
            <div className="proCircle">
              <div className="ciDetails">
                <FaRegMap />
                <p>Sales check</p>
              </div>
            </div>
            <div className="proLines"></div>
            <div className="proCircle"></div>
            <div className="proLines"></div>
            <div className="proCircle"></div>
            <div className="proLines"></div>
            <div className="proCircle"></div>
            <div className="proLines"></div>
            <div className="proCircle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
