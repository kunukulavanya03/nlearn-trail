import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../apiEndpoints';

const PasswordReset = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters with at least one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (form.newPassword !== form.confirmPassword) {
      setError('New passwords do not match');
      setLoading(false);
      return;
    }

    if (!validatePassword(form.newPassword)) {
      setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      setLoading(false);
      return;
    }

    if (form.currentPassword === form.newPassword) {
      setError('New password must be different from current password');
      setLoading(false);
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(API_ENDPOINTS.RESET_PASSWORD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          currentPassword: form.currentPassword,
          newPassword: form.newPassword
        }),
      });
      const data = await response.json();
      if (!data.error) {
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Password updated successfully! Welcome to LMS Portal.');
        navigate('/dashboard');
      } else {
        setError(data.error || 'Password reset failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Reset Your Password</h2>
        <p className="text-gray-600 text-base">For security reasons, you must change your password on first login.</p>
      </div>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 border border-red-200 text-center">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Current Password</label>
          <input 
            name="currentPassword" 
            value={form.currentPassword} 
            onChange={handleChange} 
            placeholder="Enter your current password" 
            type="password" 
            required 
            className="input input-bordered w-full" 
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">New Password</label>
          <input 
            name="newPassword" 
            value={form.newPassword} 
            onChange={handleChange} 
            placeholder="Enter your new password" 
            type="password" 
            required 
            className="input input-bordered w-full" 
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Confirm New Password</label>
          <input 
            name="confirmPassword" 
            value={form.confirmPassword} 
            onChange={handleChange} 
            placeholder="Confirm your new password" 
            type="password" 
            required 
            className="input input-bordered w-full" 
          />
        </div>
        <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-200">
          <h4 className="mb-2 text-gray-700 font-semibold text-sm">Password Requirements:</h4>
          <ul className="list-disc pl-5 text-gray-600 text-sm">
            <li>At least 8 characters long</li>
            <li>At least one uppercase letter (A-Z)</li>
            <li>At least one lowercase letter (a-z)</li>
            <li>At least one number (0-9)</li>
            <li>At least one special character (@$!%*?&amp;)</li>
          </ul>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary w-full mt-2 disabled:opacity-50"
        >
          {loading ? 'Updating Password...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;