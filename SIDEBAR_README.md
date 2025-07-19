# Dynamic Sidebar System

This project includes a comprehensive dynamic sidebar system that can be used across student, admin, and provider sections. The system is designed to be reusable, responsive, and easily configurable.

## Features

- **Dynamic Navigation**: Different navigation items for each user type (student, admin, provider)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Active Route Highlighting**: Automatically highlights the current active route
- **Badge Support**: Shows notifications and counts for navigation items
- **User Profile Display**: Shows user information in the sidebar
- **Mobile Overlay**: Smooth mobile navigation with overlay
- **Consistent Layout**: Provides a consistent layout wrapper for all dashboard pages

## File Structure

```
├── sidebarConfig.js              # Sidebar configuration and navigation items
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx           # Main sidebar component
│   │   └── DashboardLayout.jsx   # Layout wrapper component
│   └── app/
│       ├── student/
│       │   ├── dashboard/
│       │   │   └── page.jsx      # Student dashboard with sidebar
│       │   └── profile/
│       │       └── page.jsx      # Student profile with sidebar
│       ├── providers/
│       │   └── page.jsx          # Provider dashboard with sidebar
│       └── admin/
│           └── dashboard/
│               └── page.jsx      # Admin dashboard with sidebar
```

## Configuration

### Sidebar Configuration (`sidebarConfig.js`)

The sidebar configuration defines navigation items for each user type:

```javascript
export const sidebarConfig = {
  student: {
    title: "Student Dashboard",
    logo: "EduConnect",
    userType: "student",
    navigation: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        href: '/student/dashboard',
        badge: null
      },
      // ... more navigation items
    ],
    bottomNavigation: [
      // ... account-related navigation items
    ]
  },
  // ... provider and admin configurations
};
```

### Navigation Item Structure

Each navigation item has the following properties:

- `id`: Unique identifier for the navigation item
- `label`: Display text for the navigation item
- `icon`: Lucide React icon component
- `href`: Route path for the navigation item
- `badge`: Optional badge configuration (count, color, label)
- `variant`: Optional variant (e.g., 'destructive' for logout)

### Badge Configuration

```javascript
badge: {
  count: 3,           // Number to display
  color: 'red',       // Badge color (red, yellow, green, blue, purple)
  label: 'Pending'    // Text label (optional)
}
```

## Usage

### Basic Usage with DashboardLayout

```jsx
import DashboardLayout from '../components/DashboardLayout';

const MyPage = () => {
  const userInfo = {
    name: "John Doe",
    email: "john@example.com",
    verified: true
  };

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="My Page"
      pageDescription="Page description"
    >
      {/* Your page content here */}
      <div>Page content goes here</div>
    </DashboardLayout>
  );
};
```

### DashboardLayout Props

- `userType`: User type ('student', 'provider', 'admin')
- `userInfo`: Object containing user information
  - `name`: User's display name
  - `email`: User's email address
  - `verified`: Whether the user is verified
- `pageTitle`: Title displayed in the header
- `pageDescription`: Description displayed in the header
- `showNotifications`: Whether to show notification bell (default: true)
- `className`: Additional CSS classes for the main content area

### Direct Sidebar Usage

If you need more control, you can use the Sidebar component directly:

```jsx
import Sidebar from '../components/Sidebar';

const MyPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        userType="student"
        userInfo={userInfo}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      {/* Your custom layout */}
    </div>
  );
};
```

## User Types and Navigation

### Student Navigation
- Dashboard
- Browse Events
- My Events
- Certificates
- My Reviews
- Notifications

### Provider Navigation
- Dashboard
- My Events
- Create Event
- Analytics
- Student Inquiries
- Earnings

### Admin Navigation
- Dashboard
- Statistics
- Providers
- All Events
- Students
- Certificates
- Reviews
- Notifications

## Styling and Customization

### Custom Badge Colors

The sidebar supports custom badge colors. You can add new colors in the `getBadgeColor` function in `Sidebar.jsx`:

```javascript
const getBadgeColor = (color) => {
  const colors = {
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    // Add your custom colors here
    orange: 'bg-orange-100 text-orange-600',
  };
  return colors[color] || colors.blue;
};
```

### Custom Icons

All icons are from Lucide React. You can import and use any icon:

```javascript
import { Home, Calendar, Users, Settings } from 'lucide-react';

// Use in navigation items
{
  id: 'custom',
  label: 'Custom Page',
  icon: Home,  // Any Lucide React icon
  href: '/custom'
}
```

## Responsive Behavior

- **Desktop (lg+)**: Sidebar is always visible, main content is pushed to the right
- **Mobile (< lg)**: Sidebar is hidden by default, can be toggled with menu button
- **Mobile Overlay**: When sidebar is open on mobile, it shows an overlay behind it

## Best Practices

1. **Consistent User Info**: Always provide consistent user information across pages
2. **Active Routes**: The sidebar automatically highlights the current route
3. **Badge Updates**: Update badge counts dynamically based on your data
4. **Mobile First**: Test the sidebar on mobile devices to ensure good UX
5. **Accessibility**: The sidebar includes proper ARIA labels and keyboard navigation

## Examples

### Student Dashboard
```jsx
// src/app/student/dashboard/page.jsx
<DashboardLayout
  userType="student"
  userInfo={userInfo}
  pageTitle="Student Dashboard"
  pageDescription="Discover and join learning opportunities"
>
  {/* Dashboard content */}
</DashboardLayout>
```

### Provider Dashboard
```jsx
// src/app/providers/page.jsx
<DashboardLayout
  userType="provider"
  userInfo={userInfo}
  pageTitle="Provider Dashboard"
  pageDescription="Manage your events and track performance"
>
  {/* Provider content */}
</DashboardLayout>
```

### Admin Dashboard
```jsx
// src/app/admin/dashboard/page.jsx
<DashboardLayout
  userType="admin"
  userInfo={userInfo}
  pageTitle="Admin Dashboard"
  pageDescription="Monitor and manage the platform"
>
  {/* Admin content */}
</DashboardLayout>
```

## Troubleshooting

### Sidebar Not Showing
- Ensure you're using the `DashboardLayout` component
- Check that `userType` is correctly set
- Verify the sidebar configuration exists for your user type

### Navigation Not Working
- Check that the `href` paths in the configuration match your actual routes
- Ensure the route exists in your Next.js app structure

### Mobile Issues
- Test the mobile menu button functionality
- Check that the overlay is working correctly
- Verify touch interactions work properly

## Future Enhancements

- [ ] Add support for nested navigation items
- [ ] Implement collapsible sidebar sections
- [ ] Add theme customization options
- [ ] Support for custom user avatars
- [ ] Add breadcrumb navigation
- [ ] Implement search functionality in sidebar 