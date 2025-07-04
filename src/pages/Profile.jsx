// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [merchantData, setMerchantData] = useState(null);
  const mid = localStorage.getItem('merchantMID');

  useEffect(() => {
    if (mid) {
      fetch(`http://localhost:8081/api/merchants/${mid}`)
        .then((res) => res.json())
        .then((data) => setMerchantData(data));
    }
  }, [mid]);

  const handleChange = (e) => {
    setMerchantData({
      ...merchantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await fetch(`http://localhost:8081/api/merchants/${mid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(merchantData),
      });
      alert('Profile updated successfully!');
    } catch (err) {
      alert('Error saving profile.');
    }
  };

  if (!merchantData) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>Merchant Profile</h2>

      <label>MID (Merchant ID):</label>
      <input name="mid" value={merchantData.mid} disabled />

      <label>TID (Terminal ID):</label>
      <input name="tid" value={merchantData.tid} onChange={handleChange} />

      <label>DBA Name:</label>
      <input name="dbaName" value={merchantData.dbaName} onChange={handleChange} />

      <label>Website:</label>
      <input name="website" value={merchantData.website} onChange={handleChange} />

      <label>Contact Number:</label>
      <input name="contact" value={merchantData.contact} onChange={handleChange} />

      <label>Owner Name:</label>
      <input name="owner" value={merchantData.owner} onChange={handleChange} />

      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default Profile;
