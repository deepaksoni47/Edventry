'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle, Star, Users, Clock, Calendar, MapPin, DollarSign, Shield, Award, Globe, Zap, Play } from 'lucide-react';

const RegisterEventPage = () => {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  // Mock event data
  const eventData = {
    id: eventId,
    title: "Advanced React Workshop",
    subtitle: "Learn advanced React patterns, hooks, and state management",
    description: "This comprehensive workshop will take you deep into advanced React concepts. You'll learn modern patterns, hooks, state management, and build real-world applications that will help you become a React expert.",
    organizer: {
      name: "TechSkills Institute",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      rating: 4.9,
      students: 15420
    },
    category: "Web Development",
    location: "Online",
    date: "2025-07-25",
    time: "2:00 PM",
    duration: "4 hours",
    registrations: 45,
    capacity: 50,
    rating: 4.8,
    totalReviews: 23,
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["React", "JavaScript", "Frontend", "Workshop"],
    lastUpdated: "2025-01-15",
    language: "English",
    certificate: true,
    recording: true,
    materials: true,
    assignments: true,
    projects: 3,
    
    learningOutcomes: [
      "Master advanced React patterns and best practices",
      "Build complex state management solutions",
      "Implement custom hooks and reusable components",
      "Optimize React applications for performance",
      "Deploy React apps to production",
      "Understand modern React ecosystem",
      "Build a complete React application from scratch",
      "Prepare for React interviews and assessments"
    ],

    requirements: [
      "Basic knowledge of JavaScript and React fundamentals",
      "A computer with internet connection",
      "Node.js and npm installed",
      "Willingness to learn and practice"
    ],

    agenda: [
      {
        time: "2:00 PM - 2:30 PM",
        title: "Introduction and Setup",
        description: "Welcome session, workshop overview, and development environment setup",
        type: "presentation"
      },
      {
        time: "2:30 PM - 3:30 PM",
        title: "Advanced React Patterns",
        description: "Deep dive into advanced patterns like render props, HOCs, and compound components",
        type: "workshop"
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Break",
        description: "15-minute break with networking opportunities",
        type: "break"
      },
      {
        time: "4:00 PM - 5:30 PM",
        title: "State Management Solutions",
        description: "Building complex state management with Context API, Redux, and custom hooks",
        type: "workshop"
      },
      {
        time: "5:30 PM - 6:00 PM",
        title: "Q&A and Networking",
        description: "Open floor for questions and networking with fellow developers",
        type: "discussion"
      }
    ]
  };

  useEffect(() => {
    // Simulate API call to fetch event data
    setTimeout(() => {
      setEvent(eventData);
      setIsLoading(false);
    }, 1000);
  }, [eventId]);

  const handleRegister = async () => {
    setIsRegistering(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false);
      router.push(`/events/${eventId}/attend`);
    }, 2000);
  };

  const calculateDiscount = () => {
    if (event.originalPrice > event.price) {
      return Math.round(((event.originalPrice - event.price) / event.originalPrice) * 100);
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
          Back to Event
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Register for Event</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Event Image */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-600 px-2 py-1 text-xs font-medium rounded">
                  {event.category}
                </span>
                <span className="bg-green-600 px-2 py-1 text-xs font-medium rounded">
                  {event.registrations}/{event.capacity} registered
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h2>
              <p className="text-lg opacity-90">{event.subtitle}</p>
            </div>
          </div>

          {/* Event Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About this event</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{event.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{event.registrations} participants</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-gray-700">{event.rating} ({event.totalReviews})</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{event.date}</span>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {event.learningOutcomes.map((outcome, index) => (
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
              {event.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Agenda Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Agenda</h3>
            <div className="space-y-4">
              {event.agenda.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <span className="text-sm text-gray-500">{item.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                      item.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                      item.type === 'presentation' ? 'bg-green-100 text-green-800' :
                      item.type === 'break' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹{event.price.toLocaleString()}</span>
                  {event.originalPrice > event.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{event.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {calculateDiscount() > 0 && (
                  <div className="text-sm text-green-600 mb-4">
                    {calculateDiscount()}% off • Save ₹{(event.originalPrice - event.price).toLocaleString()}
                  </div>
                )}
                
                <button
                  onClick={handleRegister}
                  disabled={isRegistering}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 mb-4"
                >
                  {isRegistering ? 'Processing...' : 'Register Now'}
                </button>
                
                <p className="text-xs text-gray-500">30-Day Money-Back Guarantee</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">Certificate of participation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">Recording access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">Course materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Organizer Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Your Organizer</h4>
              <div className="flex items-center space-x-4">
                <img 
                  src={event.organizer.avatar} 
                  alt={event.organizer.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h5 className="font-medium text-gray-900">{event.organizer.name}</h5>
                  <p className="text-sm text-gray-600">{event.organizer.title}</p>
                  <p className="text-sm text-gray-600">{event.organizer.company}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{event.organizer.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({event.organizer.students.toLocaleString()} students)
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

export default RegisterEventPage; 