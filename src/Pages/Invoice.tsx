import React from "react";
import "../Styles/invoice.css";

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
      <div className="midTable">
        <p>Account Details</p>
        <span>Account holder name: Pi-health limited</span>
        <span>Account number: 23154041</span>
        <span>Sort code: 20-55-41</span>
        <span>IBAN: GB86BUKB20554123154041</span>
        <span>SWIFTBIC: BUKBGB22</span>
      </div>
    </div>
  );
};

export default Invoice;
