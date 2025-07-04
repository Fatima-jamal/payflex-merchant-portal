import React, { useEffect, useState } from 'react';
import './Transactions.css';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const mid = localStorage.getItem('merchantMID');

  useEffect(() => {
    if (mid) {
      fetch(`http://localhost:8081/api/transactions/${mid}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Transactions fetched: ", data);
          setTransactions(data);
        });
    }
  }, [mid]);

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
          {transactions.length > 0 ? (
            transactions.map((txn, index) => (
              <tr key={index}>
                <td>{txn.transaction_id}</td>
                <td>{txn.created_at?.substring(0, 10)}</td>
                <td>{txn.mid}</td>
                <td>{txn.tid}</td>
                <td>{txn.amount}</td>
                <td className="status">{txn.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No transaction records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
