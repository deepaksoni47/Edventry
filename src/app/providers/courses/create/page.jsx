'use client'
import React, { useState } from 'react';
import { BookOpen, Upload, Plus, X, Save, Eye } from 'lucide-react';
import DashboardLayout from '../../../../components/DashboardLayout';

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    duration: '',
    price: '',
    thumbnail: null,
    prerequisites: '',
    learningOutcomes: [''],
    curriculum: [
      {
        week: 1,
        title: '',
        description: '',
        lessons: [
          { title: '', duration: '', type: 'video' }
        ]
      }
    ]
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock provider data
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true
  };

  const categories = [
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Design",
    "Programming",
    "Business",
    "Marketing",
    "Finance",
    "Health & Fitness",
    "Music",
    "Photography",
    "Other"
  ];

  const levels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Beginner to Advanced"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLearningOutcomeChange = (index, value) => {
    const newOutcomes = [...formData.learningOutcomes];
    newOutcomes[index] = value;
    setFormData(prev => ({
      ...prev,
      learningOutcomes: newOutcomes
    }));
  };

  const addLearningOutcome = () => {
    setFormData(prev => ({
      ...prev,
      learningOutcomes: [...prev.learningOutcomes, '']
    }));
  };

  const removeLearningOutcome = (index) => {
    const newOutcomes = formData.learningOutcomes.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      learningOutcomes: newOutcomes
    }));
  };

  const handleCurriculumChange = (weekIndex, field, value) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[weekIndex] = {
      ...newCurriculum[weekIndex],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      curriculum: newCurriculum
    }));
  };

  const addWeek = () => {
    const newWeek = {
      week: formData.curriculum.length + 1,
      title: '',
      description: '',
      lessons: [
        { title: '', duration: '', type: 'video' }
      ]
    };
    setFormData(prev => ({
      ...prev,
      curriculum: [...prev.curriculum, newWeek]
    }));
  };

  const addLesson = (weekIndex) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[weekIndex].lessons.push({
      title: '',
      duration: '',
      type: 'video'
    });
    setFormData(prev => ({
      ...prev,
      curriculum: newCurriculum
    }));
  };

  const handleLessonChange = (weekIndex, lessonIndex, field, value) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[weekIndex].lessons[lessonIndex] = {
      ...newCurriculum[weekIndex].lessons[lessonIndex],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      curriculum: newCurriculum
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Course data:', formData);
    setIsSubmitting(false);
    
    // Here you would typically redirect to the course page or show success message
    alert('Course created successfully!');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        thumbnail: file
      }));
    }
  };

  const FormStep = ({ step, title, children, isActive }) => (
    <div className={`${isActive ? 'block' : 'hidden'}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">Step {step} of 3</p>
      </div>
      {children}
    </div>
  );

  return (
    <DashboardLayout
      userType="provider"
      userInfo={userInfo}
      pageTitle="Create Course"
      pageDescription="Create a new course for your students"
    >
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Basic Info</span>
            <span>Curriculum</span>
            <span>Review & Publish</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Basic Information */}
          <FormStep step={1} title="Basic Information" isActive={currentStep === 1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter course title"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe what students will learn in this course"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level *
                </label>
                <select
                  value={formData.level}
                  onChange={(e) => handleInputChange('level', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select level</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration *
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 8 weeks, 12 hours"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Thumbnail
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload a thumbnail image for your course
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="thumbnail-upload"
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                  >
                    Choose File
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prerequisites
                </label>
                <textarea
                  value={formData.prerequisites}
                  onChange={(e) => handleInputChange('prerequisites', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What should students know before taking this course?"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Learning Outcomes
                </label>
                {formData.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={outcome}
                      onChange={(e) => handleLearningOutcomeChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Learning outcome ${index + 1}`}
                    />
                    {formData.learningOutcomes.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeLearningOutcome(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addLearningOutcome}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Learning Outcome
                </button>
              </div>
            </div>
          </FormStep>

          {/* Step 2: Curriculum */}
          <FormStep step={2} title="Course Curriculum" isActive={currentStep === 2}>
            <div className="space-y-6">
              {formData.curriculum.map((week, weekIndex) => (
                <div key={weekIndex} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Week {week.week} Title
                      </label>
                      <input
                        type="text"
                        value={week.title}
                        onChange={(e) => handleCurriculumChange(weekIndex, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Week title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <input
                        type="text"
                        value={week.description}
                        onChange={(e) => handleCurriculumChange(weekIndex, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Week description"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Lessons
                    </label>
                    {week.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={lesson.title}
                          onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'title', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Lesson title"
                        />
                        <input
                          type="text"
                          value={lesson.duration}
                          onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'duration', e.target.value)}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Duration"
                        />
                        <select
                          value={lesson.type}
                          onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'type', e.target.value)}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="video">Video</option>
                          <option value="text">Text</option>
                          <option value="quiz">Quiz</option>
                          <option value="assignment">Assignment</option>
                        </select>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addLesson(weekIndex)}
                      className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Lesson
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addWeek}
                className="flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Week
              </button>
            </div>
          </FormStep>

          {/* Step 3: Review & Publish */}
          <FormStep step={3} title="Review & Publish" isActive={currentStep === 3}>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Preview</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Basic Information</h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Title:</strong> {formData.title || 'Not set'}</p>
                    <p><strong>Category:</strong> {formData.category || 'Not set'}</p>
                    <p><strong>Level:</strong> {formData.level || 'Not set'}</p>
                    <p><strong>Duration:</strong> {formData.duration || 'Not set'}</p>
                    <p><strong>Price:</strong> ₹{formData.price || '0'}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Curriculum</h5>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Total Weeks:</strong> {formData.curriculum.length}</p>
                    <p><strong>Total Lessons:</strong> {formData.curriculum.reduce((total, week) => total + week.lessons.length, 0)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium text-gray-900 mb-2">Description</h5>
                <p className="text-sm text-gray-600">{formData.description || 'No description provided'}</p>
              </div>

              {formData.learningOutcomes.length > 0 && formData.learningOutcomes[0] && (
                <div className="mt-6">
                  <h5 className="font-medium text-gray-900 mb-2">Learning Outcomes</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {formData.learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FormStep>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <div className="flex space-x-3">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Create Course
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateCourse; 