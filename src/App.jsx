import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Settlements from './pages/Settlements';
import RefundRequest from './pages/RefundRequest';
import GenerateQR from './pages/GenerateQR';

import './App.css';

function App() {
  const isLoggedIn = localStorage.getItem('merchantLoggedIn') === 'true';

  return (
    <Router>
      <div className="app-container">
        {/* Only show sidebar if logged in */}
        {isLoggedIn && <Sidebar />}

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            {isLoggedIn ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/settlements" element={<Settlements />} />
                <Route path="/refund" element={<RefundRequest />} />
                <Route path="/generate-qr" element={<GenerateQR />} />
              </>
            ) : (
              <>
                {/* Catch-all redirect if not logged in */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
