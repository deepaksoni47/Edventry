'use client'
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X, Camera } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@student.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    dateOfBirth: "1998-05-15",
    bio: "Passionate student interested in web development and data science. Always eager to learn new technologies and participate in educational events.",
    avatar: null
  });

  const [formData, setFormData] = useState(profile);

  // Mock user info for sidebar
  const userInfo = {
    name: profile.name,
    email: profile.email,
    verified: true
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const ProfileField = ({ label, value, icon: Icon, type = "text", editable = true }) => (
    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="h-4 w-4 text-blue-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        {isEditing && editable ? (
          <input
            type={type}
            value={value}
            onChange={(e) => handleInputChange(label.toLowerCase().replace(/\s+/g, ''), e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <p className="text-sm text-gray-900">{value}</p>
        )}
      </div>
    </div>
  );

  const StatsCard = ({ title, value, subtitle }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="Profile"
      pageDescription="Manage your account information"
    >
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {profile.name.charAt(0)}
                </div>
                {isEditing && (
                  <button className="absolute -bottom-1 -right-1 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-gray-600">{profile.email}</p>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-500">Verified Student</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Bio</h3>
            {isEditing ? (
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p className="text-gray-700">{profile.bio}</p>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Events Attended"
            value="24"
            subtitle="This year"
          />
          <StatsCard
            title="Certificates Earned"
            value="8"
            subtitle="Completed courses"
          />
          <StatsCard
            title="Reviews Given"
            value="12"
            subtitle="Helpful feedback"
          />
          <StatsCard
            title="Member Since"
            value="2023"
            subtitle="2 years ago"
          />
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileField
              label="Full Name"
              value={formData.name}
              icon={User}
            />
            <ProfileField
              label="Email"
              value={formData.email}
              icon={Mail}
              type="email"
            />
            <ProfileField
              label="Phone"
              value={formData.phone}
              icon={Phone}
              type="tel"
            />
            <ProfileField
              label="Location"
              value={formData.location}
              icon={MapPin}
            />
            <ProfileField
              label="Date of Birth"
              value={formData.dateOfBirth}
              icon={Calendar}
              type="date"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfile;