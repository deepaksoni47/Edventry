'use client'
import React, { useState } from 'react';
import { BookOpen, Play, Clock, Users, Star, Search, Filter, CheckCircle, AlertCircle, Calendar, Award, TrendingUp } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const StudentCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock student data
  const userInfo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@student.com",
    verified: true
  };

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level",
      provider: "TechSkills Institute",
      category: "Web Development",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      totalLessons: 48,
      completedLessons: 32,
      progress: 67,
      status: "in_progress",
      rating: 4.8,
      totalReviews: 89,
      enrolledDate: "2025-01-10",
      lastAccessed: "2025-01-20",
      nextLesson: "React Hooks Deep Dive",
      certificate: null
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master Python, Pandas, NumPy, and Machine Learning basics",
      provider: "DataPro Academy",
      category: "Data Science",
      level: "Intermediate",
      duration: "8 weeks",
      totalLessons: 32,
      completedLessons: 32,
      progress: 100,
      status: "completed",
      rating: 4.9,
      totalReviews: 67,
      enrolledDate: "2024-12-01",
      lastAccessed: "2025-01-15",
      nextLesson: null,
      certificate: "DSF001"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn design principles, Figma, and user experience design",
      provider: "Design Studio Pro",
      category: "Design",
      level: "Beginner",
      duration: "6 weeks",
      totalLessons: 24,
      completedLessons: 8,
      progress: 33,
      status: "in_progress",
      rating: 4.7,
      totalReviews: 45,
      enrolledDate: "2025-01-15",
      lastAccessed: "2025-01-19",
      nextLesson: "Figma Components",
      certificate: null
    },
    {
      id: 4,
      title: "Python for Beginners",
      description: "Complete Python programming course for absolute beginners",
      provider: "CodeMaster Academy",
      category: "Programming",
      level: "Beginner",
      duration: "4 weeks",
      totalLessons: 16,
      completedLessons: 16,
      progress: 100,
      status: "completed",
      rating: 4.6,
      totalReviews: 156,
      enrolledDate: "2024-11-15",
      lastAccessed: "2024-12-10",
      nextLesson: null,
      certificate: "PYTH001"
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps using React Native",
      provider: "MobileDev Institute",
      category: "Mobile Development",
      level: "Advanced",
      duration: "10 weeks",
      totalLessons: 40,
      completedLessons: 0,
      progress: 0,
      status: "not_started",
      rating: 4.7,
      totalReviews: 34,
      enrolledDate: "2025-01-18",
      lastAccessed: null,
      nextLesson: "Introduction to React Native",
      certificate: null
    }
  ];

  const CourseCard = ({ course }) => {
    const getStatusBadge = (status) => {
      switch (status) {
        case 'completed':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span>;
        case 'in_progress':
          return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">In Progress</span>;
        case 'not_started':
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Not Started</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
      }
    };

    const getStatusIcon = (status) => {
      switch (status) {
        case 'completed':
          return <CheckCircle className="h-4 w-4 text-green-500" />;
        case 'in_progress':
          return <Play className="h-4 w-4 text-blue-500" />;
        case 'not_started':
          return <AlertCircle className="h-4 w-4 text-gray-500" />;
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
                <p className="text-sm text-gray-500">by {course.provider}</p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(course.status)}
                {getStatusBadge(course.status)}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                <span>{course.completedLessons} of {course.totalLessons} lessons completed</span>
                <span>{course.duration}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {course.totalLessons} lessons
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                {course.rating}
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                {course.certificate ? 'Certificate' : 'No Certificate'}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{course.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{course.level}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                {course.nextLesson && (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Play className="h-4 w-4 mr-1" />
                    Continue
                  </button>
                )}
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                  <BookOpen className="h-4 w-4 mr-1" />
                  View Course
                </button>
                {course.certificate && (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg">
                    <Award className="h-4 w-4 mr-1" />
                    Download Certificate
                  </button>
                )}
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
                         course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStats = () => {
    const total = courses.length;
    const completed = courses.filter(c => c.status === 'completed').length;
    const inProgress = courses.filter(c => c.status === 'in_progress').length;
    const notStarted = courses.filter(c => c.status === 'not_started').length;
    const avgProgress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / total);

    return { total, completed, inProgress, notStarted, avgProgress };
  };

  const stats = getStats();

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="My Courses"
      pageDescription="Track your learning progress and manage your enrolled courses"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Courses</p>
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
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stats.avgProgress}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
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
          <option value="completed">Completed</option>
          <option value="in_progress">In Progress</option>
          <option value="not_started">Not Started</option>
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
              : 'You haven\'t enrolled in any courses yet.'
            }
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Browse Courses
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentCourses; 