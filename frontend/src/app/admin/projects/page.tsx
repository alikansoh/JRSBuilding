"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { Edit, Trash2, PlusCircle, X, ChevronLeft, ChevronRight, Calendar, MapPin, Image as ImageIcon, Upload, Eye, Sparkles } from "lucide-react";
import Image from "next/image";

type Project = {
  _id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  images?: string[]; // will hold URLs from server
};

// Enhanced Image Slider Component with modern design
const ImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="h-64 w-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 rounded-2xl mb-6 flex flex-col items-center justify-center text-slate-400 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/30"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mb-3">
            <ImageIcon size={24} className="text-slate-500" />
          </div>
          <span className="text-sm font-medium text-slate-600">No images available</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 w-full mb-6 group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
      
      <Image
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${isLoading ? 'blur-sm' : 'blur-0'}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 z-20">
          <div className="w-8 h-8 border-3 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {images.length > 1 && !isLoading && (
        <>
          {/* Navigation Buttons with enhanced design */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20 shadow-lg hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20 shadow-lg hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Enhanced Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/40 hover:bg-white/70 hover:scale-110'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Enhanced Image Counter */}
          <div className="absolute top-4 right-4 bg-black/30 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-md z-20 font-medium">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
      
      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

// Success Toast Component
const SuccessToast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white">
        <X size={16} />
      </button>
    </div>
  );
};

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form fields
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formImages, setFormImages] = useState<string[]>([]); // base64 strings for preview
  const [imageFiles, setImageFiles] = useState<File[]>([]); // raw files for upload

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && Array.isArray(data.data)) {
        setProjects(data.data);
        setError(null);
      } else {
        console.error("Unexpected response format:", data);
        setError("Unexpected response format from server.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Convert uploaded files to base64 strings for preview
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setImageFiles(fileArray);

    // Convert all files to base64 for preview
    Promise.all(
      fileArray.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            if (typeof reader.result === "string") resolve(reader.result);
            else reject("Failed to read file");
          };
          reader.onerror = (error) => reject(error);
        });
      })
    )
      .then((base64Images) => {
        setFormImages(base64Images);
      })
      .catch(() => {
        alert("Failed to read one or more images");
        setFormImages([]);
        setImageFiles([]);
      });
  };

  // Open form for new or edit
  const openForm = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormTitle(project.title);
      setFormDescription(project.description);
      setFormDate(project.date.slice(0, 10));
      setFormLocation(project.location);
      setFormImages(project.images || []);
      setImageFiles([]);
    } else {
      setEditingProject(null);
      setFormTitle("");
      setFormDescription("");
      setFormDate("");
      setFormLocation("");
      setFormImages([]);
      setImageFiles([]);
    }
    setShowForm(true);
  };

  const closeForm = () => {
    if (submitting) return;
    setShowForm(false);
    setEditingProject(null);
    setFormTitle("");
    setFormDescription("");
    setFormDate("");
    setFormLocation("");
    setFormImages([]);
    setImageFiles([]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formTitle.trim()) {
      alert("Please enter a project title.");
      return;
    }

    if (!formDescription.trim()) {
      alert("Please enter a project description.");
      return;
    }

    if (!formDate) {
      alert("Please select a project date.");
      return;
    }

    if (!formLocation.trim()) {
      alert("Please enter a project location.");
      return;
    }

    if (!editingProject && imageFiles.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      
      formData.append('title', formTitle.trim());
      formData.append('description', formDescription.trim());
      formData.append('date', formDate);
      formData.append('location', formLocation.trim());
      
      if (imageFiles.length > 0) {
        imageFiles.forEach((file) => {
          formData.append('images', file);
        });
      }
      
      if (editingProject && imageFiles.length === 0) {
        formData.append('keepExistingImages', 'true');
        formData.append('existingImages', JSON.stringify(editingProject.images || []));
      }

      const url = editingProject
        ? `/api/projects/${editingProject._id}`
        : "/api/projects";
      const method = editingProject ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        const message = editingProject 
          ? "Project updated successfully!" 
          : "Project created successfully!";
        
        setSuccessMessage(message);
        await fetchProjects();
        closeForm();
      } else {
        throw new Error(result.message || "Failed to save project.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Error saving project. Please try again.";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`))
      return;

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setProjects((prev) => prev.filter((p) => p._id !== id));
        setSuccessMessage("Project deleted successfully!");
      } else {
        throw new Error(result.message || "Failed to delete project.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Error deleting project. Please try again.";
      alert(errorMessage);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/20 to-orange-50/20 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-red-500/20 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-800 mb-2">Loading Projects</h3>
          <p className="text-slate-600">Please wait while we fetch your amazing work...</p>
        </div>
      </div>
    </div>
  );
  
  if (error && projects.length === 0) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/20 to-orange-50/20 flex items-center justify-center p-6">
      <div className="bg-white border border-red-200 rounded-3xl p-8 max-w-md shadow-2xl">
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <X size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">Connection Error</h3>
        <p className="text-red-600 text-center mb-4">{error}</p>
        <p className="text-slate-600 text-sm text-center mb-6">Please check your API connection and try again.</p>
        <button 
          onClick={fetchProjects}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Retry Connection
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/10 to-orange-50/10 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles size={24} className="text-white" />
              </div>
              <h1 className="text-5xl font-black bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Projects Studio
              </h1>
            </div>
            <p className="text-slate-600 text-lg max-w-md">
              Craft, manage, and showcase your creative portfolio with style
            </p>
            {error && (
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg text-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                API connection unstable
              </div>
            )}
          </div>
          
          <button
            onClick={() => openForm()}
            className="group relative bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <PlusCircle size={22} className="group-hover:rotate-90 transition-transform duration-300" />
              <span className="hidden sm:inline">Create New Project</span>
              <span className="sm:hidden">Create</span>
            </div>
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-400 rounded-2xl flex items-center justify-center">
                <PlusCircle size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Your Canvas Awaits</h3>
            <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
              Ready to showcase your amazing work? Create your first project and let your creativity shine.
            </p>
            <button
              onClick={() => openForm()}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <PlusCircle size={20} />
              Start Creating
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <ImageSlider images={project.images || []} title={project.title} />
                
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="font-bold text-2xl text-slate-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 flex-1 mr-4">
                      {project.title}
                    </h2>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <button
                        onClick={() => openForm(project)}
                        className="p-2.5 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                        title="Edit project"
                        aria-label={`Edit project ${project.title}`}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(project._id!, project.title)}
                        className="p-2.5 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                        title="Delete project"
                        aria-label={`Delete project ${project.title}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-6 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin size={16} className="text-red-500" />
                      <span className="font-medium text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 px-3 py-1.5 rounded-xl">
                      <Calendar size={14} />
                      <span className="font-semibold text-sm">
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Modal form */}
        {showForm && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={closeForm}
          >
            <div
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-3xl relative overflow-auto max-h-[90vh] shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeForm}
                disabled={submitting}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-3 rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Close form"
              >
                <X size={24} />
              </button>
              
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    {editingProject ? <Edit size={24} className="text-white" /> : <PlusCircle size={24} className="text-white" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                      {editingProject ? "Edit Project" : "Create New Project"}
                    </h2>
                    <p className="text-slate-600">
                      {editingProject ? "Update your project details" : "Bring your creative vision to life"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2" htmlFor="title">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Project Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-2xl px-6 py-4 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium placeholder:text-slate-400"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Enter your amazing project title..."
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2" htmlFor="description">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-2xl px-6 py-4 transition-all duration-200 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-400"
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    rows={5}
                    placeholder="Tell the story behind your project..."
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2" htmlFor="date">
                      <Calendar size={16} className="text-red-500" />
                      Project Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-2xl px-6 py-4 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2" htmlFor="location">
                      <MapPin size={16} className="text-red-500" />
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-2xl px-6 py-4 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-400"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="Where was this created?"
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2" htmlFor="images">
                    <Upload size={16} className="text-red-500" />
                    Project Images
                    {!editingProject && <span className="text-red-500">*</span>}
                    {editingProject && <span className="text-slate-500 text-xs font-normal ml-2">(Upload new images or keep existing ones)</span>}
                  </label>
                  
                  <div className="border-2 border-dashed border-slate-300 hover:border-red-400 rounded-2xl p-8 text-center transition-all duration-300 bg-gradient-to-br from-slate-50/50 to-white/50">
                    <input
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={submitting}
                    />
                    <label
                      htmlFor="images"
                      className={`cursor-pointer inline-flex flex-col items-center gap-4 ${submitting ? 'pointer-events-none opacity-50' : 'hover:scale-105'} transition-all duration-200`}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg">
                        <Upload size={28} className="text-red-500" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-lg font-bold text-slate-700">
                          {editingProject ? 'Upload new images' : 'Upload your project images'}
                        </span>
                        <p className="text-sm text-slate-500">
                          PNG, JPG, WebP up to 10MB each • Drag & drop or click to browse
                        </p>
                      </div>
                    </label>
                  </div>
                  
                  {formImages.length > 0 && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Eye size={16} className="text-red-500" />
                          {editingProject && imageFiles.length === 0 ? 'Current Images' : 'Preview'} 
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-bold">
                            {formImages.length}
                          </span>
                        </p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {formImages.map((img, idx) => (
                          <div key={idx} className="relative group">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                              <Image
                                src={img}
                                alt={`Preview ${idx + 1}`}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-3">
                              <span className="text-white text-sm font-bold bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                                {idx + 1}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-12 pt-8 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={submitting}
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 px-8 py-4 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-xl flex items-center justify-center gap-3"
                  >
                    {submitting && (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    <span>
                      {submitting 
                        ? (editingProject ? "Updating Project..." : "Creating Project...") 
                        : (editingProject ? "Update Project" : "Create Project")
                      }
                    </span>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Toast */}
      {successMessage && (
        <SuccessToast 
          message={successMessage} 
          onClose={() => setSuccessMessage(null)} 
        />
      )}
    </div>
  );
}