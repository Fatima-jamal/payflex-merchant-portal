import React from "react";
import {
  FaExchangeAlt,     // ↔ transactions
  FaMoneyBillWave,   // 💸 volume
  FaHandHoldingUsd,  // 🤲 amount paid
  FaCheckCircle      // ✅ success count
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  const stats = {
    transactions: 1519,
    totalVolume: "2,56,41,520.93",
    amountPaid: "9,24,129.26",
    successful: 1519
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, Merchant</h2>
      <div className="dashboard-cards">
        <div className="card">
          <FaExchangeAlt className="card-icon" />
          <p className="card-title">No. of Transactions</p>
          <p className="card-value">{stats.transactions}</p>
        </div>

        <div className="card">
          <FaMoneyBillWave className="card-icon" />
          <p className="card-title">Total Volume</p>
          <p className="card-value">{stats.totalVolume}</p>
        </div>

        <div className="card">
          <FaHandHoldingUsd className="card-icon" />
          <p className="card-title">Amount Paid</p>
          <p className="card-value">{stats.amountPaid}</p>
        </div>

        <div className="card">
          <FaCheckCircle className="card-icon" />
          <p className="card-title">Successful Transactions</p>
          <p className="card-value">{stats.successful}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
