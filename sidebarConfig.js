import {
  Home,
  Calendar,
  Users,
  TrendingUp,
  Settings,
  LogOut,
  Bell,
  BookOpen,
  Star,
  FileText,
  Award,
  User,
  Plus,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  MessageSquare,
  CreditCard,
  HelpCircle,
  Shield,
  Database,
  Activity,
  Target,
  Zap,
  Heart
} from 'lucide-react';

export const sidebarConfig = {
  student: {
    title: "Student Dashboard",
    logo: "Edventry",
    userType: "student",
    navigation: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        href: '/student/dashboard',
        badge: null
      },
      {
        id: 'courses',
        label: 'My Courses',
        icon: BookOpen,
        href: '/student/courses',
        badge: { count: 4, color: 'blue', label: 'Active' }
      },
      {
        id: 'events',
        label: 'My Events',
        icon: Calendar,
        href: '/student/events',
        badge: { count: 2, color: 'green', label: 'Upcoming' }
      },
      {
        id: 'certificates',
        label: 'My Certificates',
        icon: Award,
        href: '/student/certificates',
        badge: { count: 3, color: 'purple' }
      },
      {
        id: 'wishlist',
        label: 'Wishlist',
        icon: Heart,
        href: '/student/wishlist',
        badge: null
      }
    ],
    bottomNavigation: [
      {
        id: 'profile',
        label: 'Profile',
        icon: User,
        href: '/student/profile'
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        href: '/student/settings'
      },
      {
        id: 'help',
        label: 'Help & Support',
        icon: HelpCircle,
        href: '/student/help'
      },
      {
        id: 'logout',
        label: 'Sign Out',
        icon: LogOut,
        href: '/auth/logout',
        variant: 'destructive'
      }
    ]
  },
  
  provider: {
    title: "Provider Dashboard",
    logo: "Edventry",
    
    userType: "provider",
    navigation: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        href: '/providers/dashboard',
        badge: null
      },
      {
        id: 'events',
        label: 'My Events',
        icon: Calendar,
        href: '/providers/events',
        badge: { count: 3, color: 'yellow', label: 'Pending' }
      },
      {
        id: 'create-event',
        label: 'Create Event',
        icon: Plus,
        href: '/providers/events/create',
        badge: null
      },
      {
        id: 'courses',
        label: 'My Courses',
        icon: BookOpen,
        href: '/providers/courses',
        badge: { count: 2, color: 'blue', label: 'Active' }
      },
      {
        id: 'create-course',
        label: 'Create Course',
        icon: Plus,
        href: '/providers/courses/create',
        badge: null
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: TrendingUp,
        href: '/providers/analytics',
        badge: null
      },
      {
        id: 'inquiries',
        label: 'Student Inquiries',
        icon: MessageSquare,
        href: '/providers/inquiries',
        badge: { count: 5, color: 'red' }
      }
    ],
    bottomNavigation: [
      {
        id: 'profile',
        label: 'Profile',
        icon: User,
        href: '/providers/profile'
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        href: '/providers/settings'
      },
      {
        id: 'help',
        label: 'Help & Support',
        icon: HelpCircle,
        href: '/providers/help'
      },
      {
        id: 'logout',
        label: 'Sign Out',
        icon: LogOut,
        href: '/auth/logout',
        variant: 'destructive'
      }
    ]
  },
  
  admin: {
    title: "Admin Dashboard",
    logo: "Edventry",
    userType: "admin",
    navigation: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        href: '/admin/dashboard',
        badge: null
      },
      {
        id: 'stats',
        label: 'Statistics',
        icon: BarChart3,
        href: '/admin/stats',
        badge: null
      },
      {
        id: 'providers',
        label: 'Providers',
        icon: Users,
        href: '/admin/providers',
        badge: { count: 8, color: 'yellow', label: 'Pending' }
      },
      {
        id: 'events',
        label: 'All Events',
        icon: Calendar,
        href: '/admin/events',
        badge: null
      },
      {
        id: 'students',
        label: 'Students',
        icon: User,
        href: '/admin/students',
        badge: null
      },
      {
        id: 'certificates',
        label: 'Certificates',
        icon: Award,
        href: '/admin/certificates',
        badge: null
      },
      {
        id: 'reviews',
        label: 'Reviews',
        icon: Star,
        href: '/admin/reviews',
        badge: null
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: Bell,
        href: '/admin/notifications',
        badge: { count: 12, color: 'red' }
      }
    ],
    bottomNavigation: [
      {
        id: 'profile',
        label: 'Profile',
        icon: User,
        href: '/admin/profile'
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        href: '/admin/settings'
      },
      {
        id: 'system',
        label: 'System',
        icon: Database,
        href: '/admin/system'
      },
      {
        id: 'help',
        label: 'Help & Support',
        icon: HelpCircle,
        href: '/admin/help'
      },
      {
        id: 'logout',
        label: 'Sign Out',
        icon: LogOut,
        href: '/auth/logout',
        variant: 'destructive'
      }
    ]
  }
};

export const getUserSidebarConfig = (userType) => {
  return sidebarConfig[userType] || sidebarConfig.student;
};

export const getNavigationItem = (userType, itemId) => {
  const config = getUserSidebarConfig(userType);
  return config.navigation.find(item => item.id === itemId) || 
         config.bottomNavigation.find(item => item.id === itemId);
};
