'use client'
import React, { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ 
  children, 
  userType = 'student', 
  userInfo = {},
  pageTitle = '',
  pageDescription = '',
  showNotifications = true,
  className = ''
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        userType={userType}
        userInfo={userInfo}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-16 z-50">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Left side - Menu button and title */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                {pageTitle && (
                  <h1 className="text-xl font-semibold text-gray-900">{pageTitle}</h1>
                )}
                {pageDescription && (
                  <p className="text-sm text-gray-600">{pageDescription}</p>
                )}
              </div>
            </div>

            {/* Right side - Notifications and user menu */}
            <div className="flex items-center space-x-4">
              {showNotifications && (
                <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
              )}
              
              <div className="flex items-center space-x-3">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {userInfo.name || `${userType.charAt(0).toUpperCase() + userType.slice(1)} User`}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userInfo.email || `${userType}@example.com`}
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  <User className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={`p-4 sm:p-6 lg:p-8 ${className}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 