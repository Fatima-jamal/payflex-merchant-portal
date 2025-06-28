// src/pages/RefundRequest.jsx
import React, { useState } from "react";
import "./RefundRequest.css";

function RefundRequest() {
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const refundData = {
      transactionId,
      amount,
      reason,
    };

    try {
      const response = await fetch("http://localhost:8080/api/refund-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(refundData),
      });

      if (response.ok) {
        alert("Refund request submitted successfully!");
        setTransactionId("");
        setAmount("");
        setReason("");
      } else {
        alert("Failed to submit refund request.");
      }
    } catch (error) {
      console.error("Error submitting refund request:", error);
      alert("Error submitting refund request.");
    }
  };

  return (
    <div className="refund-container">
      <h2>Request a Refund</h2>

      <label>Transaction ID:</label>
      <input
        type="text"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
      />

      <label>Amount to Refund:</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Reason for Refund:</label>
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        rows="5"
      />

      <button onClick={handleSubmit}>Submit Refund Request</button>
    </div>
  );
}

export default RefundRequest;
