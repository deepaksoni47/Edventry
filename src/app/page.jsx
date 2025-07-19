import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Star, Award, Users, Clock, MapPin, ArrowRight, GraduationCap, Building, CheckCircle, Globe, Shield, Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  // Mock data for featured events
  const featuredEvents = [
    {
      id: 1,
      type: "Workshop",
      title: "UX Design Fundamentals",
      date: "July 15",
      institute: "Design Institute",
      location: "Online",
      image: "/next.svg"
    },
    {
      id: 2,
      type: "Course",
      title: "Data Science Bootcamp",
      date: "Aug 3",
      institute: "Tech Academy",
      location: "New York",
      image: "/vercel.svg"
    },
    {
      id: 3,
      type: "Webinar",
      title: "Digital Marketing Trends",
      date: "Jul 28",
      institute: "Marketing School",
      location: "Online",
      image: "/file.svg"
    },
    {
      id: 4,
      type: "Conference",
      title: "Future of Education Summit",
      date: "Sep 5",
      institute: "EduTech Association",
      location: "San Francisco",
      image: "/globe.svg"
    }
  ];

  // Platform features data
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find the perfect educational opportunities with our advanced filtering system."
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Register for events and courses with just a few clicks."
    },
    {
      icon: Star,
      title: "Verified Reviews",
      description: "Read authentic feedback from past participants before enrolling."
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn and showcase digital certificates upon course completion."
    }
  ];

  // How it works steps
  const steps = [
    {
      number: "1",
      title: "Search & Discover",
      description: "Browse through thousands of courses, workshops, and events based on your interests and goals."
    },
    {
      number: "2",
      title: "Book & Register",
      description: "Select your preferred event, complete the registration process, and secure your spot."
    },
    {
      number: "3",
      title: "Learn & Grow",
      description: "Attend your events, gain valuable knowledge, and receive certificates to showcase your achievements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect Students with Top Educational Institutes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover thousands of courses, workshops, and events from leading educational providers worldwide.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for courses, workshops, or institutes..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Events
            </Link>
            <Link
              href="/providers"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              List Your Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Path
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/student/dashboard" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
                <p className="text-gray-600">Discover and enroll in courses, workshops, and events that match your learning goals.</p>
              </div>
            </Link>
            
            <Link href="/providers" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutes</h3>
                <p className="text-gray-600">List your courses and events to reach thousands of students worldwide.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <Link href="/events" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-gray-100 flex items-center justify-center">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Building className="h-4 w-4 mr-1" />
                    {event.institute}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Educational Institutes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-blue-100">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/events"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
