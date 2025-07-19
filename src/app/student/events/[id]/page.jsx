'use client';

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   MapPin, 
//   Users, 
//   Star, 
//   MessageCircle, 
//   Share2, 
//   Bookmark,
//   ArrowLeft,
//   CheckCircle,
//   AlertCircle,
//   User,
//   Mail,
//   Phone,
//   Globe,
//   Tag
// } from 'lucide-react';

// interface Event {
//   id: string;
//   title: string;
//   description: string;
//   shortDescription: string;
//   date: string;
//   time: string;
//   duration: string;
//   location: string;
//   locationType: 'online' | 'offline' | 'hybrid';
//   capacity: number;
//   registered: number;
//   price: number;
//   category: string;
//   level: 'beginner' | 'intermediate' | 'advanced';
//   prerequisites: string[];
//   tags: string[];
//   provider: {
//     id: string;
//     name: string;
//     logo: string;
//     rating: number;
//     verified: boolean;
//     description: string;
//     website: string;
//     email: string;
//     phone: string;
//   };
//   agenda: {
//     time: string;
//     topic: string;
//     speaker?: string;
//   }[];
//   requirements: string[];
//   benefits: string[];
//   certificate: boolean;
//   images: string[];
//   status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
//   createdAt: string;
// }

// export default function EventDetailsPage() {
//   const params = useParams();
//   const eventId = params.id as string;
  
//   const [event, setEvent] = useState<Event | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [showContactForm, setShowContactForm] = useState(false);
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [contactMessage, setContactMessage] = useState('');
//   const [contactEmail, setContactEmail] = useState('');
//   const [contactName, setContactName] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   // Mock data - replace with actual API call
//   useEffect(() => {
//     const fetchEvent = async () => {
//       // Simulate API call
//       setTimeout(() => {
//         setEvent({
//           id: eventId,
//           title: "Full Stack Web Development Bootcamp",
//           description: "Comprehensive 12-week program covering modern web development technologies including React, Node.js, databases, and deployment strategies. This intensive bootcamp is designed for beginners who want to become job-ready developers.",
//           shortDescription: "12-week intensive bootcamp covering React, Node.js, and modern web development",
//           date: "2024-08-15",
//           time: "09:00",
//           duration: "12 weeks",
//           location: "Tech Campus, Bhopal & Online",
//           locationType: "hybrid",
//           capacity: 30,
//           registered: 18,
//           price: 25000,
//           category: "Programming",
//           level: "beginner",
//           prerequisites: ["Basic computer knowledge", "English proficiency"],
//           tags: ["React", "Node.js", "JavaScript", "Full Stack", "Career"],
//           provider: {
//             id: "tech-institute-1",
//             name: "TechCorp Institute",
//             logo: "/images/logos/techcorp.png",
//             rating: 4.8,
//             verified: true,
//             description: "Leading technology education institute with 10+ years of experience in training developers.",
//             website: "https://techcorp.edu",
//             email: "contact@techcorp.edu",
//             phone: "+91-9876543210"
//           },
//           agenda: [
//             { time: "Week 1-2", topic: "HTML, CSS & JavaScript Fundamentals" },
//             { time: "Week 3-4", topic: "React.js & Component Development" },
//             { time: "Week 5-6", topic: "Node.js & Express Backend" },
//             { time: "Week 7-8", topic: "Database Design & MongoDB" },
//             { time: "Week 9-10", topic: "Full Stack Integration" },
//             { time: "Week 11-12", topic: "Deployment & Portfolio Projects" }
//           ],
//           requirements: [
//             "Laptop with minimum 8GB RAM",
//             "Stable internet connection",
//             "Dedicated 4-6 hours daily for study"
//           ],
//           benefits: [
//             "Industry-relevant curriculum",
//             "Hands-on project experience",
//             "Job placement assistance",
//             "Lifetime community access",
//             "Mentorship support"
//           ],
//           certificate: true,
//           images: [
//             "/images/events/bootcamp-1.jpg",
//             "/images/events/bootcamp-2.jpg",
//             "/images/events/bootcamp-3.jpg"
//           ],
//           status: "upcoming",
//           createdAt: "2024-07-01T10:30:00Z"
//         });
//         setLoading(false);
//       }, 1000);
//     };

