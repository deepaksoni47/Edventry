'use client'
import React from 'react';
import { Calendar, Users, Star, Clock, MapPin } from 'lucide-react';

const EventsLoading = () => {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="h-5 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title Skeleton */}
        <div className="mb-8">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-96 bg-gray-200 rounded"></div>
        </div>

        {/* Events Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {/* Event Image Skeleton */}
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              
              {/* Event Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
              
              {/* Event Description Skeleton */}
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded mb-4"></div>
              
              {/* Event Stats Skeleton */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <div className="h-3 w-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gray-400 mr-1" />
                    <div className="h-3 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
              
              {/* Event Meta Skeleton */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Button Skeleton */}
              <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsLoading; 