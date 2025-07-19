'use client'
import React, { useState, useEffect } from 'react';
import { BookOpen, Upload, Plus, X, Save, Eye, AlertCircle, CheckCircle } from 'lucide-react';
import DashboardLayout from '../../../../components/DashboardLayout';
import { useRouter } from 'next/navigation';

const CreateCourse = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    price: 0,
    thumbnail: '',
    tags: [],
    curriculum: [
      {
        week: 1,
        title: '',
        description: '',
        lessons: [
          { 
            title: '', 
            content: '', 
            videoUrl: '', 
            duration: 0, 
            isFree: false 
          }
        ]
      }
    ]
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Mock provider data - in real app, get from auth context
  const userInfo = {
    name: "TechSkills Institute",
    email: "contact@techskills.edu",
    verified: true,
    _id: "mock-instructor-id" // This would come from auth context
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleTagsChange = (value) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    setFormData(prev => ({
      ...prev,
      tags
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
        { 
          title: '', 
          content: '', 
          videoUrl: '', 
          duration: 0, 
          isFree: false 
        }
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
      content: '',
      videoUrl: '',
      duration: 0,
      isFree: false
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

  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Course title is required';
    } else if (formData.title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Course description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    // Category validation
    if (!formData.categoryId) {
      newErrors.categoryId = 'Please select a category';
    }

    // Price validation
    if (formData.price < 0) {
      newErrors.price = 'Price cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage('');

    try {
      const courseData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price) || 0,
        categoryId: formData.categoryId,
        thumbnail: formData.thumbnail,
        tags: formData.tags,
        curriculum: formData.curriculum,
        instructorId: userInfo._id
      };

      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage('Course created successfully!');
        console.log('Course created:', result.course);
        
        // Redirect to course page after 2 seconds
        setTimeout(() => {
          router.push(`/providers/courses/${result.course._id}`);
        }, 2000);
      } else {
        setErrors({ submit: result.error || 'Failed to create course' });
      }
    } catch (error) {
      console.error('Error creating course:', error);
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would upload to cloud storage and get URL
      // For now, we'll just store the file name
      setFormData(prev => ({
        ...prev,
        thumbnail: file.name
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

        {/* Success and Error Messages */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-green-800">{successMessage}</p>
            </div>
          </div>
        )}

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <p className="text-red-800">{errors.submit}</p>
            </div>
          </div>
        )}

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
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter course title"
                  required
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.title}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe what students will learn in this course"
                  required
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.description}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.categoryId}
                  onChange={(e) => handleInputChange('categoryId', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.categoryId ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.categoryId}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  required
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.price}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={formData.tags.join(', ')}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter tags separated by commas (e.g., javascript, react, web development)"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Add relevant tags to help students find your course
                </p>
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
                  {formData.thumbnail && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {formData.thumbnail}
                    </p>
                  )}
                </div>
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

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Lessons
                    </label>
                    {week.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="border border-gray-200 rounded-lg p-3 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Lesson Title *
                            </label>
                            <input
                              type="text"
                              value={lesson.title}
                              onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'title', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Lesson title"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Duration (minutes)
                            </label>
                            <input
                              type="number"
                              value={lesson.duration}
                              onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'duration', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="30"
                              min="0"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Content *
                          </label>
                          <textarea
                            value={lesson.content}
                            onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'content', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Lesson content or description"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Video URL
                          </label>
                          <input
                            type="url"
                            value={lesson.videoUrl}
                            onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'videoUrl', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://example.com/video.mp4"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={lesson.isFree}
                              onChange={(e) => handleLessonChange(weekIndex, lessonIndex, 'isFree', e.target.checked)}
                              className="mr-2"
                            />
                            <span className="text-sm text-gray-700">Free lesson</span>
                          </label>
                        </div>
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
                    <p><strong>Category:</strong> {categories.find(c => c._id === formData.categoryId)?.name || 'Not set'}</p>
                    <p><strong>Price:</strong> ₹{formData.price || '0'}</p>
                    <p><strong>Tags:</strong> {formData.tags.length > 0 ? formData.tags.join(', ') : 'No tags'}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Curriculum</h5>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Total Weeks:</strong> {formData.curriculum.length}</p>
                    <p><strong>Total Lessons:</strong> {formData.curriculum.reduce((total, week) => total + week.lessons.length, 0)}</p>
                    <p><strong>Free Lessons:</strong> {formData.curriculum.reduce((total, week) => total + week.lessons.filter(lesson => lesson.isFree).length, 0)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium text-gray-900 mb-2">Description</h5>
                <p className="text-sm text-gray-600">{formData.description || 'No description provided'}</p>
              </div>

              {formData.tags.length > 0 && (
                <div className="mt-6">
                  <h5 className="font-medium text-gray-900 mb-2">Tags</h5>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
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