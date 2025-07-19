'use client'
import React, { useState } from 'react';
import { Calendar, Users, TrendingUp, Plus, Eye, Edit, Trash2, Clock, MapPin, DollarSign, Star, Bell, Settings, LogOut, Menu, X, CheckCircle, XCircle, AlertCircle, Filter, Search, BookOpen } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';
import { useRouter } from 'next/navigation';

const ProviderDashboard = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
  };

  const stats = {
    // Events Stats
    totalEvents: 24,
    activeEvents: 12,
    pendingApproval: 3,
    completedEvents: 9,
    
    // Courses Stats
    totalCourses: 8,
    activeCourses: 6,
    draftCourses: 2,
    completedCourses: 2,
    
    // Combined Stats
    totalStudents: 1247,
    monthlyRevenue: 15240,
    courseEnrollments: 456,
    eventRegistrations: 791
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

  const recentCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level",
      category: "Web Development",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      lessons: 48,
      students: 156,
      price: 2999,
      status: "active",
      rating: 4.8,
      totalReviews: 89,
      createdAt: "2025-01-10"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master Python, Pandas, NumPy, and Machine Learning basics",
      category: "Data Science",
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 32,
      students: 98,
      price: 2499,
      status: "active",
      rating: 4.9,
      totalReviews: 67,
      createdAt: "2025-01-05"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn design principles, Figma, and user experience design",
      category: "Design",
      level: "Beginner",
      duration: "6 weeks",
      lessons: 24,
      students: 73,
      price: 1999,
      status: "draft",
      rating: 0,
      totalReviews: 0,
      createdAt: "2025-01-18"
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
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            {event.registrations}/{event.capacity} registered
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-gray-500">{event.category}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => router.push(`/providers/events/${event.id}`)}
              className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              <Eye className="h-4 w-4 mr-1" />
              View Details
            </button>
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </button>
          </div>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </button>
        </div>
      </div>
    );
  };

  const CourseCard = ({ course }) => {
    const getStatusBadge = (status) => {
      switch (status) {
        case 'active':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
        case 'draft':
          return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Draft</span>;
        case 'completed':
          return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Completed</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Inactive</span>;
      }
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{course.description}</p>
          </div>
          {getStatusBadge(course.status)}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="h-4 w-4 mr-2" />
            {course.duration} • {course.lessons} lessons
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            {course.students} students
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            ₹{course.price}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            {course.rating > 0 ? course.rating : 'No ratings'} ({course.totalReviews})
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{course.category}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">{course.level}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
              <Eye className="h-4 w-4 mr-1" />
              View
            </button>
            <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  };

  const InquiryCard = ({ inquiry }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{inquiry.student}</h4>
          <p className="text-xs text-gray-500">{inquiry.studentEmail}</p>
        </div>
        <div className="flex items-center space-x-2">
          {inquiry.unread && (
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          )}
          <span className="text-xs text-gray-500">{inquiry.time}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Event:</span> {inquiry.event}
      </p>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{inquiry.message}</p>
      <div className="flex items-center space-x-2">
        <button className="flex items-center px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">
          Reply
        </button>
        <button className="flex items-center px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="Dashboard"
      pageDescription="Welcome back! Here's your overview"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={Calendar}
          title="Total Events"
          value={stats.totalEvents}
          change={12}
          color="bg-blue-500"
          subtitle={`${stats.activeEvents} active, ${stats.pendingApproval} pending`}
        />
        <StatsCard
          icon={BookOpen}
          title="Total Courses"
          value={stats.totalCourses}
          change={8}
          color="bg-green-500"
          subtitle={`${stats.activeCourses} active, ${stats.draftCourses} draft`}
        />
        <StatsCard
          icon={Users}
          title="Total Students"
          value={stats.totalStudents}
          change={15}
          color="bg-purple-500"
          subtitle={`${stats.courseEnrollments} course enrollments`}
        />
        <StatsCard
          icon={TrendingUp}
          title="Monthly Revenue"
          value={`₹${stats.monthlyRevenue.toLocaleString()}`}
          change={23}
          color="bg-yellow-500"
          subtitle={`${stats.eventRegistrations} event registrations`}
        />
      </div>

      {/* Quick Actions */}
      <div className="flex items-center space-x-4 mb-8">
        <button 
          onClick={() => router.push('/providers/events/create')}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </button>
        <button 
          onClick={() => router.push('/providers/courses/create')}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Course
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Events */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Events</h2>
            <a href="/providers/events" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Recent Courses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Courses</h2>
            <a href="/providers/courses" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Inquiries */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Student Inquiries</h2>
          <a href="/providers/inquiries" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inquiries.map((inquiry) => (
            <InquiryCard key={inquiry.id} inquiry={inquiry} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProviderDashboard;