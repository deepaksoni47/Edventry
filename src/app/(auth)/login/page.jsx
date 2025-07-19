"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      } // Store token in localStorage (or cookie if more secure storage is needed)

      localStorage.setItem("token", data.token);

      alert("Login successful!"); // Optional: redirect to dashboard or home

      window.location.href = "/dashboard"; // Replace with your route
    } catch (error) {
      console.error("Login failed:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section - Login Form */}
      <div className="bg-white p-8 shadow-lg flex items-center justify-center">
        <div className="max-w-md mx-auto w-full space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
            <p className="text-sm text-gray-500">
              Login to continue learning and exploring.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="bg-gray-100 flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md">
          <div className="mx-auto w-64 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-32 h-32 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">
              Fuel your curiosity.
            </h2>
            <p className="text-lg text-gray-600">Learn. Teach. Grow.</p>
            <p className="text-sm text-gray-500">
              Join thousands of learners on their journey to discover new skills
              and unlock their potential.
            </p>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
