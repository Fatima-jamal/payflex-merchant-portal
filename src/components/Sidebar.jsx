import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">PayFlex Merchant</div>
      <hr className="sidebar-line" />

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
        <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>Transactions</NavLink>
        <NavLink to="/settlements" className={({ isActive }) => isActive ? "active" : ""}>Settlements</NavLink>
        <NavLink to="/refund" className={({ isActive }) => isActive ? "active" : ""}>Refund Request</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
