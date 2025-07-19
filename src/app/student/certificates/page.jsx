'use client'
import React, { useState } from 'react';
import { Award, Download, Eye, Search, Filter, Calendar, BookOpen, Star, CheckCircle } from 'lucide-react';
import DashboardLayout from '../../../components/DashboardLayout';

const StudentCertificates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock student data
  const userInfo = {
    name: "Rahul Sharma",
    email: "rahul.sharma@student.com",
    verified: true
  };

  const certificates = [
    {
      id: 1,
      title: "Data Science Fundamentals",
      provider: "DataPro Academy",
      category: "Data Science",
      courseId: "DSF001",
      certificateId: "CERT-DSF-2025-001",
      issueDate: "2025-01-15",
      completionDate: "2025-01-15",
      grade: "A+",
      score: 95,
      totalScore: 100,
      status: "verified",
      downloadUrl: "/certificates/dsf-001.pdf",
      previewUrl: "/certificates/dsf-001-preview.jpg",
      description: "Successfully completed the Data Science Fundamentals course covering Python, Pandas, NumPy, and Machine Learning basics",
      skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Analysis"],
      duration: "8 weeks",
      totalLessons: 32
    },
    {
      id: 2,
      title: "Python for Beginners",
      provider: "CodeMaster Academy",
      category: "Programming",
      courseId: "PYTH001",
      certificateId: "CERT-PYTH-2024-156",
      issueDate: "2024-12-10",
      completionDate: "2024-12-10",
      grade: "A",
      score: 88,
      totalScore: 100,
      status: "verified",
      downloadUrl: "/certificates/pyth-001.pdf",
      previewUrl: "/certificates/pyth-001-preview.jpg",
      description: "Completed comprehensive Python programming course for absolute beginners",
      skills: ["Python", "Programming Fundamentals", "Data Types", "Functions", "OOP"],
      duration: "4 weeks",
      totalLessons: 16
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      provider: "TechSkills Institute",
      category: "Web Development",
      courseId: "WEB001",
      certificateId: "CERT-WEB-2024-089",
      issueDate: "2024-11-20",
      completionDate: "2024-11-20",
      grade: "A+",
      score: 92,
      totalScore: 100,
      status: "verified",
      downloadUrl: "/certificates/web-001.pdf",
      previewUrl: "/certificates/web-001-preview.jpg",
      description: "Successfully completed the comprehensive web development bootcamp",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      duration: "12 weeks",
      totalLessons: 48
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      provider: "Marketing Pro Institute",
      category: "Marketing",
      courseId: "MKT001",
      certificateId: "CERT-MKT-2024-234",
      issueDate: "2024-10-15",
      completionDate: "2024-10-15",
      grade: "A",
      score: 85,
      totalScore: 100,
      status: "verified",
      downloadUrl: "/certificates/mkt-001.pdf",
      previewUrl: "/certificates/mkt-001-preview.jpg",
      description: "Completed digital marketing strategy course with practical implementation",
      skills: ["SEO", "Social Media Marketing", "Content Marketing", "Analytics", "PPC"],
      duration: "6 weeks",
      totalLessons: 24
    }
  ];

  const CertificateCard = ({ certificate }) => {
    const getStatusBadge = (status) => {
      switch (status) {
        case 'verified':
          return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Verified</span>;
        case 'pending':
          return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
        case 'expired':
          return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Expired</span>;
        default:
          return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{status}</span>;
      }
    };

    const getGradeColor = (grade) => {
      switch (grade) {
        case 'A+':
          return 'text-green-600 bg-green-100';
        case 'A':
          return 'text-blue-600 bg-blue-100';
        case 'B+':
          return 'text-yellow-600 bg-yellow-100';
        case 'B':
          return 'text-orange-600 bg-orange-100';
        default:
          return 'text-gray-600 bg-gray-100';
      }
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{certificate.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{certificate.description}</p>
                <p className="text-sm text-gray-500">by {certificate.provider}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                {getStatusBadge(certificate.status)}
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(certificate.grade)}`}>
                  Grade: {certificate.grade}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(certificate.issueDate)}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {certificate.duration}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                {certificate.score}/{certificate.totalScore}
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                {certificate.totalLessons} lessons
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Skills Acquired:</h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">ID: {certificate.certificateId}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </button>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredCertificates = certificates.filter(certificate => {
    const matchesSearch = certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         certificate.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         certificate.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         certificate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterCategory === 'all' || certificate.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const getStats = () => {
    const total = certificates.length;
    const verified = certificates.filter(c => c.status === 'verified').length;
    const avgScore = Math.round(certificates.reduce((sum, c) => sum + c.score, 0) / total);
    const categories = [...new Set(certificates.map(c => c.category))].length;

    return { total, verified, avgScore, categories };
  };

  const stats = getStats();

  const categories = [...new Set(certificates.map(c => c.category))];

  return (
    <DashboardLayout
      userType="student"
      userInfo={userInfo}
      pageTitle="My Certificates"
      pageDescription="View and manage your earned certificates"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-500">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Certificates</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-500">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Verified</p>
              <p className="text-2xl font-bold text-gray-900">{stats.verified}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-500">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Score</p>
              <p className="text-2xl font-bold text-gray-900">{stats.avgScore}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-500">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-gray-900">{stats.categories}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredCertificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || filterCategory !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'You haven\'t earned any certificates yet.'
            }
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Browse Courses
          </button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentCertificates; 