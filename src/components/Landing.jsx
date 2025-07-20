"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
//import Spline from '@splinetool/react-spline/next';

import Spline from "@splinetool/react-spline";

import {
  Search,
  GraduationCap,
  Building,
  Star,
  Calendar,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  Shield,
  Zap,
  Heart,
} from "lucide-react";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const studentCardRef = useRef(null);
  const instituteCardRef = useRef(null);

  const featuredEvents = [
    {
      id: 1,
      type: "Workshop",
      title: "UX Design Fundamentals",
      institute: "Design Institute",
      location: "Online",
      date: "Jul 15",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      type: "Course",
      title: "Data Science Bootcamp",
      institute: "Tech Academy",
      location: "New York",
      date: "Aug 3",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      type: "Webinar",
      title: "Digital Marketing Trends",
      institute: "Marketing School",
      location: "Online",
      date: "Jul 28",
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      type: "Conference",
      title: "Future of Education Summit",
      institute: "EduTech Association",
      location: "San Francisco",
      date: "Sep 5",
      image: "/api/placeholder/300/200",
    },
  ];

  const platformFeatures = [
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find the perfect educational opportunities with our advanced filtering system.",
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Register for events and courses with just a few clicks.",
    },
    {
      icon: Star,
      title: "Verified Reviews",
      description:
        "Read authentic feedback from past participants before enrolling.",
    },
    {
      icon: Award,
      title: "Certificates",
      description:
        "Earn and showcase digital certificates upon course completion.",
    },
  ];

  const statistics = [
    { number: "10,000+", label: "Courses Available" },
    { number: "500+", label: "Educational Institutes" },
    { number: "50,000+", label: "Students Enrolled" },
    { number: "95%", label: "Satisfaction Rate" },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Search & Discover",
      description:
        "Browse through thousands of courses, workshops, and events based on your interests and goals.",
    },
    {
      step: 2,
      title: "Book & Register",
      description:
        "Select your preferred event, complete the registration process, and secure your spot.",
    },
    {
      step: 3,
      title: "Learn & Grow",
      description:
        "Attend your events, gain valuable knowledge, and receive certificates to showcase your achievements.",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

    const glowElement = cardRef.current.querySelector(".glow-bg");
    if (glowElement) {
      glowElement.style.transform = `rotate(${angle}deg)`;
    }
  };

  const handleMouseLeave = (cardRef) => {
    const glowElement = cardRef.current?.querySelector(".glow-bg");
    if (glowElement) {
      glowElement.style.transform = "rotate(0deg)";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-teal-100 to-yellow-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/KDuyAy9hueX1KKhP/scene.splinecode" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect Students with Top Educational Institutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover thousands of courses, workshops, and events from leading
              educational providers worldwide.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses, workshops, or institutes..."
                  className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 bg-white/90 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Browse Events
              </Link>
              <Link
                href="/providers/register"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium bg-white/90 backdrop-blur-sm"
              >
                List Your Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Students Card */}
            <div
              ref={studentCardRef}
              onMouseMove={(e) => handleMouseMove(e, studentCardRef)}
              onMouseLeave={() => handleMouseLeave(studentCardRef)}
              className="group relative bg-white rounded-xl p-8 cursor-pointer overflow-hidden"
            >
              {/* Rotating Glow Background */}
              <div className="absolute inset-0 rounded-xl glow-bg transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-30 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>

              {/* Card Content Background */}
              <div className="absolute inset-[2px] rounded-xl bg-white"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <GraduationCap className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  For Students
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Discover and enroll in courses, workshops, and events that
                  match your learning goals.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:shadow-lg group-hover:scale-105"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* For Institutes Card */}
            <div
              ref={instituteCardRef}
              onMouseMove={(e) => handleMouseMove(e, instituteCardRef)}
              onMouseLeave={() => handleMouseLeave(instituteCardRef)}
              className="group relative bg-white rounded-xl p-8 cursor-pointer overflow-hidden"
            >
              {/* Rotating Glow Background */}
              <div className="absolute inset-0 rounded-xl glow-bg transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-30 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>

              {/* Card Content Background */}
              <div className="absolute inset-[2px] rounded-xl bg-white"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Building className="h-10 w-10 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  For Institutes
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  List your courses and events to reach thousands of students
                  worldwide.
                </p>
                <Link
                  href="/providers/register"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium group-hover:shadow-lg group-hover:scale-105"
                >
                  Start Teaching
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
    </div>
  );
};

export default LandingPage;
