import React from "react";
import "./Transactions.css";

function Transactions() {
  const transactions = [
    {
      id: "TXN001",
      date: "2025-06-24",
      amount: "12,000.00",
      status: "Success",
      tid: "90004001",
      mid: "920215331100118"
    },
    {
      id: "TXN002",
      date: "2025-06-23",
      amount: "8,500.50",
      status: "Failed",
      tid: "90004002",
      mid: "920215331100118"
    },
    {
      id: "TXN003",
      date: "2025-06-23",
      amount: "17,999.00",
      status: "Success",
      tid: "90004003",
      mid: "920215331100118"
    }
  ];

  return (
    <div className="transactions-container">
      <h2>Transaction History</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>MID</th>
            <th>TID</th>
            <th>Amount (Rs.)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.date}</td>
              <td>{txn.mid}</td>
              <td>{txn.tid}</td>
              <td>{txn.amount}</td>
              <td className={txn.status.toLowerCase()}>{txn.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
