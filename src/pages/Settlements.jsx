import React, { useEffect, useState } from 'react';
import './Settlements.css';

function Settlements() {
  const [settlements, setSettlements] = useState([]);
  const mid = localStorage.getItem('merchantMID');

  useEffect(() => {
    if (mid) {
      fetch(`http://localhost:8081/api/settlements/${mid}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Settlements fetched: ", data);
          setSettlements(data);
        });
    }
  }, [mid]);

  return (
    <div className="settlements-container">
      <h2>Settlement History</h2>
      <table className="settlements-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount (Rs.)</th>
            <th>Reference ID</th>
            <th>Bank</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {settlements.length > 0 ? (
            settlements.map((item, index) => (
              <tr key={index}>
                <td>{item.created_at?.substring(0, 10)}</td>
                <td>{item.amount}</td>
                <td>{item.reference_id}</td>
                <td>{item.bank_name}</td>
                <td className="status">{item.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No settlement records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Settlements;
