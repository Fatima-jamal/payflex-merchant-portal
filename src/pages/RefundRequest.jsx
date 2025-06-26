import React, { useState } from 'react';
import axios from 'axios';
import './RefundRequest.css';

function RefundRequest() {
  const [formData, setFormData] = useState({
    transactionId: '',
    amount: '',
    reason: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/refund-requests', formData);
      setStatus('success');
      setFormData({ transactionId: '', amount: '', reason: '' });
      alert('Refund request submitted successfully!');
    } catch (error) {
      setStatus('error');
      alert('Failed to submit refund request. Please try again.');
      console.error('Refund error:', error);
    }
  };

  return (
    <div className="refund-container">
      <div className="refund-box">
        <h2>Request a Refund</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Transaction ID:</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Amount to Refund:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Reason for Refund:</label>
            <textarea
              name="reason"
              rows="4"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit Refund Request</button>
        </form>
      </div>
    </div>
  );
}

export default RefundRequest;
