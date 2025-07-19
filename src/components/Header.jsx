"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authStatus, setAuthStatus] = useState("loading"); // "loading" | "loggedIn" | "loggedOut"

  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("/api/me", { cache: "no-store" });
        const data = await res.json();
        setAuthStatus(data.isLoggedIn ? "loggedIn" : "loggedOut");
      } catch {
        setAuthStatus("loggedOut");
      }
    };

    checkLogin();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (res.ok) {
        setAuthStatus("loggedOut");
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-br from-sky-300 to-purple-200 border-b border-gray-200 text-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-500 transition"
        >
          🎓 Edventry
        </Link>

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

          {authStatus === "loggedIn" && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded-full transition shadow"
            >
              Logout
            </button>
          )}

          {authStatus === "loggedOut" && (
            <Link href="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition shadow">
                Login
              </button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

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

          {authStatus === "loggedIn" && (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-full transition"
            >
              Logout
            </button>
          )}

          {authStatus === "loggedOut" && (
            <Link href="/login">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-full transition">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
