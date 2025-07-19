'use client'
import React, { useState } from 'react';
import { Calendar, Users, TrendingUp, Plus, Eye, Edit, Trash2, Clock, MapPin, DollarSign, Star, Bell, Settings, LogOut, Menu, X, CheckCircle, XCircle, AlertCircle, Filter, Search } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const ProviderPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
  };

  const providerInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true,
    rating: 4.8,
    totalReviews: 156
  };

  const stats = {
    totalEvents: 24,
    activeEvents: 12,
    pendingApproval: 3,
    totalStudents: 1247,
    monthlyRevenue: 15240,
    completedEvents: 9
  };

  const recentEvents = [
    {
      id: 1,
      title: "Advanced React Workshop",
      description: "Learn advanced React patterns, hooks, and state management",
      date: "2025-07-25",
      time: "2:00 PM",
      duration: "4 hours",
      location: "Online",
      category: "Web Development",
      registrations: 45,
      capacity: 50,
      price: 299,
      status: "active",
      approvalStatus: "approved",
      prerequisites: "Basic JavaScript knowledge",
      createdAt: "2025-07-10",
      expiresAt: "2025-07-24"
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      description: "Complete introduction to data science with Python",
      date: "2025-08-01",
      time: "10:00 AM",
      duration: "8 hours",
      location: "Bhopal Tech Hub, Sector 7",
      category: "Data Science",
      registrations: 28,
      capacity: 30,
      price: 1499,
      status: "active",
      approvalStatus: "approved",
      prerequisites: "Basic programming knowledge",
      createdAt: "2025-07-05",
      expiresAt: "2025-07-31"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Master the principles of user experience design",
      date: "2025-07-22",
      time: "4:00 PM",
      duration: "6 hours",
      location: "Online",
      category: "Design",
      registrations: 67,
      capacity: 60,
      price: 399,
      status: "full",
      approvalStatus: "approved",
      prerequisites: "None",
      createdAt: "2025-06-28",
      expiresAt: "2025-07-21"
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML algorithms and implementations",
      date: "2025-08-15",
      time: "11:00 AM",
      duration: "5 hours",
      location: "Online",
      category: "Machine Learning",
      registrations: 0,
      capacity: 40,
      price: 799,
      status: "pending",
      approvalStatus: "pending",
      prerequisites: "Python programming, Statistics basics",
      createdAt: "2025-07-18",
      expiresAt: "2025-08-14"
    }
  ];

  const inquiries = [
    { 
      id: 1, 
      student: "Priya Sharma", 
      studentEmail: "priya.sharma@student.com",
      event: "React Workshop", 
      message: "Is this suitable for beginners? I have basic HTML/CSS knowledge but new to React.", 
      time: "2 hours ago",
      unread: true
    },
    { 
      id: 2, 
      student: "Rahul Kumar", 
      studentEmail: "rahul.k@gmail.com",
      event: "Data Science Bootcamp", 
      message: "What are the prerequisites? Do I need prior experience with Python?", 
      time: "5 hours ago",
      unread: true
    },
    { 
      id: 3, 
      student: "Anita Singh", 
      studentEmail: "anita.singh@college.edu",
      event: "UI/UX Masterclass", 
      message: "Will recordings be available after the session? I might miss some parts due to my schedule.", 
      time: "1 day ago",
      unread: false
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

  const EventCard = ({ event }) => {
    const getStatusBadge = (status, approvalStatus) => {
      if (approvalStatus === 'pending') {
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending Approval</span>;
      }
      
      switch (status) {
        case 'active':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
        case 'full':
          return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Full</span>;
        case 'completed':
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Completed</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Draft</span>;
      }
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{event.description}</p>
          </div>
          {getStatusBadge(event.status, event.approvalStatus)}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            {event.date} at {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {event.duration}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            ₹{event.price}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-1" />
              {event.registrations}/{event.capacity} registered
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{event.category}</span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            Expires: {event.expiresAt} | Created: {event.createdAt}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
              <Eye className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
              <Edit className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const InquiryCard = ({ inquiry }) => (
    <div className={`bg-white p-4 rounded-lg border ${inquiry.unread ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-medium text-gray-900">{inquiry.student}</h4>
          <p className="text-sm text-gray-600">{inquiry.studentEmail}</p>
          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded mt-1 inline-block">{inquiry.event}</span>
        </div>
        <span className="text-xs text-gray-500">{inquiry.time}</span>
      </div>
      <p className="text-sm text-gray-700 mb-3">{inquiry.message}</p>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-700">
          Reply
        </button>
        <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
          Mark as Read
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                  icon={Calendar}
                  title="Total Events"
                  value={stats.totalEvents}
                  change={12}
                  color="bg-blue-500"
                  subtitle={`${stats.activeEvents} active`}
                />
                <StatsCard
                  icon={AlertCircle}
                  title="Pending Approval"
                  value={stats.pendingApproval}
                  color="bg-yellow-500"
                  subtitle="Awaiting admin review"
                />
                <StatsCard
                  icon={Users}
                  title="Total Students Reached"
                  value={stats.totalStudents}
                  change={18}
                  color="bg-green-500"
                  subtitle="Across all events"
                />
                <StatsCard
                  icon={DollarSign}
                  title="Monthly Revenue"
                  value={`₹${stats.monthlyRevenue.toLocaleString()}`}
                  change={25}
                  color="bg-purple-500"
                  subtitle="This month"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Events</h3>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </button>
                </div>
                <div className="space-y-4">
                  {recentEvents.slice(0, 3).map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Inquiries</h3>
                <div className="space-y-3">
                  {inquiries.map((inquiry) => (
                    <InquiryCard key={inquiry.id} inquiry={inquiry} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'events':
        const filteredEvents = recentEvents.filter(event => {
          const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               event.description.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesFilter = filterStatus === 'all' || event.status === filterStatus || event.approvalStatus === filterStatus;
          return matchesSearch && matchesFilter;
        });

        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Events</h2>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Create New Event
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending Approval</option>
                <option value="full">Full</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics & Insights</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">Detailed analytics and insights about your events performance will be displayed here.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Detailed Analytics
              </button>
            </div>
          </div>
        );

      case 'inquiries':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Inquiries</h2>
            <div className="space-y-4">
              {inquiries.map((inquiry) => (
                <InquiryCard key={inquiry.id} inquiry={inquiry} />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="Provider Dashboard"
      pageDescription="Manage your events and track performance"
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default ProviderPage;