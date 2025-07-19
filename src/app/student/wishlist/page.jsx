'use client'
import React, { useState } from 'react';
import { Heart, BookOpen, Calendar, Star, Search, Filter, Trash2, Eye, DollarSign, Clock, Users } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const StudentWishlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock student data
  const userInfo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@student.com",
    verified: true
  };

  const wishlistItems = [
    {
      id: 1,
      type: 'course',
      title: "Advanced Machine Learning",
      description: "Deep dive into advanced ML algorithms, neural networks, and deep learning frameworks",
      provider: "AI Learning Center",
      category: "Machine Learning",
      level: "Advanced",
      duration: "10 weeks",
      lessons: 40,
      price: 3999,
      originalPrice: 4999,
      rating: 4.9,
      totalReviews: 234,
      students: 567,
      addedDate: "2025-01-18",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      type: 'event',
      title: "Blockchain Development Workshop",
      description: "Learn blockchain fundamentals, smart contracts, and decentralized applications",
      provider: "CryptoTech Institute",
      category: "Blockchain",
      level: "Intermediate",
      date: "2025-08-10",
      time: "2:00 PM",
      duration: "6 hours",
      location: "Online",
      price: 599,
      originalPrice: 799,
      totalParticipants: 45,
      maxParticipants: 50,
      rating: 4.7,
      totalReviews: 89,
      addedDate: "2025-01-15"
    },
    {
      id: 3,
      type: 'course',
      title: "Full Stack Development with MERN",
      description: "Master MongoDB, Express.js, React, and Node.js for complete web development",
      provider: "WebDev Academy",
      category: "Web Development",
      level: "Intermediate",
      duration: "14 weeks",
      lessons: 56,
      price: 2999,
      originalPrice: 3499,
      rating: 4.8,
      totalReviews: 156,
      students: 423,
      addedDate: "2025-01-12"
    },
    {
      id: 4,
      type: 'event',
      title: "Data Science Career Fair",
      description: "Connect with top companies and learn about data science career opportunities",
      provider: "DataPro Network",
      category: "Career Development",
      level: "All Levels",
      date: "2025-08-25",
      time: "10:00 AM",
      duration: "4 hours",
      location: "Mumbai",
      price: 299,
      originalPrice: 399,
      totalParticipants: 120,
      maxParticipants: 150,
      rating: 4.6,
      totalReviews: 67,
      addedDate: "2025-01-10"
    },
    {
      id: 5,
      type: 'course',
      title: "DevOps Engineering Bootcamp",
      description: "Learn CI/CD, Docker, Kubernetes, and cloud deployment strategies",
      provider: "CloudTech Institute",
      category: "DevOps",
      level: "Advanced",
      duration: "8 weeks",
      lessons: 32,
      price: 2499,
      originalPrice: 2999,
      rating: 4.7,
      totalReviews: 98,
      students: 234,
      addedDate: "2025-01-08"
    },
    {
      id: 6,
      type: 'event',
      title: "UI/UX Design Sprint",
      description: "Intensive design sprint workshop focusing on user experience and interface design",
      provider: "Design Studio Pro",
      category: "Design",
      level: "Beginner",
      date: "2025-09-05",
      time: "11:00 AM",
      duration: "8 hours",
      location: "Online",
      price: 499,
      originalPrice: 699,
      totalParticipants: 35,
      maxParticipants: 40,
      rating: 4.8,
      totalReviews: 45,
      addedDate: "2025-01-05"
    }
  ];

  const WishlistCard = ({ item }) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    const getDiscountPercentage = () => {
      if (item.originalPrice && item.price) {
        return Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
      }
      return 0;
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className={`w-20 h-20 rounded-lg flex items-center justify-center ${
              item.type === 'course' ? 'bg-blue-100' : 'bg-green-100'
            }`}>
              {item.type === 'course' ? (
                <BookOpen className="h-8 w-8 text-blue-600" />
              ) : (
                <Calendar className="h-8 w-8 text-green-600" />
              )}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.type === 'course' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.type === 'course' ? 'Course' : 'Event'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-sm text-gray-500">by {item.provider}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.totalReviews})</span>
                </div>
                {getDiscountPercentage() > 0 && (
                  <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                    {getDiscountPercentage()}% OFF
                  </span>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
              {item.type === 'course' ? (
                <>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {item.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {item.students} students
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">{item.level}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.time} ({item.duration})
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {item.totalParticipants}/{item.maxParticipants}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">{item.location}</span>
                  </div>
                </>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{item.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">Added {formatDate(item.addedDate)}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {item.originalPrice && item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                  )}
                  <span className="text-lg font-semibold text-gray-900">₹{item.price}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </button>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg">
                  {item.type === 'course' ? 'Enroll Now' : 'Register Now'}
                </button>
              </div>
              
              <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredItems = wishlistItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStats = () => {
    const total = wishlistItems.length;
    const courses = wishlistItems.filter(item => item.type === 'course').length;
    const events = wishlistItems.filter(item => item.type === 'event').length;
    const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);

    return { total, courses, events, totalValue };
  };

  const stats = getStats();

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="My Wishlist"
      pageDescription="Manage your saved courses and events"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-red-500">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Courses</p>
              <p className="text-2xl font-bold text-gray-900">{stats.courses}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Events</p>
              <p className="text-2xl font-bold text-gray-900">{stats.events}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.totalValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search wishlist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Items</option>
          <option value="course">Courses</option>
          <option value="event">Events</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterType !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Your wishlist is empty. Start adding courses and events you\'re interested in!'
            }
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Browse Courses
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Browse Events
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentWishlist; 