'use client'
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Star, 
  Award, 
  Bell, 
  BarChart3,
  CheckCircle,
  XCircle,
  AlertCircle,
  DollarSign,
  Activity
} from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const AdminDashboard = () => {
  // Mock admin user info
  const userInfo = {
    name: "Admin User",
    email: "admin@edventry.com",
    verified: true
  };

  // Mock admin stats
  const stats = {
    totalStudents: 1247,
    totalProviders: 89,
    totalEvents: 156,
    pendingApprovals: 12,
    totalRevenue: 125000,
    activeEvents: 89,
    completedEvents: 67,
    averageRating: 4.6
  };

  const recentActivities = [
    {
      id: 1,
      type: 'provider_approval',
      message: 'TechSkills Institute submitted for approval',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'event_created',
      message: 'New event "React Workshop" created by CodeAcademy',
      time: '4 hours ago',
      status: 'approved'
    },
    {
      id: 3,
      type: 'student_registration',
      message: '150 new student registrations this week',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 4,
      type: 'review_submitted',
      message: 'New review submitted for "Data Science Bootcamp"',
      time: '2 days ago',
      status: 'pending'
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'provider',
      name: 'TechSkills Institute',
      email: 'contact@techskills.edu',
      submitted: '2025-01-15',
      status: 'pending'
    },
    {
      id: 2,
      type: 'event',
      name: 'Advanced React Workshop',
      provider: 'CodeAcademy',
      submitted: '2025-01-14',
      status: 'pending'
    },
    {
      id: 3,
      type: 'provider',
      name: 'Design Studio Pro',
      email: 'hello@designstudio.com',
      submitted: '2025-01-13',
      status: 'pending'
    }
  ];

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
            <span className={`text-sm font-medium ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}%
            </span>
            <p className="text-xs text-gray-500">vs last month</p>
          </div>
        )}
      </div>
    </div>
  );

  const ActivityCard = ({ activity }) => {
    const getStatusIcon = (status) => {
      switch (status) {
        case 'approved':
          return <CheckCircle className="h-4 w-4 text-green-500" />;
        case 'pending':
          return <AlertCircle className="h-4 w-4 text-yellow-500" />;
        case 'completed':
          return <CheckCircle className="h-4 w-4 text-blue-500" />;
        default:
          return <Activity className="h-4 w-4 text-gray-500" />;
      }
    };

    return (
      <div className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100">
        <div className="flex-shrink-0">
          {getStatusIcon(activity.status)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{activity.message}</p>
          <p className="text-xs text-gray-500">{activity.time}</p>
        </div>
      </div>
    );
  };

  const ApprovalCard = ({ approval }) => {
    const getTypeIcon = (type) => {
      switch (type) {
        case 'provider':
          return <Users className="h-4 w-4" />;
        case 'event':
          return <Calendar className="h-4 w-4" />;
        default:
          return <AlertCircle className="h-4 w-4" />;
      }
    };

    return (
      <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            {getTypeIcon(approval.type)}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{approval.name}</p>
            <p className="text-xs text-gray-500">
              {approval.email || approval.provider} • {approval.submitted}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded hover:bg-green-200">
            Approve
          </button>
          <button className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded hover:bg-red-200">
            Reject
          </button>
        </div>
      </div>
    );
  };

  return (
    <DashboardLayout
      userType="admin"
      userInfo={userInfo}
      pageTitle="Admin Dashboard"
      pageDescription="Monitor and manage the platform"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={Users}
          title="Total Students"
          value={stats.totalStudents.toLocaleString()}
          change={15}
          color="bg-blue-500"
          subtitle="Active learners"
        />
        <StatsCard
          icon={Users}
          title="Total Providers"
          value={stats.totalProviders}
          change={8}
          color="bg-green-500"
          subtitle="Verified providers"
        />
        <StatsCard
          icon={Calendar}
          title="Total Events"
          value={stats.totalEvents}
          change={22}
          color="bg-purple-500"
          subtitle={`${stats.activeEvents} active`}
        />
        <StatsCard
          icon={DollarSign}
          title="Total Revenue"
          value={`₹${stats.totalRevenue.toLocaleString()}`}
          change={18}
          color="bg-yellow-500"
          subtitle="Platform earnings"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                {pendingApprovals.length}
              </span>
            </div>
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <ApprovalCard key={approval.id} approval={approval} />
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                View All Approvals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed Events</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedEvents}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard; 