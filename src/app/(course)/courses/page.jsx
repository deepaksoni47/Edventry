'use client'
import React, { useState } from 'react';
import { Search, Filter, Star, Users, Clock, Calendar, BookOpen, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CourseListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Mock course data
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level. Build real-world projects and become a full-stack developer.",
      instructor: "Sarah Johnson",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "Web Development",
      level: "Beginner",
      duration: "12 weeks",
      lessons: 48,
      students: 1247,
      rating: 4.8,
      totalReviews: 89,
      price: 2999,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      lastUpdated: "2025-01-15"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master Python, Pandas, NumPy, and Machine Learning basics. Learn data analysis, visualization, and predictive modeling.",
      instructor: "Dr. Michael Chen",
      instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Data Science",
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 32,
      students: 892,
      rating: 4.9,
      totalReviews: 156,
      price: 2499,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Python", "Pandas", "NumPy", "Machine Learning"],
      lastUpdated: "2025-01-10"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn design principles, Figma, and user experience design. Create beautiful interfaces and improve user engagement.",
      instructor: "Emily Rodriguez",
      instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Design",
      level: "Beginner",
      duration: "6 weeks",
      lessons: 24,
      students: 567,
      rating: 4.7,
      totalReviews: 78,
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      tags: ["Figma", "UI Design", "UX Design", "Prototyping"],
      lastUpdated: "2025-01-12"
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps using React Native. Learn to create iOS and Android apps with a single codebase.",
      instructor: "Alex Thompson",
      instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "10 weeks",
      lessons: 40,
      students: 734,
      rating: 4.6,
      totalReviews: 92,
      price: 3499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["React Native", "JavaScript", "Mobile Apps", "iOS", "Android"],
      lastUpdated: "2025-01-08"
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      description: "Deep dive into machine learning algorithms, neural networks, and AI applications. Build intelligent systems from scratch.",
      instructor: "Dr. Priya Sharma",
      instructorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      category: "Machine Learning",
      level: "Advanced",
      duration: "14 weeks",
      lessons: 56,
      students: 445,
      rating: 4.9,
      totalReviews: 134,
      price: 4499,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["Python", "TensorFlow", "Neural Networks", "AI"],
      lastUpdated: "2025-01-05"
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      description: "Master digital marketing techniques including SEO, social media, email marketing, and analytics. Grow your business online.",
      instructor: "David Wilson",
      instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      category: "Marketing",
      level: "Beginner",
      duration: "8 weeks",
      lessons: 28,
      students: 678,
      rating: 4.5,
      totalReviews: 67,
      price: 1799,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["SEO", "Social Media", "Email Marketing", "Analytics"],
      lastUpdated: "2025-01-14"
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

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' }
  ];

  // Filter and sort courses
  const filteredCourses = courses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase().replace(' ', '-') === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default: // popular
          return b.students - a.students;
      }
    });

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
            {course.level}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <img 
            src={course.instructorAvatar} 
            alt={course.instructor}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-600">{course.instructor}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {course.students.toLocaleString()}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              {course.rating} ({course.totalReviews})
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {course.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
            {course.originalPrice > course.price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Link 
            href={`/courses/${course.id}`}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Play className="h-4 w-4 mr-1" />
            View Course
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Courses</h1>
          <p className="text-xl mb-8">Learn from industry experts and advance your career with our comprehensive online courses</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for courses, instructors, or topics..."
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
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {levels.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
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
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* No Results */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default CourseListingPage; 