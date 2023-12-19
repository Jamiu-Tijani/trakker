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
    <div>
      <div
        style={{
          width: "600px",
          margin: "auto",
          border: "1px solid #0b77c5",
          padding: "2.5em 1em 1em",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            borderBottom: "1.5px solid #3e5477",
            paddingBottom: "2em",
          }}
        >
          <div>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "7px",
                backgroundColor: "#3e5477",
                fontWeight: "bolder",
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              A
            </div>
            <p
              style={{
                margin: "0.6em 0 0",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              Invoice Number: 127
            </p>
            <span style={{ fontWeight: "400", fontSize: "14px" }}>
              Data: 12/12/2023
            </span>
          </div>
          <h2 style={{ color: "#3e5477", fontSize: "27px", fontWeight: "900" }}>
            Invoice Slip
          </h2>
        </div>
        <div
          style={{
            margin: "2em 0 0",
            display: "flex",
            flexDirection: "column",
            borderBottom: "1.5px solid #3e5477",
            paddingBottom: "2em",
          }}
        >
          <p
            style={{
              fontWeight: "800",
              fontSize: "18px",
              margin: "0 0 0.4em",
              color: "#3e5477",
            }}
          >
            Account Details
          </p>
          <span style={{ marginBottom: "0.3em" }}>
            Account holder name: Pi-health limited
          </span>
          <span style={{ marginBottom: "0.3em" }}>
            Account number: 23154041
          </span>
          <span style={{ marginBottom: "0.3em" }}>Sort code: 20-55-41</span>
          <span style={{ marginBottom: "0.3em" }}>
            IBAN: GB86BUKB20554123154041
          </span>
          <span style={{ marginBottom: "0.3em" }}>SWIFTBIC: BUKBGB22</span>
        </div>
        <div style={{ width: "100%" }}>
          <table style={{ width: "100%" }}>
            <tr style={{ color: "#3e5477", textAlign: "right" }}>
              <th>Item</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Tax</th>
              <th>Amount</th>
            </tr>
            <br />
            <tr
              style={{
                color: "#3e5477",
                textAlign: "right",
                marginBottom: "1em",
              }}
            >
              <td style={{ width: "40%", textAlign: "left" }}>Toy</td>
              <td>03</td>
              <td>$500</td>
              <td>0.00</td>
              <td>$500</td>
            </tr>
            <br />
            <tr
              style={{
                color: "#3e5477",
                textAlign: "right",
                marginBottom: "1em",
              }}
            >
              <td style={{ width: "40%", textAlign: "left" }}>
                Drug Paracetamol
              </td>
              <td>02</td>
              <td>$50</td>
              <td>0.00</td>
              <td>$50</td>
            </tr>
          </table>
        </div>
        <div style={{ width: "200px", marginLeft: "auto", marginTop: "2em" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.3em",
            }}
          >
            <h3 style={{ margin: "0", color: "#3e5477" }}>SubTotal:</h3>
            <p style={{ margin: "0", fontWeight: "700" }}>$550.0</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.3em",
            }}
          >
            <h3 style={{ margin: "0", color: "#3e5477" }}>Discount:</h3>
            <p style={{ margin: "0", fontWeight: "700" }}>$0.00</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.3em",
            }}
          >
            <h3 style={{ margin: "0", color: "#3e5477" }}>Tax:</h3>
            <p style={{ margin: "0", fontWeight: "700" }}>$0.00</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.3em",
            }}
          >
            <h3 style={{ margin: "0", color: "#3e5477" }}>Paid:</h3>
            <p style={{ margin: "0", fontWeight: "700" }}>$0.00</p>
          </div>
        </div>
        <div style={{ borderBottom: "1.5px solid #3e5477" }}></div>
        <div
          style={{
            width: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginTop: "0.4em",
            fontSize: "24px",
            backgroundColor: "#3e5477",
            color: "#fff",
            padding: "0.4em 1em",
            fontWeight: "800",
          }}
        >
          $550
        </div>
      </div>
      <button onClick={generatePDF}>Printt</button>
    </div>
  );
};

export default Invoice;
