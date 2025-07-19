'use client'
import React, { useState } from 'react';
import { Search, Filter, Star, Users, Clock, Calendar, MapPin, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EventsListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('upcoming');

  // Mock events data
  const events = [
    {
      id: 1,
      title: "Advanced React Workshop",
      description: "Learn advanced React patterns, hooks, and state management. Build real-world applications and master modern React development techniques.",
      organizer: "TechSkills Institute",
      organizerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "Web Development",
      location: "Online",
      date: "2025-07-25",
      time: "2:00 PM",
      duration: "4 hours",
      registrations: 45,
      capacity: 50,
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      totalReviews: 23,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["React", "JavaScript", "Frontend", "Workshop"],
      status: "upcoming"
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      description: "Complete introduction to data science with Python. Learn data analysis, visualization, and machine learning fundamentals.",
      organizer: "DataPro Academy",
      organizerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Data Science",
      location: "Bhopal Tech Hub, Sector 7",
      date: "2025-08-01",
      time: "10:00 AM",
      duration: "8 hours",
      registrations: 28,
      capacity: 30,
      price: 1499,
      originalPrice: 1999,
      rating: 4.9,
      totalReviews: 45,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Python", "Data Science", "Machine Learning", "Bootcamp"],
      status: "upcoming"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Master the principles of user experience design. Learn to create beautiful interfaces and improve user engagement.",
      organizer: "Design Studio Pro",
      organizerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Design",
      location: "Online",
      date: "2025-07-22",
      time: "4:00 PM",
      duration: "6 hours",
      registrations: 67,
      capacity: 60,
      price: 399,
      originalPrice: 499,
      rating: 4.7,
      totalReviews: 34,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      tags: ["UI/UX", "Figma", "Design", "Masterclass"],
      status: "upcoming"
    },
    {
      id: 4,
      title: "Mobile App Development Workshop",
      description: "Build cross-platform mobile apps using React Native. Learn to create iOS and Android apps with a single codebase.",
      organizer: "MobileDev Academy",
      organizerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Mobile Development",
      location: "Delhi Tech Center",
      date: "2025-08-15",
      time: "11:00 AM",
      duration: "5 hours",
      registrations: 32,
      capacity: 40,
      price: 799,
      originalPrice: 999,
      rating: 4.6,
      totalReviews: 28,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["React Native", "Mobile Apps", "iOS", "Android"],
      status: "upcoming"
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML algorithms and implementations. Build intelligent systems from scratch.",
      organizer: "AI Institute",
      organizerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      category: "Machine Learning",
      location: "Online",
      date: "2025-08-20",
      time: "3:00 PM",
      duration: "7 hours",
      registrations: 18,
      capacity: 25,
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      totalReviews: 56,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["Machine Learning", "Python", "AI", "Algorithms"],
      status: "upcoming"
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      description: "Master digital marketing techniques including SEO, social media, email marketing, and analytics.",
      organizer: "Marketing Masters",
      organizerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      category: "Marketing",
      location: "Mumbai Business Hub",
      date: "2025-07-30",
      time: "1:00 PM",
      duration: "4 hours",
      registrations: 42,
      capacity: 50,
      price: 599,
      originalPrice: 799,
      rating: 4.5,
      totalReviews: 31,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
      status: "upcoming"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'online', name: 'Online' },
    { id: 'bhopal', name: 'Bhopal' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'bangalore', name: 'Bangalore' }
  ];

  const sortOptions = [
    { id: 'upcoming', name: 'Upcoming First' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' }
  ];

  // Filter and sort events
  const filteredEvents = events
    .filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase().replace(' ', '-') === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || event.location.toLowerCase().includes(selectedLocation);
      return matchesSearch && matchesCategory && matchesLocation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.registrations - a.registrations;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default: // upcoming
          return new Date(a.date) - new Date(b.date);
      }
    });

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
            {event.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-green-600 text-white px-2 py-1 text-xs font-medium rounded">
            {event.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <img 
            src={event.organizerAvatar} 
            alt={event.organizer}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-600">{event.organizer}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {event.registrations}/{event.capacity}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              {event.rating} ({event.totalReviews})
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {event.duration}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            {event.date} at {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            {event.location}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">₹{event.price.toLocaleString()}</span>
            {event.originalPrice > event.price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{event.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Link 
            href={`/events/${event.id}`}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Play className="h-4 w-4 mr-1" />
            View Event
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Events</h1>
          <p className="text-xl mb-8">Join workshops, bootcamps, and masterclasses from industry experts</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for events, organizers, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {locations.map(location => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredEvents.length} of {events.length} events
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* No Results */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default EventsListingPage; 