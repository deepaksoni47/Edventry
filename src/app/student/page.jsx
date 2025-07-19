'use client'
import React from 'react';
import { BookOpen, Calendar, Award, Heart, TrendingUp, Users, Star, CheckCircle, Play, Clock } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const StudentDashboard = () => {
  // Mock student data
  const userInfo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@student.com",
    verified: true
  };

  // Mock dashboard data
  const stats = {
    totalCourses: 5,
    completedCourses: 2,
    inProgressCourses: 2,
    totalEvents: 4,
    upcomingEvents: 2,
    completedEvents: 1,
    totalCertificates: 3,
    avgProgress: 67,
    totalHours: 48,
    achievements: 8
  };

  const recentCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      provider: "TechSkills Institute",
      progress: 67,
      lastAccessed: "2 hours ago",
      nextLesson: "React Hooks Deep Dive"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      provider: "DataPro Academy",
      progress: 100,
      lastAccessed: "1 day ago",
      nextLesson: null
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      provider: "Design Studio Pro",
      progress: 33,
      lastAccessed: "3 hours ago",
      nextLesson: "Figma Components"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced React Workshop",
      date: "2025-07-25",
      time: "2:00 PM",
      location: "Online",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      date: "2025-08-01",
      time: "10:00 AM",
      location: "Bhopal Tech Hub",
      status: "confirmed"
    }
  ];

  const recentCertificates = [
    {
      id: 1,
      title: "Data Science Fundamentals",
      provider: "DataPro Academy",
      issueDate: "2025-01-15",
      grade: "A+"
    },
    {
      id: 2,
      title: "Python for Beginners",
      provider: "CodeMaster Academy",
      issueDate: "2024-12-10",
      grade: "A"
    }
  ];

  const achievements = [
    { id: 1, title: "First Course Completed", description: "Completed your first course", icon: CheckCircle, color: "green" },
    { id: 2, title: "Perfect Score", description: "Achieved 100% in a course", icon: Star, color: "yellow" },
    { id: 3, title: "Event Attendee", description: "Attended your first event", icon: Calendar, color: "blue" },
    { id: 4, title: "Learning Streak", description: "7 days of continuous learning", icon: TrendingUp, color: "purple" }
  ];

  const CourseCard = ({ course }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">{course.title}</h4>
          <p className="text-xs text-gray-500">{course.provider}</p>
        </div>
        <span className="text-xs text-gray-500">{course.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Last accessed: {course.lastAccessed}</span>
        {course.nextLesson && (
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            <Play className="h-3 w-3 mr-1" />
            Continue
          </button>
        )}
      </div>
    </div>
  );

  const EventCard = ({ event }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">{event.title}</h4>
          <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          event.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {event.status}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-2">{event.location}</p>
      <button className="text-xs text-blue-600 hover:text-blue-700">
        View Details →
      </button>
    </div>
  );

  const CertificateCard = ({ certificate }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">{certificate.title}</h4>
          <p className="text-xs text-gray-500">{certificate.provider}</p>
        </div>
        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
          {certificate.grade}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-2">Issued: {certificate.issueDate}</p>
      <button className="text-xs text-blue-600 hover:text-blue-700">
        Download →
      </button>
    </div>
  );

  const AchievementCard = ({ achievement }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-${achievement.color}-100`}>
          <achievement.icon className={`h-5 w-5 text-${achievement.color}-600`} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
          <p className="text-xs text-gray-500">{achievement.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="Dashboard"
      pageDescription="Welcome back! Here's your learning overview"
    >
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, Rahul! 👋</h1>
            <p className="text-blue-100">Continue your learning journey and track your progress</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-3xl font-bold">{stats.avgProgress}%</p>
              <p className="text-blue-100 text-sm">Average Progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-blue-500">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Courses</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalCourses}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-green-500">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Events</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalEvents}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-yellow-500">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Certificates</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalCertificates}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-purple-500">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Hours</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalHours}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-red-500">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-xl font-bold text-gray-900">{stats.achievements}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Courses */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Courses</h2>
              <a href="/student/courses" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All →
              </a>
            </div>
            <div className="space-y-3">
              {recentCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
              <a href="/student/events" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All →
              </a>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Recent Certificates */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Certificates</h2>
              <a href="/student/certificates" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All →
              </a>
            </div>
            <div className="space-y-3">
              {recentCertificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Achievements</h2>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a href="/student/courses" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Continue Learning</span>
                </div>
              </a>
              <a href="/student/events" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-900">Browse Events</span>
                </div>
              </a>
              <a href="/student/certificates" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium text-gray-900">View Certificates</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard; 