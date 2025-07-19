'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Star, Users, Clock, Calendar, MapPin, DollarSign, ArrowRight, Share2, Heart, MessageCircle, Award, Target, Globe, Zap, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';

const EventDetailPage = () => {
  const params = useParams();
  const eventId = params.id;
  const [activeTab, setActiveTab] = useState('overview');
  const [isRegistered, setIsRegistered] = useState(false);

  // Mock event data
  const event = {
    id: eventId,
    title: "Advanced React Workshop",
    subtitle: "Learn advanced React patterns, hooks, and state management",
    description: "This comprehensive workshop will take you deep into advanced React concepts. You'll learn modern patterns, hooks, state management, and build real-world applications that will help you become a React expert.",
    organizer: {
      name: "TechSkills Institute",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      experience: "8+ years",
      students: 15420,
      events: 45,
      rating: 4.9,
      bio: "Sarah is a passionate educator and senior developer with over 8 years of experience in React development. She has helped thousands of students master React and build successful careers."
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
    
    // What you'll learn
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

    // Requirements
    requirements: [
      "Basic knowledge of JavaScript and React fundamentals",
      "A computer with internet connection",
      "Node.js and npm installed",
      "Willingness to learn and practice"
    ],

    // Agenda
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
    ],

    // Reviews
    reviews: [
      {
        id: 1,
        student: "Rahul Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        rating: 5,
        date: "2025-01-10",
        comment: "Excellent workshop! Sarah explained complex React concepts in a very clear way. The hands-on exercises were really helpful.",
        helpful: 8
      },
      {
        id: 2,
        student: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
        rating: 5,
        date: "2025-01-08",
        comment: "Great practical examples and real-world applications. The instructor was very knowledgeable and patient with questions.",
        helpful: 5
      },
      {
        id: 3,
        student: "Amit Patel",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        rating: 4,
        date: "2025-01-05",
        comment: "Very informative workshop. Covered a lot of ground in 4 hours. Would have liked more time for hands-on practice.",
        helpful: 3
      }
    ]
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
                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
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

  const AgendaItem = ({ item }) => (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-100 last:border-b-0">
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
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Event Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
            <p className="text-lg opacity-90">{event.subtitle}</p>
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
                  { id: 'overview', label: 'Overview' },
                  { id: 'agenda', label: 'Agenda' },
                  { id: 'organizer', label: 'Organizer' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">About this event</h3>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>

                  <div>
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

                  <div>
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
                </div>
              )}

              {activeTab === 'agenda' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Event Agenda</h3>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <AgendaItem key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'organizer' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Organizer</h3>
                  <div className="flex items-start space-x-6">
                    <img 
                      src={event.organizer.avatar} 
                      alt={event.organizer.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {event.organizer.name}
                      </h4>
                      <p className="text-gray-600 mb-2">{event.organizer.title}</p>
                      <p className="text-gray-600 mb-4">{event.organizer.company}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{event.organizer.students.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{event.organizer.events}</div>
                          <div className="text-sm text-gray-600">Events</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{event.organizer.rating}</div>
                          <div className="text-sm text-gray-600">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{event.organizer.experience}</div>
                          <div className="text-sm text-gray-600">Experience</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{event.organizer.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Event Reviews</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="ml-1 font-semibold">{event.rating}</span>
                      </div>
                      <span className="text-gray-600">({event.totalReviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {event.reviews.map((review) => (
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
            {/* Event Card */}
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
                <div className="text-sm text-green-600 mb-4">
                  {Math.round(((event.originalPrice - event.price) / event.originalPrice) * 100)}% off
                </div>
                
                {isRegistered ? (
                  <Link 
                    href={`/events/${eventId}/attend`}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Join Event
                  </Link>
                ) : (
                  <Link 
                    href={`/events/${eventId}/register`}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Register Now
                  </Link>
                )}
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Event includes:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{event.duration} of content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{event.registrations} participants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Certificate of participation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Recording available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Course materials</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">This event includes:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Live interactive session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Hands-on exercises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Certificate of participation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Recording access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Course materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage; 