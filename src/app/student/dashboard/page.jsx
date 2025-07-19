'use client'
import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, MapPin, Users, Clock, Star, BookOpen, TrendingUp, Bell } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: "Advanced React Hooks Workshop",
    provider: "Tech Institute Mumbai",
    date: "2025-07-25",
    time: "10:00 AM",
    duration: "4 hours",
    location: "Online",
    category: "Web Development",
    level: "Intermediate",
    capacity: 50,
    registered: 35,
    price: "Free",
    rating: 4.8,
    description: "Deep dive into React Hooks, custom hooks, and advanced patterns.",
    image: "/api/placeholder/300/200",
    verified: true
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    provider: "AI Learning Hub",
    date: "2025-07-28",
    time: "2:00 PM", 
    duration: "6 hours",
    location: "Bangalore",
    category: "Data Science",
    level: "Beginner",
    capacity: 30,
    registered: 28,
    price: "₹500",
    rating: 4.9,
    description: "Introduction to ML concepts, algorithms, and practical implementation.",
    image: "/api/placeholder/300/200",
    verified: true
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    provider: "Marketing Pro Academy",
    date: "2025-07-30",
    time: "11:00 AM",
    duration: "3 hours",
    location: "Delhi",
    category: "Marketing",
    level: "Intermediate",
    capacity: 40,
    registered: 12,
    price: "₹800",
    rating: 4.6,
    description: "Complete guide to modern digital marketing strategies and tools.",
    image: "/api/placeholder/300/200",
    verified: false
  },
  {
    id: 4,
    title: "UI/UX Design Bootcamp",
    provider: "Design Studio",
    date: "2025-08-02",
    time: "9:00 AM",
    duration: "8 hours",
    location: "Online",
    category: "Design",
    level: "Beginner",
    capacity: 25,
    registered: 20,
    price: "₹1200",
    rating: 4.7,
    description: "Comprehensive bootcamp covering design principles and tools.",
    image: "/api/placeholder/300/200",
    verified: true
  }
];

const categories = ["All", "Web Development", "Data Science", "Marketing", "Design", "Business"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const locations = ["All", "Online", "Mumbai", "Delhi", "Bangalore"];

export default function StudentDashboard() {
  const [events, setEvents] = useState(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Mock user info
  const userInfo = {
    name: "John Doe",
    email: "john.doe@student.com",
    verified: true
  };

  // Filter events based on search and filters
  useEffect(() => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (selectedLevel !== "All") {
      filtered = filtered.filter(event => event.level === selectedLevel);
    }

    if (selectedLocation !== "All") {
      filtered = filtered.filter(event => event.location === selectedLocation);
    }

    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, selectedLocation, events]);

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            event.price === "Free" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
          }`}>
            {event.price}
          </span>
        </div>
        {event.verified && (
          <div className="absolute top-3 right-3">
            <div className="bg-blue-500 text-white p-1 rounded-full">
              <Star className="w-3 h-3 fill-current" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-gray-900 leading-tight">
            {event.title}
          </h3>
          <div className="flex items-center text-yellow-500 text-sm ml-2">
            <Star className="w-4 h-4 fill-current mr-1" />
            {event.rating}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <BookOpen className="w-4 h-4 mr-2" />
            {event.provider}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString()} at {event.time}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {event.duration}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {event.registered}/{event.capacity} registered
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            event.level === "Beginner" ? "bg-green-100 text-green-800" :
            event.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
            "bg-red-100 text-red-800"
          }`}>
            {event.level}
          </span>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Provider
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="Student Dashboard"
      pageDescription="Discover and join learning opportunities"
    >
      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available Events</p>
                <p className="text-2xl font-bold text-gray-900">{filteredEvents.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Registered Events</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Trending</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, providers, or topics..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Events Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Available Events ({filteredEvents.length})
            </h2>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort by Date</option>
              <option>Sort by Popularity</option>
              <option>Sort by Rating</option>
              <option>Sort by Price</option>
            </select>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}