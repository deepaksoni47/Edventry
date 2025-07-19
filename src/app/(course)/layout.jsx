'use client'
import React from 'react';
import { BookOpen, Users, Star, Clock, Calendar, MapPin, DollarSign, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CourseLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-900 hover:text-gray-700">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="text-lg font-semibold">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/courses" className="text-gray-600 hover:text-gray-900">
                Browse Courses
              </Link>
              <Link href="/student/dashboard" className="text-gray-600 hover:text-gray-900">
                My Learning
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Edventry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseLayout; 