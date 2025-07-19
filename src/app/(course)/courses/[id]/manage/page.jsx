'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Plus, Edit, Trash2, Play, FileText, Video, CheckCircle, Lock, Unlock, Move, Save, X } from 'lucide-react';

const ManageCoursePage = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('curriculum');
  const [curriculum, setCurriculum] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Mock curriculum data
  const mockCurriculum = [
    {
      id: 1,
      week: 1,
      title: "Introduction to Web Development",
      lessons: [
        { id: 1, title: "Welcome to the Course", duration: "5 min", type: "video", free: true, completed: false },
        { id: 2, title: "Setting Up Your Development Environment", duration: "15 min", type: "video", free: true, completed: false },
        { id: 3, title: "Understanding How the Web Works", duration: "20 min", type: "video", free: false, completed: false },
        { id: 4, title: "Introduction to HTML", duration: "45 min", type: "video", free: false, completed: false },
        { id: 5, title: "Your First HTML Page", duration: "30 min", type: "video", free: false, completed: false }
      ]
    },
    {
      id: 2,
      week: 2,
      title: "HTML Fundamentals",
      lessons: [
        { id: 6, title: "HTML Structure and Elements", duration: "40 min", type: "video", free: false, completed: false },
        { id: 7, title: "Working with Text and Links", duration: "35 min", type: "video", free: false, completed: false },
        { id: 8, title: "Images and Media", duration: "25 min", type: "video", free: false, completed: false },
        { id: 9, title: "Forms and Input Elements", duration: "50 min", type: "video", free: false, completed: false },
        { id: 10, title: "HTML Best Practices", duration: "20 min", type: "video", free: false, completed: false }
      ]
    },
    {
      id: 3,
      week: 3,
      title: "CSS Styling",
      lessons: [
        { id: 11, title: "Introduction to CSS", duration: "30 min", type: "video", free: false, completed: false },
        { id: 12, title: "CSS Selectors and Properties", duration: "45 min", type: "video", free: false, completed: false },
        { id: 13, title: "Box Model and Layout", duration: "40 min", type: "video", free: false, completed: false },
        { id: 14, title: "Flexbox Layout", duration: "55 min", type: "video", free: false, completed: false },
        { id: 15, title: "CSS Grid", duration: "50 min", type: "video", free: false, completed: false }
      ]
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch curriculum data
    setTimeout(() => {
      setCurriculum(mockCurriculum);
      setIsLoading(false);
    }, 1000);
  }, [courseId]);

  const addWeek = () => {
    const newWeek = {
      id: curriculum.length + 1,
      week: curriculum.length + 1,
      title: `Week ${curriculum.length + 1}`,
      lessons: []
    };
    setCurriculum([...curriculum, newWeek]);
  };

  const addLesson = (weekId) => {
    const updatedCurriculum = curriculum.map(week => {
      if (week.id === weekId) {
        const newLesson = {
          id: Date.now(),
          title: "New Lesson",
          duration: "0 min",
          type: "video",
          free: false,
          completed: false
        };
        return {
          ...week,
          lessons: [...week.lessons, newLesson]
        };
      }
      return week;
    });
    setCurriculum(updatedCurriculum);
  };

  const updateLesson = (weekId, lessonId, field, value) => {
    const updatedCurriculum = curriculum.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          lessons: week.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, [field]: value };
            }
            return lesson;
          })
        };
      }
      return week;
    });
    setCurriculum(updatedCurriculum);
  };

  const deleteLesson = (weekId, lessonId) => {
    const updatedCurriculum = curriculum.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          lessons: week.lessons.filter(lesson => lesson.id !== lessonId)
        };
      }
      return week;
    });
    setCurriculum(updatedCurriculum);
  };

  const toggleLessonFree = (weekId, lessonId) => {
    const updatedCurriculum = curriculum.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          lessons: week.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, free: !lesson.free };
            }
            return lesson;
          })
        };
      }
      return week;
    });
    setCurriculum(updatedCurriculum);
  };

  const saveChanges = async () => {
    setIsEditing(false);
    // Here you would typically send the updated curriculum to your API
    console.log('Updated curriculum:', curriculum);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="space-y-6">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Manage Course Content</h1>
        </div>
        <div className="flex items-center space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Content
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'curriculum', label: 'Curriculum' },
              { id: 'quizzes', label: 'Quizzes' },
              { id: 'assignments', label: 'Assignments' },
              { id: 'resources', label: 'Resources' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'curriculum' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Course Curriculum</h3>
                {isEditing && (
                  <button
                    onClick={addWeek}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Week
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {curriculum.map((week) => (
                  <div key={week.id} className="border border-gray-200 rounded-lg">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-gray-900">
                            Week {week.week}: {week.title}
                          </h4>
                          {isEditing && (
                            <button className="text-blue-600 hover:text-blue-700">
                              <Edit className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                        {isEditing && (
                          <button
                            onClick={() => addLesson(week.id)}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add Lesson
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      {week.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center space-x-3 flex-1">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                              {lesson.type === 'video' ? (
                                <Play className="h-4 w-4 text-gray-600" />
                              ) : (
                                <FileText className="h-4 w-4 text-gray-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              {isEditing ? (
                                <input
                                  type="text"
                                  value={lesson.title}
                                  onChange={(e) => updateLesson(week.id, lesson.id, 'title', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                              ) : (
                                <h5 className="text-sm font-medium text-gray-900">{lesson.title}</h5>
                              )}
                              <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                                {isEditing ? (
                                  <input
                                    type="text"
                                    value={lesson.duration}
                                    onChange={(e) => updateLesson(week.id, lesson.id, 'duration', e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  />
                                ) : (
                                  <span>{lesson.duration}</span>
                                )}
                                <span className="capitalize">{lesson.type}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {lesson.free ? (
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                                Free
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                                Premium
                              </span>
                            )}
                            
                            {isEditing && (
                              <>
                                <button
                                  onClick={() => toggleLessonFree(week.id, lesson.id)}
                                  className="p-1 text-gray-400 hover:text-blue-600"
                                >
                                  {lesson.free ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                                </button>
                                <button
                                  onClick={() => deleteLesson(week.id, lesson.id)}
                                  className="p-1 text-gray-400 hover:text-red-600"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quizzes' && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <CheckCircle className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quiz Management</h3>
              <p className="text-gray-600 mb-4">Create and manage quizzes for your course.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Create Quiz
              </button>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Assignment Management</h3>
              <p className="text-gray-600 mb-4">Create and manage assignments for your course.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Create Assignment
              </button>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Resource Management</h3>
              <p className="text-gray-600 mb-4">Upload and manage course resources and materials.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upload Resource
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCoursePage; 