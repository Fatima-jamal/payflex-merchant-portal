// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import {
  FaExchangeAlt,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaCheckCircle,
} from "react-icons/fa";
import axios from "../api/axiosInstance";
import "./Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const mid = localStorage.getItem("merchantMID"); // ✅ USE SAME KEY

    if (!mid) {
      console.error("MID not found in localStorage.");
      return;
    }

    axios
      .get("/dashboard/summary", { params: { mid } }) // ✅ match backend param
      .then((res) => {
        const data = res.data || {};
        console.log("Dashboard API Response:", data);
        setStats({
          transactions: data.transactionCount || 0,
          totalVolume: data.totalVolume || 0,
          amountPaid: data.totalPaid || 0,
          successful: data.successfulTransactions || 0,
        });
      })
      .catch((err) => {
        console.error("Error loading dashboard stats", err);
      });
  }, []);

  if (!stats) return <div className="dashboard-container">Loading Dashboard...</div>;

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
          <p className="card-value">{Number(stats.totalVolume).toLocaleString()}</p>
        </div>

        <div className="card">
          <FaHandHoldingUsd className="card-icon" />
          <p className="card-title">Amount Paid</p>
          <p className="card-value">{Number(stats.amountPaid).toLocaleString()}</p>
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
