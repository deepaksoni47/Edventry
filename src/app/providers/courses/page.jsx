'use client'
import React, { useState } from 'react';
import { BookOpen, Plus, Eye, Edit, Trash2, Clock, Users, Star, Search, Filter, Play, Pause, CheckCircle, AlertCircle } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const ProviderCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
  };

  const courses = [
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
      image: "/api/placeholder/300/200",
      createdAt: "2025-01-10",
      lastUpdated: "2025-01-15"
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
      image: "/api/placeholder/300/200",
      createdAt: "2025-01-05",
      lastUpdated: "2025-01-12"
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
      image: "/api/placeholder/300/200",
      createdAt: "2025-01-18",
      lastUpdated: "2025-01-18"
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps using React Native",
      category: "Mobile Development",
      level: "Advanced",
      duration: "10 weeks",
      lessons: 40,
      students: 45,
      price: 3499,
      status: "active",
      rating: 4.7,
      totalReviews: 34,
      image: "/api/placeholder/300/200",
      createdAt: "2025-01-08",
      lastUpdated: "2025-01-14"
    },
    {
      id: 5,
      title: "Python for Beginners",
      description: "Complete Python programming course for absolute beginners",
      category: "Programming",
      level: "Beginner",
      duration: "4 weeks",
      lessons: 16,
      students: 234,
      price: 1499,
      status: "active",
      rating: 4.6,
      totalReviews: 156,
      image: "/api/placeholder/300/200",
      createdAt: "2025-01-02",
      lastUpdated: "2025-01-10"
    }
  ];

  const CourseCard = ({ course }) => {
    const getStatusBadge = (status) => {
      switch (status) {
        case 'active':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
        case 'draft':
          return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Draft</span>;
        case 'archived':
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Archived</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
      }
    };

    const getStatusIcon = (status) => {
      switch (status) {
        case 'active':
          return <CheckCircle className="h-4 w-4 text-green-500" />;
        case 'draft':
          return <AlertCircle className="h-4 w-4 text-yellow-500" />;
        default:
          return <AlertCircle className="h-4 w-4 text-gray-500" />;
      }
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{course.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(course.status)}
                {getStatusBadge(course.status)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {course.lessons} lessons
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {course.students} students
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                {course.rating > 0 ? course.rating : 'No ratings'}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{course.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{course.level}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm font-semibold text-gray-900">₹{course.price}</span>
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
                <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="My Courses"
      pageDescription="Manage and track all your courses"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Course
        </button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
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
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first course.'
            }
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-4 w-4 inline mr-2" />
            Create Course
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ProviderCourses; 