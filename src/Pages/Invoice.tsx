import React from "react";
import "../Styles/invoice.css";
import html2pdf from "html2pdf.js";

const Invoice = () => {
  const generatePDF = () => {
    const slipElement = document.querySelector(".invoice");

    if (slipElement) {
      const pdfOptions = {
        margin: 2,
        filename: "invoice.pdf",
        image: { type: "png" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(slipElement).set(pdfOptions).save();
    }
  };

  return (
    <div className="dd">
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
        <div className="midTab">
          <table>
            <tr className="mTableHe">
              <th>Item</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Tax</th>
              <th>Amount</th>
            </tr>
            <br />
            <tr className="mTableBe">
              <td>Toy</td>
              <td>03</td>
              <td>$500</td>
              <td>0.00</td>
              <td>$500</td>
            </tr>
            <br />
            <tr className="mTableBe">
              <td>Drug Paracetamol</td>
              <td>02</td>
              <td>$50</td>
              <td>0.00</td>
              <td>$50</td>
            </tr>
          </table>
        </div>

        <div className="ttotal">
          <div className="tPri">
            <h3>SubTotal:</h3>
            <p>$550.0</p>
          </div>
          <div className="tPri">
            <h3>Discount:</h3>
            <p>$0.00</p>
          </div>
          <div className="tPri">
            <h3>Tax:</h3>
            <p>$0.00</p>
          </div>
          <div className="tPri">
            <h3>Paid:</h3>
            <p>$0.00</p>
          </div>
        </div>
        <div className="llinee"></div>

        <div className="suTop">$550</div>
      </div>
      <button onClick={generatePDF}>Printt</button>
    </div>
  );
};

export default Invoice;
