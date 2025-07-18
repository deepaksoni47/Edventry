import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0c0c0c] to-[#1a1a1a] text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Grid Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Browse Courses</li>
              <li className="hover:text-white transition">Popular Topics</li>
              <li className="hover:text-white transition">Certifications</li>
              <li className="hover:text-white transition">Instructors</li>
              <li className="hover:text-white transition">Student Stories</li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-white font-semibold mb-4">Events</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Upcoming Events</li>
              <li className="hover:text-white transition">Workshops</li>
              <li className="hover:text-white transition">Tech Talks</li>
              <li className="hover:text-white transition">Hackathons</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Blog</li>
              <li className="hover:text-white transition">Help Center</li>
              <li className="hover:text-white transition">Guides</li>
              <li className="hover:text-white transition">Community Forum</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Contact Us</li>
              <li className="hover:text-white transition">Support</li>
              <li className="hover:text-white transition">Become a Partner</li>
              <li className="hover:text-white transition">Feedback</li>
            </ul>
          </div>
        </div>

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Edventry Logo"
            width={120}
            height={40}
            className="mb-2"
          />
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Edventry. Empowering learning through
            experience.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-lg">
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
