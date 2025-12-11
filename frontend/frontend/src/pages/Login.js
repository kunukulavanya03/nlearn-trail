import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../apiEndpoints';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!data.error) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        // Check if it's first login
        if (data.isFirstLogin) {
          alert('Login successful! Please reset your password for security.');
          navigate('/password-reset');
        } else {
          alert('Login successful! Welcome to LMS Portal.');
          navigate('/dashboard');
        }
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">LMS Portal Login</h2>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 border border-red-200 text-center">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          type="email" 
          required 
          className="input input-bordered w-full" 
        />
        <input 
          name="password" 
          value={form.password} 
          onChange={handleChange} 
          placeholder="Enter your password" 
          type="password" 
          required 
          className="input input-bordered w-full" 
        />
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary w-full mt-2 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="text-center mt-5">
        <p className="text-gray-500 text-sm">
          Use the credentials sent to your email to login
        </p>
      </div>
    </div>
  );
};

export default Login;