import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('merchantLoggedIn') === 'true';

  // Don’t show Sidebar if not logged in
  if (!isLoggedIn) return null;

  const handleLogout = () => {
    localStorage.removeItem('merchantLoggedIn');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">PayFlex Merchant</div>
      <hr className="sidebar-line" />

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
        <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>Transactions</NavLink>
        <NavLink to="/settlements" className={({ isActive }) => isActive ? "active" : ""}>Settlements</NavLink>
        <NavLink to="/refund" className={({ isActive }) => isActive ? "active" : ""}>Refund Request</NavLink>
        <NavLink to="/generate-qr" className={({ isActive }) => isActive ? "active" : ""}>Generate QR</NavLink>
      </nav>

      <hr className="sidebar-line" />
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Sidebar;
