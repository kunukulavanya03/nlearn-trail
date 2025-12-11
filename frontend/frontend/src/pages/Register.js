import React, { useState } from 'react';
import { API_ENDPOINTS } from '../apiEndpoints';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    college: '',
    personalEmail: '',
    collegeEmail: '',
    department: '',
    year: '',
    course: '',
    pendingAmount: '',
    pendingPaymentDate: '',
    paymentDeadlineDate: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let response = await fetch(API_ENDPOINTS.REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.status === 404) {
        response = await fetch(API_ENDPOINTS.CREATE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, password: 'Temp@1234' }),
        });
      }
      const data = await response.json();
      if (!data.error) {
        setRegistrationSuccess(true);
        setForm({
          name: '',
          phone: '',
          college: '',
          personalEmail: '',
          collegeEmail: '',
          department: '',
          year: '',
          course: '',
          pendingAmount: '',
          pendingPaymentDate: '',
          paymentDeadlineDate: '',
        });
      } else {
        alert('Registration failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Error connecting to server.');
    }
    setSubmitting(false);
  };

  if (registrationSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-green-100 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">Registration Successful!</h2>
            <p className="text-gray-600">Your registration is completed successfully! Check your mail for more details.</p>
          </div>
          <button 
            onClick={() => setRegistrationSuccess(false)}
            className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 transition"
          >
            Register Another User
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-700 tracking-tight">Registration Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="college" value={form.college} onChange={handleChange} placeholder="College Name" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="personalEmail" value={form.personalEmail} onChange={handleChange} placeholder="Personal Email" type="email" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="collegeEmail" value={form.collegeEmail} onChange={handleChange} placeholder="College Email" type="email" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="department" value={form.department} onChange={handleChange} placeholder="Department" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="year" value={form.year} onChange={handleChange} placeholder="Year" required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <select name="course" value={form.course} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics & Communication">Electronics & Communication</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Data Science">Data Science</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
          <input name="pendingAmount" value={form.pendingAmount} onChange={handleChange} placeholder="Pending Amount" type="number" step="0.01" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="pendingPaymentDate" value={form.pendingPaymentDate} onChange={handleChange} placeholder="Pending Payment Date" type="date" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <input name="paymentDeadlineDate" value={form.paymentDeadlineDate} onChange={handleChange} placeholder="Payment Deadline Date" type="date" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          <button type="submit" disabled={submitting} className="bg-blue-600 text-white rounded-lg px-4 py-3 mt-2 font-semibold hover:bg-blue-700 transition disabled:opacity-50">
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;