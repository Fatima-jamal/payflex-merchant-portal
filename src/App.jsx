import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Settlements from './pages/Settlements';
import RefundRequest from './pages/RefundRequest';
import GenerateQR from './pages/GenerateQR';

import './App.css';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('merchantLoggedIn') === 'true';
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function AppWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('merchantLoggedIn') === 'true');

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('merchantLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <div className="app-container">
      {isLoggedIn && <Sidebar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
          <Route path="/settlements" element={<ProtectedRoute><Settlements /></ProtectedRoute>} />
          <Route path="/refund" element={<ProtectedRoute><RefundRequest /></ProtectedRoute>} />
          <Route path="/generate-qr" element={<ProtectedRoute><GenerateQR /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
