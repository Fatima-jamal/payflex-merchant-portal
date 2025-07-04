// src/pages/Transactions.jsx
import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';
import './Transactions.css';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const mid = localStorage.getItem('merchantMID');

  useEffect(() => {
    if (!mid) {
      console.error("MID not found in localStorage.");
      return;
    }

    axios.get(`/transactions/mid/${mid}`)
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, [mid]);

  return (
    <div className="transactions-container">
      <h2>Transaction History</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>MID</th>
            <th>Amount (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.mid}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Transactions Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
