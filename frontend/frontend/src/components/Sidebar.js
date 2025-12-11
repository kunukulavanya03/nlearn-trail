import React from 'react';

const Sidebar = ({ user }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatAmount = (amount) => {
    if (!amount || amount === 0) return 'No pending amount';
    return `₹${parseFloat(amount).toFixed(2)}`;
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0">
      <div className="p-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </span>
          </div>
        </div>
        
        {/* User Details */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">{user?.name || 'User Name'}</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {user?.email || 'user@example.com'}
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {user?.contactNumber || '+91 98765 43210'}
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {formatAmount(user?.pendingAmount)}
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {formatDate(user?.pendingPaymentDate)}
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {formatDate(user?.paymentDeadlineDate)}
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition">
            Courses
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition">
            Assignments
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition">
            Grades
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition">
            Profile
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 