import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    mid: "090210742900040",
    website: "www.saleh.com",
    mobile: "92-3422130137",
    dba: "Saleh Tapsys Test",
    name: "NATIONAL BANK OF PAKISTAN",
    email: "saleh.siddiqui@paysyslabs.com",
    tids: ["90004001"]
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <h2>Merchant Profile</h2>

      <div className="profile-card">
        <div className="profile-header">
          <FaUserCircle className="profile-avatar" />
          <div>
            <h3 className="profile-title">{profile.name}</h3>
            <p className="profile-email">{profile.email}</p>
          </div>
        </div>

        <div className="profile-fields">
          <div className="field-group">
            <label>MID</label>
            <input name="mid" value={profile.mid} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label>Website</label>
            <input name="website" value={profile.website} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label>Mobile</label>
            <input name="mobile" value={profile.mobile} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label>DBA Name</label>
            <input name="dba" value={profile.dba} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label>Name</label>
            <input name="name" value={profile.name} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label>TIDs</label>
            <select multiple>
              {profile.tids.map((tid, idx) => (
                <option key={idx}>{tid}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
