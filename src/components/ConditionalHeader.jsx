"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ConditionalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Hide header on dashboard pages
  const isDashboardPage = pathname.startsWith('/student/') || 
                         pathname.startsWith('/providers/') || 
                         pathname.startsWith('/admin/');

  if (isDashboardPage) {
    return null;
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-white border-b border-gray-200 text-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-500 transition"
        >
          🎓 Edventry
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition shadow">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-sm font-medium py-2 px-3 rounded-md transition ${
                isActive(item.href)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/login">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-full transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
} 