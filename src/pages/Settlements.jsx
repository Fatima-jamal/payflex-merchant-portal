import React, { useEffect, useState } from "react";
import "./Settlements.css";

function Settlements() {
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    // Sample static data for now
    setSettlements([
      {
        date: "2025-06-22",
        amount: "9,24,129.26",
        reference: "SETT123456",
        bank: "Habib Bank Limited",
        status: "Paid"
      },
      {
        date: "2025-06-15",
        amount: "6,78,000.00",
        reference: "SETT123455",
        bank: "UBL",
        status: "Paid"
      }
    ]);
  }, []);

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
          {settlements.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.reference}</td>
              <td>{item.bank}</td>
              <td className="status">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Settlements;
