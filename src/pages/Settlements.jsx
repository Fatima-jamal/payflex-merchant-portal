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

  const formatValue = (value) => {
    return value ? value : 'N/A';
  };

  return (
    <div className="settlements-container">
      <h2>Settlement History</h2>
      <table className="settlements-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount (Rs.)</th>
            <th>Reference ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {settlements.length > 0 ? (
            settlements.map((item, index) => (
              <tr key={index}>
                <td>{formatValue(item.settlementDate)}</td>
                <td>{formatValue(item.totalAmount)}</td>
                <td>{formatValue(item.referenceId)}</td>
                <td className="status">{formatValue(item.status)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No settlement records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Settlements;
