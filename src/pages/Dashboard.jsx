import React, { useEffect, useState } from "react";
import {
  FaExchangeAlt,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaCheckCircle
} from "react-icons/fa";
import axios from "../api/axiosInstance";
import "./Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    transactions: 0,
    totalVolume: 0,
    amountPaid: 0,
    successful: 0
  });

  useEffect(() => {
    axios.get("/merchant-dashboard")
      .then((response) => {
        setStats({
          transactions: response.data.totalTransactions,
          totalVolume: response.data.totalVolume.toLocaleString(),
          amountPaid: response.data.amountPaid.toLocaleString(),
          successful: response.data.successfulTransactions
        });
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

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
