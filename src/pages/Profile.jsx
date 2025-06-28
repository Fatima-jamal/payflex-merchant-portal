// src/pages/Profile.jsx
import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [merchantData, setMerchantData] = useState({
    mid: "MID123456",
    tid: "TID789012",
    dbaName: "Fatima Boutique",
    website: "https://fatimaboutique.com",
    contact: "0300-1234567",
    owner: "Fatima Jamal",
  });

  const handleChange = (e) => {
    setMerchantData({
      ...merchantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Here you can send updated merchant data to the backend
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Merchant Profile</h2>

      <label>MID (Merchant ID):</label>
      <input
        name="mid"
        value={merchantData.mid}
        onChange={handleChange}
        disabled
      />

      <label>TID (Terminal ID):</label>
      <input
        name="tid"
        value={merchantData.tid}
        onChange={handleChange}
      />

      <label>DBA Name:</label>
      <input
        name="dbaName"
        value={merchantData.dbaName}
        onChange={handleChange}
      />

      <label>Website:</label>
      <input
        name="website"
        value={merchantData.website}
        onChange={handleChange}
      />

      <label>Contact Number:</label>
      <input
        name="contact"
        value={merchantData.contact}
        onChange={handleChange}
      />

      <label>Owner Name:</label>
      <input
        name="owner"
        value={merchantData.owner}
        onChange={handleChange}
      />

      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default Profile;
