import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// Placeholder components for navigation routes
export const Courses = () => (
  <div className="pt-20 px-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Courses</h1>
    <p className="text-gray-600">Course content coming soon...</p>
  </div>
);

export const EBook = () => (
  <div className="pt-20 px-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">E-Book Library</h1>
    <p className="text-gray-600">E-Book content coming soon...</p>
  </div>
);

export const Mentor = () => (
  <div className="pt-20 px-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">My Mentor</h1>
    <p className="text-gray-600">Mentor features coming soon...</p>
  </div>
);

export const Chatbot = () => (
  <div className="pt-20 px-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Learning Assistant</h1>
    <p className="text-gray-600">Chatbot interface coming soon...</p>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link
                to="/courses"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                Courses
              </Link>
              
              <Link
                to="/ebook"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                E-Book
              </Link>
              
              <Link
                to="/mentor"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                My Mentor
              </Link>
              
              <Link
                to="/chatbot"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2"
              >
                <span className="text-lg">🤖</span>
                <span>Chatbot</span>
              </Link>
            </div>
          </div>

          {/* Right side - Notification and Logout */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notification Button */}
            <button
              className="relative p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              title="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4.5 19.5h15a2 2 0 002-2v-8a2 2 0 00-2-2h-15a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Logout Button */}
            <button
              onClick={() => {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                window.location.href = '/login';
              }}
              className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/courses"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="flex items-center space-x-3">
                <span className="text-lg">📚</span>
                <span>Courses</span>
              </span>
            </Link>
            
            <Link
              to="/ebook"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="flex items-center space-x-3">
                <span className="text-lg">📖</span>
                <span>E-Book</span>
              </span>
            </Link>
            
            <Link
              to="/mentor"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="flex items-center space-x-3">
                <span className="text-lg">👨‍🏫</span>
                <span>My Mentor</span>
              </span>
            </Link>
            
            <Link
              to="/chatbot"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="flex items-center space-x-3">
                <span className="text-lg">🤖</span>
                <span>Chatbot</span>
              </span>
            </Link>

            {/* Notification and Logout Buttons (Mobile) */}
            <div className="flex space-x-3 pt-4">
              <button
                className="flex-1 px-4 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>🔔</span>
                  <span>Notifications (3)</span>
                </span>
              </button>
              
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  sessionStorage.removeItem('token');
                  window.location.href = '/login';
                }}
                className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>🚪</span>
                  <span>Logout</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 