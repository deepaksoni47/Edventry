"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  Plus,
  X,
  CheckCircle,
} from "lucide-react";

const CreateEventPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    startDate: "",
    endDate: "",
    bannerImage: null,
    tags: [""],
    isOnline: true,
    link: "",
    isPublished: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        bannerImage: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("location", formData.location);
    data.append("startDate", new Date(formData.startDate).toISOString());
    data.append("endDate", new Date(formData.endDate).toISOString());
    data.append("isOnline", formData.isOnline);
    data.append("link", formData.link);
    data.append("isPublished", formData.isPublished);
    formData.tags.forEach((tag) => data.append("tags[]", tag));
    if (formData.bannerImage) {
      data.append("bannerImage", formData.bannerImage);
    }

    const res = await fetch("/api/events", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      router.push("/providers/events");
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => handleInputChange("category", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Start Date & Time
        </label>
        <input
          type="datetime-local"
          value={formData.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          End Date & Time
        </label>
        <input
          type="datetime-local"
          value={formData.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        {formData.tags.map((tag, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={tag}
              onChange={(e) => handleArrayChange("tags", index, e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => removeArrayItem("tags", index)}
            >
              <X className="text-red-500 w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("tags")}
          className="text-blue-600"
        >
          <Plus className="inline w-4 h-4 mr-1" /> Add Tag
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Zoom/External Link
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => handleInputChange("link", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Event Banner Image
        </label>
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        {formData.bannerImage && (
          <p className="text-sm text-green-600">
            ✓ {formData.bannerImage.name}
          </p>
        )}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Review & Publish</h3>
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p>
          <strong>Title:</strong> {formData.title}
        </p>
        <p>
          <strong>Category:</strong> {formData.category}
        </p>
        <p>
          <strong>Start:</strong> {formData.startDate}
        </p>
        <p>
          <strong>End:</strong> {formData.endDate}
        </p>
        <p>
          <strong>Tags:</strong> {formData.tags.join(", ")}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <label>
          <input
            type="checkbox"
            checked={formData.isPublished}
            onChange={(e) => handleInputChange("isPublished", e.target.checked)}
          />{" "}
          Publish Now
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.isOnline}
            onChange={(e) => handleInputChange("isOnline", e.target.checked)}
          />{" "}
          Is Online
        </label>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderCurrentStep()}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4 inline mr-1" /> Previous
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((s) => Math.min(4, s + 1))}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Next <ArrowRight className="w-4 h-4 inline ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              <CheckCircle className="w-4 h-4 inline mr-1" /> Create Event
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
