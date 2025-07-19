"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  Star,
  Users,
  Clock,
  Calendar,
  BookOpen,
  Play,
  CheckCircle,
  ArrowRight,
  Share2,
  Heart,
  MessageCircle,
  Award,
  Target,
  Globe,
  Zap,
} from "lucide-react";
import Link from "next/link";

const CourseDetailPage = () => {
  const params = useParams();
  const courseId = params.id;
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data
  const course = {
    id: courseId,
    title: "Complete Web Development Bootcamp",
    subtitle:
      "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to advanced level",
    description:
      "This comprehensive bootcamp will take you from a complete beginner to a confident full-stack web developer. You'll learn modern web technologies and build real-world projects that will help you land your dream job in tech.",
    instructor: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      experience: "8+ years",
      students: 15420,
      courses: 12,
      rating: 4.9,
      bio: "Sarah is a passionate educator and senior developer with over 8 years of experience in web development. She has helped thousands of students transition into successful tech careers.",
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
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    lastUpdated: "2025-01-15",
    language: "English",
    certificate: true,
    lifetimeAccess: true,
    mobileAccess: true,
    assignments: true,
    projects: 15,

    // What you'll learn
    learningOutcomes: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Create dynamic web applications with React.js",
      "Develop server-side applications with Node.js and Express",
      "Work with databases using MongoDB and Mongoose",
      "Deploy applications to cloud platforms",
      "Understand modern web development best practices",
      "Build a complete full-stack project portfolio",
      "Prepare for technical interviews and job applications",
    ],

    // Requirements
    requirements: [
      "No prior programming experience required",
      "A computer with internet connection",
      "Basic computer skills",
      "Willingness to learn and practice regularly",
    ],

    // Curriculum
    curriculum: [
      {
        week: 1,
        title: "Introduction to Web Development",
        lessons: [
          {
            id: 1,
            title: "Welcome to the Course",
            duration: "5 min",
            type: "video",
            free: true,
          },
          {
            id: 2,
            title: "Setting Up Your Development Environment",
            duration: "15 min",
            type: "video",
            free: true,
          },
          {
            id: 3,
            title: "Understanding How the Web Works",
            duration: "20 min",
            type: "video",
            free: false,
          },
          {
            id: 4,
            title: "Introduction to HTML",
            duration: "45 min",
            type: "video",
            free: false,
          },
          {
            id: 5,
            title: "Your First HTML Page",
            duration: "30 min",
            type: "video",
            free: false,
          },
        ],
      },
      {
        week: 2,
        title: "HTML Fundamentals",
        lessons: [
          {
            id: 6,
            title: "HTML Structure and Elements",
            duration: "40 min",
            type: "video",
            free: false,
          },
          {
            id: 7,
            title: "Working with Text and Links",
            duration: "35 min",
            type: "video",
            free: false,
          },
          {
            id: 8,
            title: "Images and Media",
            duration: "25 min",
            type: "video",
            free: false,
          },
          {
            id: 9,
            title: "Forms and Input Elements",
            duration: "50 min",
            type: "video",
            free: false,
          },
          {
            id: 10,
            title: "HTML Best Practices",
            duration: "20 min",
            type: "video",
            free: false,
          },
        ],
      },
      {
        week: 3,
        title: "CSS Styling",
        lessons: [
          {
            id: 11,
            title: "Introduction to CSS",
            duration: "30 min",
            type: "video",
            free: false,
          },
          {
            id: 12,
            title: "CSS Selectors and Properties",
            duration: "45 min",
            type: "video",
            free: false,
          },
          {
            id: 13,
            title: "Box Model and Layout",
            duration: "40 min",
            type: "video",
            free: false,
          },
          {
            id: 14,
            title: "Flexbox Layout",
            duration: "55 min",
            type: "video",
            free: false,
          },
          {
            id: 15,
            title: "CSS Grid",
            duration: "50 min",
            type: "video",
            free: false,
          },
        ],
      },
    ],

    // Reviews
    reviews: [
      {
        id: 1,
        student: "Rahul Kumar",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        rating: 5,
        date: "2025-01-10",
        comment:
          "Amazing course! Sarah explains everything so clearly. I went from knowing nothing about web development to building my own websites. Highly recommended!",
        helpful: 12,
      },
      {
        id: 2,
        student: "Priya Sharma",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
        rating: 5,
        date: "2025-01-08",
        comment:
          "The projects are really practical and helped me understand the concepts better. The instructor is very responsive to questions.",
        helpful: 8,
      },
      {
        id: 3,
        student: "Amit Patel",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        rating: 4,
        date: "2025-01-05",
        comment:
          "Great course structure and content. Some sections could be a bit more detailed, but overall excellent learning experience.",
        helpful: 5,
      },
    ],
  };

  const ReviewCard = ({ review }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <div className="flex items-start space-x-4">
        <img
          src={review.avatar}
          alt={review.student}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{review.student}</h4>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "text-yellow-500 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-3">{review.date}</p>
          <p className="text-gray-700 mb-3">{review.comment}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-1" />
              {review.helpful} people found this helpful
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const LessonItem = ({ lesson, weekNumber }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
          <Play className="h-4 w-4 text-gray-600" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">{lesson.title}</h4>
          <p className="text-xs text-gray-500">{lesson.duration}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {lesson.free && (
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
            Free
          </span>
        )}
        <span className="text-xs text-gray-500">{lesson.type}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Course Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {course.title}
            </h1>
            <p className="text-lg opacity-90">{course.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "curriculum", label: "Curriculum" },
                  { id: "instructor", label: "Instructor" },
                  { id: "reviews", label: "Reviews" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      About this course
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What you'll learn
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Course Curriculum
                    </h3>
                    <div className="text-sm text-gray-600">
                      {course.lessons} lessons • {course.duration}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {course.curriculum.map((week) => (
                      <div
                        key={week.week}
                        className="border border-gray-200 rounded-lg"
                      >
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                          <h4 className="font-medium text-gray-900">
                            Week {week.week}: {week.title}
                          </h4>
                        </div>
                        <div className="p-4">
                          {week.lessons.map((lesson) => (
                            <LessonItem
                              key={lesson.id}
                              lesson={lesson}
                              weekNumber={week.week}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "instructor" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Your Instructor
                  </h3>
                  <div className="flex items-start space-x-6">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {course.instructor.name}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {course.instructor.title}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {course.instructor.company}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {course.instructor.students.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {course.instructor.courses}
                          </div>
                          <div className="text-sm text-gray-600">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {course.instructor.rating}
                          </div>
                          <div className="text-sm text-gray-600">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {course.instructor.experience}
                          </div>
                          <div className="text-sm text-gray-600">
                            Experience
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Student Reviews
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="ml-1 font-semibold">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-gray-600">
                        ({course.totalReviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {course.reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            {/* Course Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{course.price.toLocaleString()}
                  </span>
                  {course.originalPrice > course.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {Math.round(
                    ((course.originalPrice - course.price) /
                      course.originalPrice) *
                      100
                  )}
                  % off
                </div>

                {isEnrolled ? (
                  <Link
                    href={`/courses/${courseId}/learn`}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Continue Learning
                  </Link>
                ) : (
                  <Link
                    href={`/courses/${courseId}/enroll`}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Enroll Now
                  </Link>
                )}
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Course includes:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      {course.duration} of content
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      {course.lessons} lessons
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      {course.students.toLocaleString()} students enrolled
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      Certificate of completion
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Full lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">
                      Access on mobile and TV
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                This course includes:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Downloadable resources
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Assignments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Certificate of completion
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Full lifetime access
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">
                    Access on mobile and TV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
