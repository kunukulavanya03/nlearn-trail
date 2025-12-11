import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    const userObj = JSON.parse(userData);
    
    // Check if user needs to reset password
    if (userObj.isFirstLogin) {
      navigate('/password-reset');
      return;
    }
    
    setUser(userObj);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 ml-64">
        <Navbar />
        <div className="pt-16 p-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-800">LMS Dashboard</h2>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
            <div className="p-8">
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Welcome, {user.name}!</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Email:</strong> {user.email}</div>
                  <div><strong>College:</strong> {user.college}</div>
                  <div><strong>Department:</strong> {user.department}</div>
                  <div><strong>Year:</strong> {user.year}</div>
                  <div><strong>Course:</strong> {user.course || 'Not specified'}</div>
                  <div><strong>Payment Deadline:</strong> {user.paymentDeadlineDate ? new Date(user.paymentDeadlineDate).toLocaleDateString() : 'Not set'}</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">LMS Features</h3>
                <p className="text-gray-600 mb-6">Your Learning Management System is ready! More features will be available soon.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="text-blue-700 font-bold mb-2">Courses</h4>
                    <p className="text-gray-600">Access your enrolled courses</p>
                  </div>
                  <div className="p-5 bg-purple-50 rounded-lg border border-purple-100">
                    <h4 className="text-purple-700 font-bold mb-2">Assignments</h4>
                    <p className="text-gray-600">View and submit assignments</p>
                  </div>
                  <div className="p-5 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="text-green-700 font-bold mb-2">Grades</h4>
                    <p className="text-gray-600">Check your academic progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;