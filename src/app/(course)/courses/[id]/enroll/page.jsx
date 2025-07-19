'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle, Star, Users, Clock, BookOpen, CreditCard, Lock, Play, Shield, Award, Globe, Zap } from 'lucide-react';

const EnrollCoursePage = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [isEnrolling, setIsEnrolling] = useState(false);

  // Mock course data
  const mockCourse = {
    id: courseId,
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level",
    description: "This comprehensive bootcamp will take you from a complete beginner to a confident full-stack web developer. You'll learn modern web technologies and build real-world projects that will help you land your dream job in tech.",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      rating: 4.9,
      students: 15420
    },
    category: "Web Development",
    level: "Beginner",
    duration: "12 weeks",
    lessons: 48,
    students: 1247,
    rating: 4.8,
    totalReviews: 89,
    price: 2999,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    lastUpdated: "2025-01-15",
    language: "English",
    certificate: true,
    lifetimeAccess: true,
    mobileAccess: true,
    assignments: true,
    projects: 15,
    
    learningOutcomes: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Create dynamic web applications with React.js",
      "Develop server-side applications with Node.js and Express",
      "Work with databases using MongoDB and Mongoose",
      "Deploy applications to cloud platforms",
      "Understand modern web development best practices",
      "Build a complete full-stack project portfolio",
      "Prepare for technical interviews and job applications"
    ],

    requirements: [
      "No prior programming experience required",
      "A computer with internet connection",
      "Basic computer skills",
      "Willingness to learn and practice regularly"
    ],

    curriculum: [
      {
        week: 1,
        title: "Introduction to Web Development",
        lessons: [
          { id: 1, title: "Welcome to the Course", duration: "5 min", type: "video", free: true },
          { id: 2, title: "Setting Up Your Development Environment", duration: "15 min", type: "video", free: true },
          { id: 3, title: "Understanding How the Web Works", duration: "20 min", type: "video", free: false },
          { id: 4, title: "Introduction to HTML", duration: "45 min", type: "video", free: false },
          { id: 5, title: "Your First HTML Page", duration: "30 min", type: "video", free: false }
        ]
      },
      {
        week: 2,
        title: "HTML Fundamentals",
        lessons: [
          { id: 6, title: "HTML Structure and Elements", duration: "40 min", type: "video", free: false },
          { id: 7, title: "Working with Text and Links", duration: "35 min", type: "video", free: false },
          { id: 8, title: "Images and Media", duration: "25 min", type: "video", free: false },
          { id: 9, title: "Forms and Input Elements", duration: "50 min", type: "video", free: false },
          { id: 10, title: "HTML Best Practices", duration: "20 min", type: "video", free: false }
        ]
      }
    ]
  };

  useEffect(() => {
    // Simulate API call to fetch course data
    setTimeout(() => {
      setCourse(mockCourse);
      setIsLoading(false);
    }, 1000);
  }, [courseId]);

  const handleEnroll = async () => {
    setIsEnrolling(true);
    
    // Simulate enrollment process
    setTimeout(() => {
      setIsEnrolling(false);
      router.push(`/courses/${courseId}/learn`);
    }, 2000);
  };

  const calculateDiscount = () => {
    if (course.originalPrice > course.price) {
      return Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
    }
    return 0;
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Course
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Enroll in Course</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Course Image */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-600 px-2 py-1 text-xs font-medium rounded">
                  {course.level}
                </span>
                <span className="bg-green-600 px-2 py-1 text-xs font-medium rounded">
                  {course.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{course.title}</h2>
              <p className="text-lg opacity-90">{course.subtitle}</p>
            </div>
          </div>

          {/* Course Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About this course</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{course.lessons} lessons</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-gray-700">{course.rating} ({course.totalReviews})</span>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-2">
              {course.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Content Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Content</h3>
            <div className="space-y-4">
              {course.curriculum.slice(0, 2).map((week) => (
                <div key={week.week} className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900">
                      Week {week.week}: {week.title}
                    </h4>
                  </div>
                  <div className="p-4">
                    {week.lessons.slice(0, 3).map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                            <Play className="h-3 w-3 text-gray-600" />
                          </div>
                          <span className="text-sm text-gray-700">{lesson.title}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{lesson.duration}</span>
                          {lesson.free && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                              Free
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    {week.lessons.length > 3 && (
                      <div className="text-center py-2">
                        <span className="text-sm text-gray-500">
                          +{week.lessons.length - 3} more lessons
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                  {course.originalPrice > course.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {calculateDiscount() > 0 && (
                  <div className="text-sm text-green-600 mb-4">
                    {calculateDiscount()}% off • Save ₹{(course.originalPrice - course.price).toLocaleString()}
                  </div>
                )}
                
                <button
                  onClick={handleEnroll}
                  disabled={isEnrolling}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 mb-4"
                >
                  {isEnrolling ? 'Processing...' : 'Enroll Now'}
                </button>
                
                <p className="text-xs text-gray-500">30-Day Money-Back Guarantee</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">Full lifetime access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">Access on mobile and TV</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Your Instructor</h4>
              <div className="flex items-center space-x-4">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h5 className="font-medium text-gray-900">{course.instructor.name}</h5>
                  <p className="text-sm text-gray-600">{course.instructor.title}</p>
                  <p className="text-sm text-gray-600">{course.instructor.company}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{course.instructor.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({course.instructor.students.toLocaleString()} students)
                    </span>
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

export default EnrollCoursePage; 