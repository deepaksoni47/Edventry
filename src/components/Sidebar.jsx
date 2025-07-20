'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { X, Menu, CheckCircle } from 'lucide-react';
import { sidebarConfig, getUserSidebarConfig } from '../../sidebarConfig';

const Sidebar = ({ 
  userType = 'student', 
  userInfo = {}, 
  isOpen = false, 
  onToggle = () => {},
  className = '' 
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const config = getUserSidebarConfig(userType);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActiveRoute = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const getBadgeColor = (color) => {
    const colors = {
      red: 'bg-red-100 text-red-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.blue;
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (res.ok) {
        // Dispatch event to notify header about logout
        window.dispatchEvent(new CustomEvent('userLoggedOut'));
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const NavigationItem = ({ item, isBottom = false }) => {
    const Icon = item.icon;
    const isActive = isActiveRoute(item.href);
    const isDestructive = item.variant === 'destructive';

    // Handle logout action
    const handleClick = async (e) => {
      if (isDestructive) {
        e.preventDefault();
        await handleLogout();
      }
      if (isMobile && onToggle) {
        onToggle();
      }
    };

    return (
      <Link
        href={item.href}
        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
          isActive 
            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
            : isDestructive
            ? 'text-red-600 hover:bg-red-50'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
        onClick={handleClick}
      >
        <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : ''}`} />
        <span className="flex-1">{item.label}</span>
        {item.badge && (
          <span className={`ml-auto text-xs px-2 py-1 rounded-full font-medium ${getBadgeColor(item.badge.color)}`}>
            {item.badge.count || item.badge.label}
          </span>
        )}
      </Link>
    );
  };

  const UserProfile = () => (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : userType.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {userInfo.name || `${userType.charAt(0).toUpperCase() + userType.slice(1)} User`}
          </p>
          <div className="flex items-center space-x-1">
            {userInfo.verified && <CheckCircle className="h-3 w-3 text-green-500" />}
            <span className="text-xs text-gray-500 truncate">
              {userInfo.email || `${userType}@example.com`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:fixed lg:translate-x-0 lg:inset-0 lg:flex-shrink-0
        ${className}
      `}>
        {/* Mobile Close Button */}
        <div className="flex items-center justify-end h-16 px-6 border-b border-gray-200 lg:hidden">
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* User Profile */}
        <UserProfile />

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-6 px-3">
            {/* Main Navigation */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Main
              </div>
              {config.navigation.map((item) => (
                <NavigationItem key={item.id} item={item} />
              ))}
            </div>

            {/* Bottom Navigation */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Account
              </div>
              <div className="space-y-1 mt-2">
                {config.bottomNavigation.map((item) => (
                  <NavigationItem key={item.id} item={item} isBottom={true} />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
