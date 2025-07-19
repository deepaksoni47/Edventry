'use client'
import React, { useState } from 'react';
import { TrendingUp, BarChart3, Users, Calendar, DollarSign, Star, Activity, Target, Zap, ArrowUp, ArrowDown } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const ProviderAnalytics = () => {
  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
  };

  const analyticsData = {
    overview: {
      totalRevenue: 125000,
      totalStudents: 1247,
      totalEvents: 24,
      averageRating: 4.6,
      revenueChange: 18,
      studentsChange: 25,
      eventsChange: 12,
      ratingChange: 5
    },
    monthlyStats: [
      { month: 'Jan', revenue: 85000, students: 180, events: 8 },
      { month: 'Feb', revenue: 92000, students: 220, events: 10 },
      { month: 'Mar', revenue: 78000, students: 160, events: 6 },
      { month: 'Apr', revenue: 95000, students: 240, events: 12 },
      { month: 'May', revenue: 110000, students: 280, events: 14 },
      { month: 'Jun', revenue: 125000, students: 320, events: 18 }
    ],
    topEvents: [
      {
        id: 1,
        title: "Advanced React Workshop",
        revenue: 15000,
        students: 45,
        rating: 4.8,
        completionRate: 92
      },
      {
        id: 2,
        title: "Data Science Bootcamp",
        revenue: 42000,
        students: 28,
        rating: 4.9,
        completionRate: 89
      },
      {
        id: 3,
        title: "UI/UX Design Masterclass",
        revenue: 24000,
        students: 60,
        rating: 4.7,
        completionRate: 95
      },
      {
        id: 4,
        title: "Machine Learning Fundamentals",
        revenue: 32000,
        students: 40,
        rating: 4.6,
        completionRate: 87
      }
    ],
    studentDemographics: {
      ageGroups: [
        { age: '18-25', percentage: 45 },
        { age: '26-35', percentage: 35 },
        { age: '36-45', percentage: 15 },
        { age: '46+', percentage: 5 }
      ],
      locations: [
        { location: 'Mumbai', percentage: 30 },
        { location: 'Delhi', percentage: 25 },
        { location: 'Bangalore', percentage: 20 },
        { location: 'Other', percentage: 25 }
      ]
    }
  };

  const StatsCard = ({ icon: Icon, title, value, change, color, subtitle }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {change && (
          <div className="text-right">
            <div className="flex items-center">
              {change > 0 ? (
                <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span className={`text-sm font-medium ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {Math.abs(change)}%
              </span>
            </div>
            <p className="text-xs text-gray-500">vs last month</p>
          </div>
        )}
      </div>
    </div>
  );

  const TopEventCard = ({ event, rank }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
            rank === 1 ? 'bg-yellow-500' : 
            rank === 2 ? 'bg-gray-400' : 
            rank === 3 ? 'bg-orange-500' : 'bg-blue-500'
          }`}>
            {rank}
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{event.title}</h4>
            <p className="text-sm text-gray-600">{event.students} students</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">₹{event.revenue.toLocaleString()}</p>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-3 w-3 text-yellow-500 mr-1" />
            {event.rating}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Completion Rate</span>
        <span className="font-medium text-gray-900">{event.completionRate}%</span>
      </div>
    </div>
  );

  const DemographicsCard = ({ title, data, type }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{item[type]}</span>
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-900 w-8">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="Analytics & Insights"
      pageDescription="Track your performance and gain insights"
    >
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={DollarSign}
          title="Total Revenue"
          value={`₹${analyticsData.overview.totalRevenue.toLocaleString()}`}
          change={analyticsData.overview.revenueChange}
          color="bg-green-500"
          subtitle="This year"
        />
        <StatsCard
          icon={Users}
          title="Total Students"
          value={analyticsData.overview.totalStudents.toLocaleString()}
          change={analyticsData.overview.studentsChange}
          color="bg-blue-500"
          subtitle="Enrolled students"
        />
        <StatsCard
          icon={Calendar}
          title="Total Events"
          value={analyticsData.overview.totalEvents}
          change={analyticsData.overview.eventsChange}
          color="bg-purple-500"
          subtitle="Conducted events"
        />
        <StatsCard
          icon={Star}
          title="Average Rating"
          value={analyticsData.overview.averageRating}
          change={analyticsData.overview.ratingChange}
          color="bg-yellow-500"
          subtitle="Student satisfaction"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart Placeholder */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg">6 Months</button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg">1 Year</button>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Revenue Chart</h4>
                <p className="text-gray-600">Interactive chart showing revenue trends over time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Events */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Events</h3>
            <div className="space-y-3">
              {analyticsData.topEvents.map((event, index) => (
                <TopEventCard key={event.id} event={event} rank={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <DemographicsCard
          title="Student Age Distribution"
          data={analyticsData.studentDemographics.ageGroups}
          type="age"
        />
        <DemographicsCard
          title="Student Location Distribution"
          data={analyticsData.studentDemographics.locations}
          type="location"
        />
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h4>
          <p className="text-gray-600 text-sm">Students who complete events</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <Activity className="h-8 w-8 text-green-600" />
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Engagement Rate</h4>
          <p className="text-gray-600 text-sm">Active student participation</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <Zap className="h-8 w-8 text-yellow-600" />
            <span className="text-sm font-medium text-green-600">+15%</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Growth Rate</h4>
          <p className="text-gray-600 text-sm">Monthly student growth</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProviderAnalytics;
