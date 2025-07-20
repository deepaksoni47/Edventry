// app/page.jsx
import React from "react";
import connectDB from "@/lib/db";
import Event from "@/models/Event";
import Landing from "@/components/Landing";
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
import Link from "next/link";

export default async function LandingPage() {
  await connectDB();

  const events = await Event.find({ endDate: { $gte: new Date() } })
    .sort({ startDate: 1 })
    .limit(4)
    .lean();
  await Event.deleteMany({ endDate: { $lt: new Date() } });
  const safeEvents = events.map((event) => ({
    ...event,
    _id: event._id.toString(),
    startDate: event.startDate.toString(),
    endDate: event.endDate.toString(),
  }));
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
    { number: "1000+", label: "Courses Available" },
    { number: "10+", label: "Educational Institutes" },
    { number: "500+", label: "Students Enrolled" },
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

  return (
    <>
      <Landing />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Events
            </h2>
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All Events
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event._id.toString()}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{event.institute}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {new Date(event.startDate).toLocaleDateString()}
                    </div>
                  </div>

                  <Link
                    href={`/events/${event._id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/register"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Edventry Info */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                🎓 Edventry
              </h3>
              <p className="text-blue-200 mb-4">
                Connecting students with educational opportunities worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/events"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Browse Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/providers"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    For Institutes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center text-blue-200">
                  <Mail className="h-4 w-4 mr-2" />
                  support@edventry.com
                </div>
                <div className="flex items-center text-blue-200">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-blue-200">
                  <MapPin className="h-4 w-4 mr-2" />
                  123 Education St, San Francisco, CA 94103
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 Edventry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
