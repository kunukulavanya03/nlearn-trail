import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PasswordReset from './pages/PasswordReset';
import Modal from './components/Modal';

function PaymentPage() {
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);

  const handlePaymentSuccess = () => {
    setShowRegisterModal(true);
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Payment Page (Demo)</h2>
      <button onClick={handlePaymentSuccess} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Simulate Payment Success</button>
      <Modal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
        <Register />
      </Modal>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="p-4 bg-white shadow flex gap-4">
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link to="/payment" className="text-blue-600 hover:underline">Payment (Demo)</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
