'use client'
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Search, Filter, CheckCircle, AlertCircle, DollarSign, Eye } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const StudentEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock student data
  const userInfo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@student.com",
    verified: true
  };

  const events = [
    {
      id: 1,
      title: "Advanced React Workshop",
      description: "Learn advanced React patterns, hooks, and state management techniques",
      provider: "TechSkills Institute",
      category: "Web Development",
      level: "Intermediate",
      date: "2025-07-25",
      time: "2:00 PM",
      duration: "4 hours",
      location: "Online",
      locationType: "online",
      price: 299,
      status: "upcoming",
      registrationStatus: "confirmed",
      totalParticipants: 45,
      maxParticipants: 50,
      rating: 4.8,
      totalReviews: 89,
      registeredDate: "2025-01-15",
      meetingLink: "https://zoom.us/j/123456789",
      prerequisites: "Basic JavaScript knowledge",
      agenda: [
        { time: "2:00 PM", activity: "Introduction", description: "Welcome and overview" },
        { time: "2:15 PM", activity: "React Hooks Deep Dive", description: "Advanced hooks patterns" },
        { time: "3:30 PM", activity: "State Management", description: "Context API and Redux" },
        { time: "4:30 PM", activity: "Q&A Session", description: "Open discussion and questions" }
      ]
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      description: "Complete introduction to data science with Python and machine learning",
      provider: "DataPro Academy",
      category: "Data Science",
      level: "Beginner",
      date: "2025-08-01",
      time: "10:00 AM",
      duration: "8 hours",
      location: "Bhopal Tech Hub, Sector 7",
      locationType: "offline",
      price: 1499,
      status: "upcoming",
      registrationStatus: "confirmed",
      totalParticipants: 28,
      maxParticipants: 30,
      rating: 4.9,
      totalReviews: 67,
      registeredDate: "2025-01-10",
      meetingLink: null,
      prerequisites: "Basic programming knowledge",
      agenda: [
        { time: "10:00 AM", activity: "Introduction to Data Science", description: "Overview and setup" },
        { time: "11:00 AM", activity: "Python Basics", description: "Python programming fundamentals" },
        { time: "12:30 PM", activity: "Lunch Break", description: "1 hour break" },
        { time: "1:30 PM", activity: "Pandas & NumPy", description: "Data manipulation libraries" },
        { time: "3:30 PM", activity: "Machine Learning Intro", description: "Basic ML concepts" },
        { time: "5:30 PM", activity: "Hands-on Project", description: "Real-world data analysis" }
      ]
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Master the principles of user experience design and prototyping",
      provider: "Design Studio Pro",
      category: "Design",
      level: "Beginner",
      date: "2025-07-22",
      time: "4:00 PM",
      duration: "6 hours",
      location: "Online",
      locationType: "online",
      price: 399,
      status: "completed",
      registrationStatus: "attended",
      totalParticipants: 67,
      maxParticipants: 60,
      rating: 4.7,
      totalReviews: 45,
      registeredDate: "2025-01-05",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      prerequisites: "None",
      agenda: [
        { time: "4:00 PM", activity: "Design Principles", description: "Core UX/UI concepts" },
        { time: "5:00 PM", activity: "Figma Workshop", description: "Hands-on Figma tutorial" },
        { time: "6:30 PM", activity: "User Research", description: "Research methodologies" },
        { time: "7:30 PM", activity: "Prototyping", description: "Creating interactive prototypes" }
      ]
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML algorithms and their practical implementations",
      provider: "AI Learning Center",
      category: "Machine Learning",
      level: "Advanced",
      date: "2025-08-15",
      time: "11:00 AM",
      duration: "5 hours",
      location: "Online",
      locationType: "online",
      price: 799,
      status: "upcoming",
      registrationStatus: "waitlist",
      totalParticipants: 40,
      maxParticipants: 40,
      rating: 4.6,
      totalReviews: 34,
      registeredDate: "2025-01-18",
      meetingLink: "https://teams.microsoft.com/l/meetup-join/123",
      prerequisites: "Python programming, Statistics basics",
      agenda: [
        { time: "11:00 AM", activity: "ML Overview", description: "Introduction to machine learning" },
        { time: "12:00 PM", activity: "Supervised Learning", description: "Classification and regression" },
        { time: "1:30 PM", activity: "Lunch Break", description: "30 minute break" },
        { time: "2:00 PM", activity: "Unsupervised Learning", description: "Clustering and dimensionality reduction" },
        { time: "3:30 PM", activity: "Model Evaluation", description: "Cross-validation and metrics" }
      ]
    }
  ];

  const EventCard = ({ event }) => {
    const getStatusBadge = (status) => {
      switch (status) {
        case 'completed':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span>;
        case 'upcoming':
          return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Upcoming</span>;
        case 'cancelled':
          return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Cancelled</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
      }
    };

    const getRegistrationBadge = (status) => {
      switch (status) {
        case 'confirmed':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Confirmed</span>;
        case 'waitlist':
          return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Waitlist</span>;
        case 'attended':
          return <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Attended</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
      }
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    const isEventToday = (dateString) => {
      const today = new Date();
      const eventDate = new Date(dateString);
      return today.toDateString() === eventDate.toDateString();
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                <p className="text-sm text-gray-500">by {event.provider}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                {getStatusBadge(event.status)}
                {getRegistrationBadge(event.registrationStatus)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(event.date)}
                {isEventToday(event.date) && (
                  <span className="ml-1 px-1 py-0.5 bg-red-100 text-red-800 text-xs rounded">Today</span>
                )}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {event.time} ({event.duration})
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {event.locationType === 'online' ? 'Online' : event.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                ₹{event.price}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {event.totalParticipants}/{event.maxParticipants} participants
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                {event.rating} ({event.totalReviews})
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">{event.category}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">{event.level}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Prerequisites: {event.prerequisites}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {event.meetingLink && event.status === 'upcoming' && (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Eye className="h-4 w-4 mr-1" />
                    Join Event
                  </button>
                )}
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Calendar className="h-4 w-4 mr-1" />
                  View Details
                </button>
                {event.status === 'upcoming' && event.registrationStatus === 'confirmed' && (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                    Cancel Registration
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStats = () => {
    const total = events.length;
    const upcoming = events.filter(e => e.status === 'upcoming').length;
    const completed = events.filter(e => e.status === 'completed').length;
    const confirmed = events.filter(e => e.registrationStatus === 'confirmed').length;

    return { total, upcoming, completed, confirmed };
  };

  const stats = getStats();

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="My Events"
      pageDescription="Track your event registrations and manage your schedule"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Events</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">{stats.upcoming}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-500">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.confirmed}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Events</h2>
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
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
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
              : 'You haven\'t registered for any events yet.'
            }
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Browse Events
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentEvents; 