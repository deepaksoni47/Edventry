'use client'
import React, { useState } from 'react';
import { Calendar, Users, TrendingUp, Plus, Eye, Edit, Trash2, Clock, MapPin, DollarSign, Star, Bell, Settings, LogOut, Menu, X, CheckCircle, XCircle, AlertCircle, Filter, Search } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';
import { useRouter } from 'next/navigation';

const ProviderEvents = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
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
    },
    {
      id: 5,
      title: "Python for Beginners",
      description: "Complete Python programming course for absolute beginners",
      date: "2025-08-20",
      time: "9:00 AM",
      duration: "6 hours",
      location: "Online",
      category: "Programming",
      registrations: 15,
      capacity: 25,
      price: 599,
      status: "active",
      approvalStatus: "approved",
      prerequisites: "None",
      createdAt: "2025-07-20",
      expiresAt: "2025-08-19"
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      description: "Learn modern digital marketing techniques and strategies",
      date: "2025-08-25",
      time: "2:00 PM",
      duration: "4 hours",
      location: "Mumbai",
      category: "Marketing",
      registrations: 22,
      capacity: 30,
      price: 899,
      status: "active",
      approvalStatus: "approved",
      prerequisites: "Basic marketing knowledge",
      createdAt: "2025-07-22",
      expiresAt: "2025-08-24"
    }
  ];

  const EventCard = ({ event }) => {
    const getStatusBadge = (status, approvalStatus) => {
      if (approvalStatus === 'pending') {
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending Approval</span>;
      }
      switch (status) {
        case 'active':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
        case 'full':
          return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Full</span>;
        case 'pending':
          return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
        case 'completed':
          return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Completed</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
      }
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{event.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {event.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                ₹{event.price}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  <Users className="h-4 w-4 inline mr-1" />
                  {event.registrations}/{event.capacity} registered
                </span>
                <span className="text-sm text-gray-600">
                  <Star className="h-4 w-4 inline mr-1 text-yellow-500" />
                  4.8
                </span>
              </div>
              {getStatusBadge(event.status, event.approvalStatus)}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
            <Eye className="h-4 w-4 mr-1" />
            View Details
          </button>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </button>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </button>
        </div>
      </div>
    );
  };

  const filteredEvents = recentEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus || event.approvalStatus === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="My Events"
      pageDescription="Manage and track all your events"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Events</h2>
        <button 
          onClick={() => router.push('/providers/events/create')}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
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

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first event.'
            }
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-4 w-4 inline mr-2" />
            Create Event
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ProviderEvents;