//     fetchEvent();
//   }, [eventId]);

//   const handleContactSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setSubmitting(false);
//       setShowContactForm(false);
//       setContactMessage('');
//       setContactEmail('');
//       setContactName('');
//       alert('Message sent successfully! The provider will contact you soon.');
//     }, 1500);
//   };

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: event?.title,
//         text: event?.shortDescription,
//         url: window.location.href,
//       });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link copied to clipboard!');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 py-8">
//           <div className="animate-pulse">
//             <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
//             <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2">
//                 <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
//                 <div className="space-y-3 mb-8">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <div className="h-96 bg-gray-200 rounded-lg"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!event) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
//           <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
//           <Link href="/student/events" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//             Browse Events
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'upcoming': return 'bg-green-100 text-green-800';
//       case 'ongoing': return 'bg-blue-100 text-blue-800';
//       case 'completed': return 'bg-gray-100 text-gray-800';
//       case 'cancelled': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getLevelColor = (level: string) => {
//     switch (level) {
//       case 'beginner': return 'bg-green-100 text-green-800';
//       case 'intermediate': return 'bg-yellow-100 text-yellow-800';
//       case 'advanced': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <Link 
//             href="/student/events" 
//             className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
//           >
//             <ArrowLeft className="h-5 w-5 mr-2" />
//             Back to Events
//           </Link>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Hero Image */}
//         {event.images && event.images.length > 0 && (
//           <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
//             <Image 
//               src={event.images[0]} 
//               alt={event.title}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute top-4 right-4 flex gap-2">
//               <button
//                 onClick={toggleBookmark}
//                 className={`p-2 rounded-lg ${isBookmarked ? 'bg-red-100 text-red-600' : 'bg-white/80 text-gray-600'} hover:bg-white`}
//               >
//                 <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
//               </button>
//               <button
//                 onClick={handleShare}
//                 className="p-2 bg-white/80 text-gray-600 rounded-lg hover:bg-white"
//               >
//                 <Share2 className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Title and Basic Info */}
//             <div className="bg-white rounded-xl p-6 mb-6">
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
//                   {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
//                 </span>
//                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(event.level)}`}>
//                   {event.level.charAt(0).toUpperCase() + event.level.slice(1)}
//                 </span>
//                 {event.certificate && (
//                   <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
//                     Certificate Included
//                   </span>
//                 )}
//               </div>

