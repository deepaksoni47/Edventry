'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  MessageSquare, 
  Users, 
  Calendar, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Star, 
  Heart, 
  Share2, 
  Plus, 
  Filter,
  ArrowRight,
  Clock,
  MapPin,
  User,
  ThumbsUp,
  MessageCircle,
  Eye,
  Tag,
  Bell,
  Trophy,
  Target,
  Zap,
  Globe,
  Building,
  GraduationCap
} from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for community features
  const forumCategories = [
    {
      id: 1,
      name: "Course Discussions",
      description: "Discuss course content, ask questions, and share insights",
      icon: BookOpen,
      color: "blue",
      topics: 156,
      posts: 1247,
      latestPost: "2 hours ago"
    },
    {
      id: 2,
      name: "Study Groups",
      description: "Find study partners and form collaborative learning groups",
      icon: Users,
      color: "green",
      topics: 89,
      posts: 567,
      latestPost: "1 day ago"
    },
    {
      id: 3,
      name: "Career Advice",
      description: "Get career guidance and share professional experiences",
      icon: TrendingUp,
      color: "purple",
      topics: 234,
      posts: 1890,
      latestPost: "3 hours ago"
    },
    {
      id: 4,
      name: "Project Showcase",
      description: "Showcase your projects and get feedback from peers",
      icon: Award,
      color: "yellow",
      topics: 67,
      posts: 423,
      latestPost: "5 hours ago"
    }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Best practices for React state management in 2025",
      author: "Sarah Chen",
      avatar: "/next.svg",
      category: "Course Discussions",
      replies: 23,
      views: 156,
      likes: 45,
      time: "2 hours ago",
      tags: ["React", "JavaScript", "State Management"]
    },
    {
      id: 2,
      title: "Study group for Data Science Bootcamp - Week 3",
      author: "Mike Johnson",
      avatar: "/vercel.svg",
      category: "Study Groups",
      replies: 12,
      views: 89,
      likes: 28,
      time: "4 hours ago",
      tags: ["Data Science", "Python", "Study Group"]
    },
    {
      id: 3,
      title: "How I landed my first tech job after completing the Full-Stack course",
      author: "Alex Rodriguez",
      avatar: "/file.svg",
      category: "Career Advice",
      replies: 34,
      views: 234,
      likes: 67,
      time: "1 day ago",
      tags: ["Career", "Job Search", "Success Story"]
    },
    {
      id: 4,
      title: "My portfolio website built with Next.js - Feedback welcome!",
      author: "Emma Wilson",
      avatar: "/globe.svg",
      category: "Project Showcase",
      replies: 18,
      views: 145,
      likes: 39,
      time: "6 hours ago",
      tags: ["Portfolio", "Next.js", "Web Development"]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Study Session: React Advanced Patterns",
      type: "Study Session",
      date: "Tomorrow, 7:00 PM",
      duration: "2 hours",
      participants: 45,
      maxParticipants: 50,
      host: "Tech Academy",
      image: "/next.svg"
    },
    {
      id: 2,
      title: "Career Fair: Tech Companies Hiring",
      type: "Career Event",
      date: "Dec 15, 2:00 PM",
      duration: "4 hours",
      participants: 120,
      maxParticipants: 200,
      host: "EduConnect",
      image: "/vercel.svg"
    },
    {
      id: 3,
      title: "Hackathon: Build a Learning App",
      type: "Competition",
      date: "Dec 20, 9:00 AM",
      duration: "24 hours",
      participants: 67,
      maxParticipants: 100,
      host: "Code Institute",
      image: "/file.svg"
    }
  ];

  const topContributors = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/next.svg",
      role: "Student",
      points: 2847,
      contributions: 156,
      badges: ["Helpful", "Expert", "Mentor"],
      specialty: "React & JavaScript"
    },
    {
      id: 2,
      name: "Dr. Michael Brown",
      avatar: "/vercel.svg",
      role: "Instructor",
      points: 3421,
      contributions: 203,
      badges: ["Instructor", "Expert", "Verified"],
      specialty: "Data Science"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      avatar: "/file.svg",
      role: "Student",
      points: 1987,
      contributions: 89,
      badges: ["Rising Star", "Helpful"],
      specialty: "Full-Stack Development"
    }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Complete React Study Guide 2025",
      type: "Study Guide",
      author: "Sarah Chen",
      downloads: 1247,
      rating: 4.8,
      tags: ["React", "JavaScript", "Study Guide"]
    },
    {
      id: 2,
      title: "Data Science Interview Questions",
      type: "Interview Prep",
      author: "Dr. Michael Brown",
      downloads: 892,
      rating: 4.9,
      tags: ["Data Science", "Interview", "Python"]
    },
    {
      id: 3,
      title: "Web Development Best Practices",
      type: "Guide",
      author: "Emma Wilson",
      downloads: 567,
      rating: 4.7,
      tags: ["Web Development", "Best Practices", "HTML/CSS"]
    }
  ];

  const tabs = [
    { id: 'forums', label: 'Forums', icon: MessageSquare },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'network', label: 'Network', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Edventry Community
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with fellow learners, share knowledge, and grow together in our vibrant educational community.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search discussions, events, or people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15,000+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2,500+</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">1,200+</div>
                <div className="text-sm text-gray-600">Resources</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'forums' && (
          <div className="space-y-8">
            {/* Forum Categories */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Forum Categories</h2>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  View All Categories <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {forumCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{category.topics} topics</span>
                      <span>{category.posts} posts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Discussions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Start New Discussion <Plus className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="space-y-4">
                {recentDiscussions.map((discussion) => (
                  <div key={discussion.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src={discussion.avatar}
                          alt={discussion.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-gray-900">{discussion.author}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{discussion.time}</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-blue-600">{discussion.category}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{discussion.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          {discussion.tags.map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Create Event <Plus className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Study Session' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Career Event' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{event.participants}/{event.maxParticipants} participants</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Join Event
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Resources</h2>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Share Resource <Plus className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      resource.type === 'Study Guide' ? 'bg-blue-100 text-blue-800' :
                      resource.type === 'Interview Prep' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">by {resource.author}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.downloads} downloads</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'network' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Top Contributors</h2>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                View All Members <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topContributors.map((contributor) => (
                <div key={contributor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <Image
                        src={contributor.avatar}
                        alt={contributor.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{contributor.name}</h3>
                      <p className="text-sm text-gray-600">{contributor.role}</p>
                      <p className="text-sm text-blue-600">{contributor.specialty}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Points:</span>
                      <span className="font-semibold text-gray-900">{contributor.points.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Contributions:</span>
                      <span className="font-semibold text-gray-900">{contributor.contributions}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {contributor.badges.map((badge, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Achievement System</h2>
              <p className="text-gray-600 mb-8">Track your progress and earn badges for your contributions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Learning Champion</h3>
                <p className="text-sm text-gray-600 mb-4">Complete 10 courses and earn this prestigious badge</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">7/10 completed</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Goal Setter</h3>
                <p className="text-sm text-gray-600 mb-4">Set and achieve 5 learning goals</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">5/5 completed</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Helper</h3>
                <p className="text-sm text-gray-600 mb-4">Help 50 other students with their questions</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">20/50 completed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityPage; 