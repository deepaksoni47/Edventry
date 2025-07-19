'use client'
import React, { useState } from 'react';
import { MessageSquare, Search, Filter, Reply, Eye, Clock, User, Mail, Phone, Calendar, CheckCircle, AlertCircle, Star } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const ProviderInquiries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
  };

  const inquiries = [
    {
      id: 1,
      studentName: "Rahul Sharma",
      studentEmail: "rahul.sharma@email.com",
      studentPhone: "+91 98765 43210",
      subject: "Course Enrollment Query",
      message: "Hi, I'm interested in your Web Development Bootcamp. Can you tell me more about the course structure and when the next batch starts? Also, are there any prerequisites I should know about?",
      course: "Complete Web Development Bootcamp",
      status: "pending",
      priority: "high",
      createdAt: "2025-01-20T10:30:00Z",
      lastActivity: "2025-01-20T10:30:00Z",
      tags: ["enrollment", "course-info"],
      attachments: []
    },
    {
      id: 2,
      studentName: "Priya Patel",
      studentEmail: "priya.patel@email.com",
      studentPhone: "+91 87654 32109",
      subject: "Payment Issue",
      message: "I tried to enroll in the Data Science course but my payment failed. The error message says 'transaction declined'. Can you help me resolve this? I've already contacted my bank and they said there are no issues on their end.",
      course: "Data Science Fundamentals",
      status: "in_progress",
      priority: "high",
      createdAt: "2025-01-19T14:15:00Z",
      lastActivity: "2025-01-20T09:45:00Z",
      tags: ["payment", "technical"],
      attachments: []
    },
    {
      id: 3,
      studentName: "Amit Kumar",
      studentEmail: "amit.kumar@email.com",
      studentPhone: "+91 76543 21098",
      subject: "Certificate Request",
      message: "I completed the Python for Beginners course last month but haven't received my certificate yet. Can you please check the status and send it to me? My enrollment ID is PYTH001.",
      course: "Python for Beginners",
      status: "resolved",
      priority: "medium",
      createdAt: "2025-01-18T16:20:00Z",
      lastActivity: "2025-01-19T11:30:00Z",
      tags: ["certificate", "completion"],
      attachments: []
    },
    {
      id: 4,
      studentName: "Neha Singh",
      studentEmail: "neha.singh@email.com",
      studentPhone: "+91 65432 10987",
      subject: "Course Content Question",
      message: "I'm currently in Week 3 of the UI/UX Design course and I have a question about the Figma assignment. The instructions mention using 'auto-layout' but I can't find this feature. Could you provide a video tutorial or clarify the steps?",
      course: "UI/UX Design Masterclass",
      status: "pending",
      priority: "medium",
      createdAt: "2025-01-20T08:45:00Z",
      lastActivity: "2025-01-20T08:45:00Z",
      tags: ["course-content", "technical-support"],
      attachments: []
    },
    {
      id: 5,
      studentName: "Vikram Mehta",
      studentEmail: "vikram.mehta@email.com",
      studentPhone: "+91 54321 09876",
      subject: "Refund Request",
      message: "I enrolled in the Mobile App Development course but due to personal circumstances, I need to withdraw. I've only completed 2 lessons. Can I get a refund for the remaining amount?",
      course: "Mobile App Development with React Native",
      status: "pending",
      priority: "high",
      createdAt: "2025-01-17T12:10:00Z",
      lastActivity: "2025-01-17T12:10:00Z",
      tags: ["refund", "withdrawal"],
      attachments: []
    },
    {
      id: 6,
      studentName: "Sneha Reddy",
      studentEmail: "sneha.reddy@email.com",
      studentPhone: "+91 43210 98765",
      subject: "Group Discount Inquiry",
      message: "I'm planning to enroll 5 of my team members in the Business Analytics course. Do you offer any group discounts for corporate enrollments? Also, can we get customized content for our specific industry?",
      course: "Business Analytics",
      status: "in_progress",
      priority: "medium",
      createdAt: "2025-01-16T15:30:00Z",
      lastActivity: "2025-01-18T14:20:00Z",
      tags: ["corporate", "discount", "customization"],
      attachments: []
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
      case 'in_progress':
        return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">In Progress</span>;
      case 'resolved':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Resolved</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">High</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Medium</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Low</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{priority}</span>;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return formatDate(dateString);
  };

  const InquiryCard = ({ inquiry }) => (
    <div 
      className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow ${
        selectedInquiry?.id === inquiry.id ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setSelectedInquiry(inquiry)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{inquiry.studentName}</h3>
            <p className="text-sm text-gray-600">{inquiry.studentEmail}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {getPriorityBadge(inquiry.priority)}
          {getStatusBadge(inquiry.status)}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-1">{inquiry.subject}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{inquiry.message}</p>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {getTimeAgo(inquiry.createdAt)}
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {inquiry.course}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {inquiry.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const InquiryDetail = ({ inquiry }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Inquiry Details</h3>
        <div className="flex items-center space-x-2">
          {getPriorityBadge(inquiry.priority)}
          {getStatusBadge(inquiry.status)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Student Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-gray-500" />
              <span className="font-medium">{inquiry.studentName}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-gray-500" />
              <span>{inquiry.studentEmail}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-gray-500" />
              <span>{inquiry.studentPhone}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Inquiry Information</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Subject:</span> {inquiry.subject}
            </div>
            <div>
              <span className="font-medium">Course:</span> {inquiry.course}
            </div>
            <div>
              <span className="font-medium">Created:</span> {formatDate(inquiry.createdAt)}
            </div>
            <div>
              <span className="font-medium">Last Activity:</span> {formatDate(inquiry.lastActivity)}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Message</h4>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">{inquiry.message}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Reply</h4>
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Type your reply here..."
        />
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Reply className="h-4 w-4 mr-2" />
              Send Reply
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Resolved
            </button>
          </div>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800">
            <Star className="h-4 w-4 mr-2" />
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || inquiry.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="Student Inquiries"
      pageDescription="Manage and respond to student queries"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Student Inquiries</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            {filteredInquiries.length} of {inquiries.length} inquiries
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search inquiries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inquiries List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Inquiries</h3>
          {filteredInquiries.map((inquiry) => (
            <InquiryCard key={inquiry.id} inquiry={inquiry} />
          ))}
          
          {filteredInquiries.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No inquiries found</h3>
              <p className="text-gray-600">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No student inquiries at the moment.'
                }
              </p>
            </div>
          )}
        </div>

        {/* Inquiry Detail */}
        <div>
          {selectedInquiry ? (
            <InquiryDetail inquiry={selectedInquiry} />
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select an Inquiry</h3>
              <p className="text-gray-600">Choose an inquiry from the list to view details and respond</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProviderInquiries; 