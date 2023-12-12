import React from "react";
import TopNav from "../layouts/TopNav";
import "../Styles/track.css";
import "../Styles/order.css";
import { Link } from "react-router-dom";
import { FaRegMap, FaUncharted } from "react-icons/fa";
import { CiBookmarkCheck, CiCreditCard1 } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";

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
                <CiBookmarkCheck style={{ fontSize: "40px" }} />
                <p>Order </p>
              </div>
            </div>
            <div className="proLines"></div>
            <div className="proCircle">
              <div className="ciDetails">
                <FaUncharted style={{ fontSize: "40px" }} />
                <p>Sales </p>
              </div>
            </div>
            <div className="proLines"></div>
            <div className="proCircle">
              <div className="ciDetails">
                <CiCreditCard1 style={{ fontSize: "40px" }} />
                <p>Finance </p>
              </div>
            </div>
            <div className="proLines"></div>
            <div className="proCircle">
              <div className="ciDetails">
                <FaListCheck style={{ fontSize: "40px" }} />
                <p>Order</p>
              </div>
            </div>
            <div className="proLines"></div>
            <div className="proCircle">
              <div className="ciDetails">
                <CiBookmarkCheck style={{ fontSize: "40px" }} />
                <p>Delivered</p>
              </div>
            </div>
          </div>
        </div>
        <div className="proc">
            
        </div>
      </div>
    </div>
  );
};

export default Tracking;
