'use client'
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Edit3, 
  Save, 
  X, 
  Camera,
  Star,
  Clock,
  Users,
  Trophy,
  Target,
  GraduationCap
} from 'lucide-react';

// Mock user data
const mockUser = {
  id: "student_123",
  name: "Priya Sharma",
  email: "priya.sharma@student.edu",
  phone: "+91 9876543210",
  dateOfBirth: "1998-05-15",
  location: "Mumbai, Maharashtra",
  institution: "Mumbai University",
  course: "Computer Science Engineering",
  year: "3rd Year",
  joinedDate: "2023-01-15",
  avatar: "/api/placeholder/120/120",
  bio: "Passionate computer science student with interests in web development and machine learning. Always eager to learn new technologies and participate in hackathons.",
  interests: ["Web Development", "Machine Learning", "Data Science", "Mobile Development"],
  skills: ["React", "JavaScript", "Python", "Java", "SQL"],
  socialProfiles: {
    linkedin: "https://linkedin.com/in/priyasharma",
    github: "https://github.com/priyasharma",
    portfolio: "https://priyasharma.dev"
  }
};

// Mock enrollment data
const mockEnrollments = [
  {
    id: 1,
    eventId: "event_101",
    eventTitle: "Advanced React Hooks Workshop",
    provider: "Tech Institute Mumbai",
    enrollmentDate: "2025-07-15",
    status: "confirmed",
    eventDate: "2025-07-25",
    eventTime: "10:00 AM",
    duration: "4 hours",
    rating: 4.8,
    certificate: true,
    completionStatus: "upcoming"
  },
  {
    id: 2,
    eventId: "event_102",
    eventTitle: "Machine Learning Fundamentals",
    provider: "AI Learning Hub",
    enrollmentDate: "2025-07-10",
    status: "confirmed",
    eventDate: "2025-07-20",
    eventTime: "2:00 PM",
    duration: "6 hours",
    rating: 4.9,
    certificate: true,
    completionStatus: "completed"
  },
  {
    id: 3,
    eventId: "event_103",
    eventTitle: "Digital Marketing Masterclass",
    provider: "Marketing Pro Academy",
    enrollmentDate: "2025-07-05",
    status: "waitlisted",
    eventDate: "2025-07-30",
    eventTime: "11:00 AM",
    duration: "3 hours",
    rating: 4.6,
    certificate: false,
    completionStatus: "waitlisted"
  }
];

const mockAchievements = [
  { id: 1, title: "First Event Completed", icon: "🎯", date: "2025-06-15" },
  { id: 2, title: "5 Events Milestone", icon: "🏆", date: "2025-07-01" },
  { id: 3, title: "Top Learner", icon: "⭐", date: "2025-07-10" }
];

export default function StudentProfile() {
  const [user, setUser] = useState(mockUser);
  const [enrollments] = useState(mockEnrollments);
  const [achievements] = useState(mockAchievements);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [editForm, setEditForm] = useState(mockUser);

  const handleSave = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(user);
    setIsEditing(false);
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      confirmed: "bg-green-100 text-green-800",
      waitlisted: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800"
    };
    return `px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`;
  };

  const getCompletionBadge = (status) => {
    const statusStyles = {
      completed: "bg-green-100 text-green-800",
      upcoming: "bg-blue-100 text-blue-800",
      ongoing: "bg-purple-100 text-purple-800",
      waitlisted: "bg-yellow-100 text-yellow-800"
    };
    return `px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`;
  };

  const EnrollmentCard = ({ enrollment }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {enrollment.eventTitle}
          </h3>
          <p className="text-gray-600 text-sm">{enrollment.provider}</p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className={getStatusBadge(enrollment.status)}>
            {enrollment.status}
          </span>
          <span className={getCompletionBadge(enrollment.completionStatus)}>
            {enrollment.completionStatus}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(enrollment.eventDate).toLocaleDateString()}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {enrollment.eventTime}
        </div>
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-2" />
          {enrollment.duration}
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-2 text-yellow-500" />
          {enrollment.rating}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Enrolled: {new Date(enrollment.enrollmentDate).toLocaleDateString()}
        </div>
        {enrollment.certificate && enrollment.completionStatus === 'completed' && (
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Download Certificate
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700">
                    <Camera className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.course} • {user.institution}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {user.location}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                <p className="text-2xl font-semibold text-gray-900">{enrollments.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {enrollments.filter(e => e.completionStatus === 'completed').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Achievements</p>
                <p className="text-2xl font-semibold text-gray-900">{achievements.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-semibold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'enrollments', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    {isEditing ? (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            value={editForm.phone}
                            onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                          <textarea
                            value={editForm.bio}
                            onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-3" />
                          {user.phone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-3" />
                          {new Date(user.dateOfBirth).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <GraduationCap className="w-4 h-4 mr-3" />
                          {user.year} • {user.course}
                        </div>
                        <div className="mt-4">
                          <p className="text-gray-700">{user.bio}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Skills & Interests */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Interests</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {user.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'enrollments' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">My Enrollments</h3>
                <div className="space-y-4">
                  {enrollments.map((enrollment) => (
                    <EnrollmentCard key={enrollment.id} enrollment={enrollment} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                      <div className="text-4xl mb-2">{achievement.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">
                        Earned on {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}