//               <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 <div className="flex items-center text-gray-600">
//                   <Calendar className="h-5 w-5 mr-2" />
//                   {new Date(event.date).toLocaleDateString('en-IN', { 
//                     weekday: 'long', 
//                     year: 'numeric', 
//                     month: 'long', 
//                     day: 'numeric' 
//                   })}
//                 </div>
//                 <div className="flex items-center text-gray-600">
//                   <Clock className="h-5 w-5 mr-2" />
//                   {event.time} ({event.duration})
//                 </div>
//                 <div className="flex items-center text-gray-600">
//                   <MapPin className="h-5 w-5 mr-2" />
//                   {event.location}
//                 </div>
//                 <div className="flex items-center text-gray-600">
//                   <Users className="h-5 w-5 mr-2" />
//                   {event.registered}/{event.capacity} registered
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {event.tags.map((tag) => (
//                   <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Description */}
//             <div className="bg-white rounded-xl p-6 mb-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h2>
//               <p className="text-gray-700 leading-relaxed whitespace-pre-line">{event.description}</p>
//             </div>

//             {/* Agenda */}
//             {event.agenda && event.agenda.length > 0 && (
//               <div className="bg-white rounded-xl p-6 mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Agenda</h2>
//                 <div className="space-y-4">
//                   {event.agenda.map((item, index) => (
//                     <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                       <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-600">
//                         {item.time}
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-900">{item.topic}</h4>
//                         {item.speaker && (
//                           <p className="text-sm text-gray-600 mt-1">Speaker: {item.speaker}</p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Prerequisites & Requirements */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {event.prerequisites && event.prerequisites.length > 0 && (
//                 <div className="bg-white rounded-xl p-6">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
//                   <ul className="space-y-2">
//                     {event.prerequisites.map((prereq, index) => (
//                       <li key={index} className="flex items-center text-gray-700">
//                         <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
//                         {prereq}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {event.requirements && event.requirements.length > 0 && (
//                 <div className="bg-white rounded-xl p-6">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
//                   <ul className="space-y-2">
//                     {event.requirements.map((req, index) => (
//                       <li key={index} className="flex items-center text-gray-700">
//                         <AlertCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
//                         {req}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Benefits */}
//             {event.benefits && event.benefits.length > 0 && (
//               <div className="bg-white rounded-xl p-6 mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Gain</h2>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {event.benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-center text-gray-700">
//                       <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Pricing & Action */}
//             <div className="bg-white rounded-xl p-6">
//               <div className="text-center mb-6">
//                 <div className="text-3xl font-bold text-gray-900 mb-2">
//                   {event.price === 0 ? 'Free' : `₹${event.price.toLocaleString('en-IN')}`}
//                 </div>
//                 <p className="text-gray-600">
//                   {event.capacity - event.registered} spots remaining
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <button
//                   onClick={() => setShowContactForm(true)}
//                   className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium"
//                 >
//                   Contact Provider
//                 </button>
                
//                 <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium">
//                   Add to Wishlist
//                 </button>
//               </div>
//             </div>

//             {/* Provider Info */}
//             <div className="bg-white rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Provider</h3>
              
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
//                   <User className="h-6 w-6 text-gray-600" />
//                 </div>
//                 <div>
//                   <div className="flex items-center">
//                     <h4 className="font-medium text-gray-900">{event.provider.name}</h4>
//                     {event.provider.verified && (
//                       <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
//                     )}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600">
//                     <Star className="h-4 w-4 text-yellow-500 mr-1" />
//                     {event.provider.rating} rating
//                   </div>
//                 </div>
//               </div>

//               <p className="text-gray-700 text-sm mb-4">{event.provider.description}</p>

//               <div className="space-y-2 text-sm">
//                 {event.provider.website && (
//                   <div className="flex items-center text-gray-600">
//                     <Globe className="h-4 w-4 mr-2" />
//                     <a 
//                       href={event.provider.website} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline"
//                     >
//                       Visit Website
//                     </a>
//                   </div>
//                 )}
//                 {event.provider.email && (
//                   <div className="flex items-center text-gray-600">
//                     <Mail className="h-4 w-4 mr-2" />
//                     <span>{event.provider.email}</span>
//                   </div>
//                 )}
//                 {event.provider.phone && (
//                   <div className="flex items-center text-gray-600">
//                     <Phone className="h-4 w-4 mr-2" />
//                     <span>{event.provider.phone}</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Event Categories */}
//             <div className="bg-white rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Category</span>
//                   <span className="font-medium">{event.category}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Level</span>
//                   <span className="font-medium capitalize">{event.level}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Format</span>
//                   <span className="font-medium capitalize">{event.locationType}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Duration</span>
//                   <span className="font-medium">{event.duration}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Modal */}
//       {showContactForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full p-6">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Provider</h3>
//             <form onSubmit={handleContactSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={contactName}
//                   onChange={(e) => setContactName(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Email *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={contactEmail}
//                   onChange={(e) => setContactEmail(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your email address"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   required
//                   rows={4}
//                   value={contactMessage}
//                   onChange={(e) => setContactMessage(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="I'm interested in this event. Please provide more details about..."
//                 />
//               </div>
//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowContactForm(false)}
//                   className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
//                 >
//                   {submitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <MessageCircle className="h-4 w-4 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }