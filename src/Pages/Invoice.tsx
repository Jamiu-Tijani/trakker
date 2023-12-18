import React from "react";
import "../Styles/invoice.css"

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="topIn">
        <div>
          <div className="topLogo">A</div>
          <p>Invoice Number: 127</p>
          <span>Data: 12/12/2023</span>
        </div>

        <h2>Invoice Slip</h2>
      </div>
    </div>
  );
};

export default Invoice;
