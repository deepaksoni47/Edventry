'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Play, CheckCircle, Lock, FileText, Video, Clock, BookOpen, Users, Star, MessageCircle, Download, Share2, Menu, X } from 'lucide-react';

const LearnCoursePage = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [progress, setProgress] = useState({});

  // Mock course data
  const mockCourse = {
    id: courseId,
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      title: "Senior Full-Stack Developer"
    },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    progress: 15,
    totalLessons: 48,
    completedLessons: 7,
    
    curriculum: [
      {
        id: 1,
        week: 1,
        title: "Introduction to Web Development",
        lessons: [
          { 
            id: 1, 
            title: "Welcome to the Course", 
            duration: "5 min", 
            type: "video", 
            free: true, 
            completed: true,
            videoUrl: "https://example.com/video1.mp4",
            description: "Get an overview of what you'll learn in this comprehensive web development course."
          },
          { 
            id: 2, 
            title: "Setting Up Your Development Environment", 
            duration: "15 min", 
            type: "video", 
            free: true, 
            completed: true,
            videoUrl: "https://example.com/video2.mp4",
            description: "Learn how to set up your computer for web development with the necessary tools and software."
          },
          { 
            id: 3, 
            title: "Understanding How the Web Works", 
            duration: "20 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video3.mp4",
            description: "Understand the fundamentals of how the internet and web browsers work."
          },
          { 
            id: 4, 
            title: "Introduction to HTML", 
            duration: "45 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video4.mp4",
            description: "Learn the basics of HTML markup language and create your first web page."
          },
          { 
            id: 5, 
            title: "Your First HTML Page", 
            duration: "30 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video5.mp4",
            description: "Build your first complete HTML page with proper structure and elements."
          }
        ]
      },
      {
        id: 2,
        week: 2,
        title: "HTML Fundamentals",
        lessons: [
          { 
            id: 6, 
            title: "HTML Structure and Elements", 
            duration: "40 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video6.mp4",
            description: "Deep dive into HTML document structure and essential elements."
          },
          { 
            id: 7, 
            title: "Working with Text and Links", 
            duration: "35 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video7.mp4",
            description: "Learn how to format text and create hyperlinks in HTML."
          },
          { 
            id: 8, 
            title: "Images and Media", 
            duration: "25 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video8.mp4",
            description: "Add images, videos, and other media elements to your web pages."
          },
          { 
            id: 9, 
            title: "Forms and Input Elements", 
            duration: "50 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video9.mp4",
            description: "Create interactive forms with various input types and validation."
          },
          { 
            id: 10, 
            title: "HTML Best Practices", 
            duration: "20 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video10.mp4",
            description: "Learn industry best practices for writing clean and semantic HTML."
          }
        ]
      },
      {
        id: 3,
        week: 3,
        title: "CSS Styling",
        lessons: [
          { 
            id: 11, 
            title: "Introduction to CSS", 
            duration: "30 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video11.mp4",
            description: "Learn the basics of CSS and how to style your HTML elements."
          },
          { 
            id: 12, 
            title: "CSS Selectors and Properties", 
            duration: "45 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video12.mp4",
            description: "Master CSS selectors and understand the most important CSS properties."
          },
          { 
            id: 13, 
            title: "Box Model and Layout", 
            duration: "40 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video13.mp4",
            description: "Understand the CSS box model and how elements are laid out on the page."
          },
          { 
            id: 14, 
            title: "Flexbox Layout", 
            duration: "55 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video14.mp4",
            description: "Learn modern CSS Flexbox for creating flexible and responsive layouts."
          },
          { 
            id: 15, 
            title: "CSS Grid", 
            duration: "50 min", 
            type: "video", 
            free: false, 
            completed: false,
            videoUrl: "https://example.com/video15.mp4",
            description: "Master CSS Grid for creating complex two-dimensional layouts."
          }
        ]
      }
    ]
  };

  useEffect(() => {
    // Simulate API call to fetch course data
    setTimeout(() => {
      setCourse(mockCourse);
      setCurrentLesson(mockCourse.curriculum[0].lessons[0]);
      setIsLoading(false);
    }, 1000);
  }, [courseId]);

  const markLessonComplete = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: true
    }));
  };

  const getLessonIcon = (lesson) => {
    if (lesson.completed || progress[lesson.id]) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    if (lesson.type === 'video') {
      return <Play className="h-4 w-4 text-gray-600" />;
    }
    return <FileText className="h-4 w-4 text-gray-600" />;
  };

  const isLessonAccessible = (lesson) => {
    return lesson.free || lesson.completed || progress[lesson.id];
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-gray-50">
        <div className="animate-pulse">
          <div className="h-16 bg-white border-b border-gray-200"></div>
          <div className="flex">
            <div className="w-80 bg-white border-r border-gray-200 h-screen"></div>
            <div className="flex-1 p-8">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 truncate">{course.title}</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{course.completedLessons}/{course.totalLessons} lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {course.curriculum.map((week) => (
              <div key={week.id} className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">
                  Week {week.week}: {week.title}
                </h3>
                <div className="space-y-1">
                  {week.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(lesson)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        currentLesson?.id === lesson.id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {getLessonIcon(lesson)}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          currentLesson?.id === lesson.id ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                          <span>{lesson.duration}</span>
                          <span>•</span>
                          <span className="capitalize">{lesson.type}</span>
                          {lesson.free && (
                            <>
                              <span>•</span>
                              <span className="text-green-600">Free</span>
                            </>
                          )}
                        </div>
                      </div>
                      {!isLessonAccessible(lesson) && (
                        <Lock className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{currentLesson?.title}</h1>
                <p className="text-sm text-gray-600">{course.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <MessageCircle className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="bg-black rounded-lg aspect-video mb-6 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">{currentLesson?.title}</p>
                  <p className="text-sm opacity-80 mt-2">{currentLesson?.duration}</p>
                </div>
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{currentLesson?.title}</h2>
                  <p className="text-gray-600">{currentLesson?.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{currentLesson?.duration}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500 capitalize">{currentLesson?.type}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => markLessonComplete(currentLesson?.id)}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Complete
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask Question
                </button>
              </div>
            </div>

            {/* Course Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About this course</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{course.totalLessons} lessons</p>
                    <p className="text-sm text-gray-600">Total course content</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">12 weeks</p>
                    <p className="text-sm text-gray-600">Course duration</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">{course.instructor.name}</p>
                    <p className="text-sm text-gray-600">Your instructor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCoursePage; 