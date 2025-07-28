"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { Edit, Trash2, PlusCircle, X, ChevronLeft, ChevronRight, Calendar, MapPin, Image as ImageIcon, Upload, Eye, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      <div className="h-48 sm:h-56 md:h-64 w-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex flex-col items-center justify-center text-slate-400 shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-red-50/30"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3">
            <ImageIcon size={20} className="sm:w-6 sm:h-6 text-slate-500" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-600">No images available</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 sm:mb-6 group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
      
      <Image
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${isLoading ? 'blur-sm' : 'blur-0'}`}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        onLoad={() => setIsLoading(false)}
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 z-20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {images.length > 1 && !isLoading && (
        <>
          {/* Navigation Buttons with enhanced mobile design */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-2 sm:p-3 rounded-full opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-2 sm:p-3 rounded-full opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 backdrop-blur-md z-20 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
          
          {/* Enhanced Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/40 hover:bg-white/70 active:bg-white/80 hover:scale-110 active:scale-95'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Enhanced Image Counter */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/30 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md z-20 font-medium">
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
    <div className="fixed top-4 right-4 left-4 sm:left-auto z-50 bg-green-500 text-white px-4 sm:px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 animate-in slide-in-from-top-2 duration-300 max-w-sm sm:max-w-none mx-auto sm:mx-0">
      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
      </div>
      <span className="font-medium text-sm sm:text-base flex-1">{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white p-1 flex-shrink-0 touch-manipulation">
        <X size={14} className="sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default function ProjectsAdminPage() {
  const router = useRouter();

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/20 to-red-50/20 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 sm:border-4 border-red-500/20 rounded-full"></div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 sm:border-4 border-red-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
        </div>
        <div className="mt-4 sm:mt-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Loading Projects</h3>
          <p className="text-sm sm:text-base text-slate-600 px-4">Please wait while we fetch your amazing work...</p>
        </div>
      </div>
    </div>
  );
  
  if (error && projects.length === 0) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/20 to-red-50/20 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white border border-red-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-md shadow-xl sm:shadow-2xl w-full">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4">
          <X size={24} className="sm:w-8 sm:h-8 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 text-center">Connection Error</h3>
        <p className="text-red-600 text-center mb-4 text-sm sm:text-base">{error}</p>
        <p className="text-slate-600 text-xs sm:text-sm text-center mb-6">Please check your API connection and try again.</p>
        <button 
          onClick={fetchProjects}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 text-white font-semibold py-3 sm:py-3 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation"
        >
          Retry Connection
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/10 to-red-50/10 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-red-400/10 to-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-red-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-600 via-red-500 to-red-500 bg-clip-text text-transparent leading-tight">
                Projects Studio
              </h1>
            </div>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-md">
              Craft, manage, and showcase your creative portfolio with style
            </p>
            {error && (
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg text-xs sm:text-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                API connection unstable
              </div>
            )}
          </div>
          
          <button
            onClick={() => openForm()}
            className="group relative bg-gradient-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-600 active:from-red-700 active:to-red-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden w-full sm:w-auto touch-manipulation"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <PlusCircle size={18} className="sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-sm sm:text-base">
                <span className="inline sm:hidden">Create Project</span>
                <span className="hidden sm:inline lg:hidden">Create New</span>
                <span className="hidden lg:inline">Create New Project</span>
              </span>
            </div>
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12 sm:py-20 px-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-100 to-red-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-400 to-red-400 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <PlusCircle size={24} className="sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Your Canvas Awaits</h3>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md mx-auto">
              Ready to showcase your amazing work? Create your first project and let your creativity shine.
            </p>
            <button
              onClick={() => openForm()}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-600 active:from-red-700 active:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl touch-manipulation"
            >
              <PlusCircle size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Start Creating</span>
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-white/50 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                
                <ImageSlider images={project.images || []} title={project.title} />
                
                <div className="p-4 sm:p-6 relative z-10">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 flex-1 mr-3 sm:mr-4 leading-tight">
                      {project.title}
                    </h2>
                    
                    <div className="flex gap-1 sm:gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <button
                        onClick={() => openForm(project)}
                        className="p-2 sm:p-2.5 text-blue-500 hover:text-blue-600 active:text-blue-700 hover:bg-blue-50 active:bg-blue-100 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg touch-manipulation"
                        title="Edit project"
                        aria-label={`Edit project ${project.title}`}
                      >
                        <Edit size={16} className="sm:w-4.5 sm:h-4.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project._id!, project.title)}
                        className="p-2 sm:p-2.5 text-red-500 hover:text-red-600 active:text-red-700 hover:bg-red-50 active:bg-red-100 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg touch-manipulation"
                        title="Delete project"
                        aria-label={`Delete project ${project.title}`}
                      >
                        <Trash2 size={16} className="sm:w-4.5 sm:h-4.5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 order-2 sm:order-1">
                      <MapPin size={14} className="sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                      <span className="font-medium text-xs sm:text-sm truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-50 to-red-50 text-red-600 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl order-1 sm:order-2">
                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
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
              className="bg-white/95 backdrop-blur-xl top-10 lg:left-40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 w-full max-w-4xl relative overflow-auto max-h-[95vh] sm:max-h-[90vh] shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeForm}
                disabled={submitting}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-600 active:text-slate-700 hover:bg-slate-100 active:bg-slate-200 p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                aria-label="Close form"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    {editingProject ? <Edit size={20} className="sm:w-6 sm:h-6 text-white" /> : <PlusCircle size={20} className="sm:w-6 sm:h-6 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                      {editingProject ? "Edit Project" : "Create New Project"}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {editingProject ? "Update your project details" : "Bring your creative vision to life"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2" htmlFor="title">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Project Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg font-medium placeholder:text-slate-400"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Enter your amazing project title..."
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2" htmlFor="description">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-200 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-400"
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    rows={4}
                    placeholder="Tell the story behind your project..."
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2" htmlFor="date">
                      <Calendar size={14} className="sm:w-4 sm:h-4 text-red-500" />
                      Project Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2" htmlFor="location">
                      <MapPin size={14} className="sm:w-4 sm:h-4 text-red-500" />
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      className="w-full border-2 border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-slate-400"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="Where was this created?"
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 sm:mb-3 flex items-center gap-2" htmlFor="images">
                    <Upload size={14} className="sm:w-4 sm:h-4 text-red-500" />
                    Project Images
                    {!editingProject && <span className="text-red-500">*</span>}
                    {editingProject && <span className="text-slate-500 text-xs font-normal ml-2">(Upload new images or keep existing ones)</span>}
                  </label>
                  
                  <div className="border-2 border-dashed border-slate-300 hover:border-red-400 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 bg-gradient-to-br from-slate-50/50 to-white/50">
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
                      className={`cursor-pointer inline-flex flex-col items-center gap-3 sm:gap-4 ${submitting ? 'pointer-events-none opacity-50' : 'hover:scale-105'} transition-all duration-200 touch-manipulation`}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-red-100 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                        <Upload size={20} className="sm:w-7 sm:h-7 text-red-500" />
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <span className="text-base sm:text-lg font-bold text-slate-700 block">
                          {editingProject ? 'Upload new images' : 'Upload your project images'}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-500 px-2">
                          PNG, JPG, WebP up to 10MB each • Drag & drop or click to browse
                        </p>
                      </div>
                    </label>
                  </div>
                  
                  {formImages.length > 0 && (
                    <div className="mt-4 sm:mt-6">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Eye size={14} className="sm:w-4 sm:h-4 text-red-500" />
                          {editingProject && imageFiles.length === 0 ? 'Current Images' : 'Preview'} 
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-bold">
                            {formImages.length}
                          </span>
                        </p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                        {formImages.map((img, idx) => (
                          <div key={idx} className="relative group">
                            <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                              <Image
                                src={img}
                                alt={`Preview ${idx + 1}`}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl flex items-end justify-center pb-2 sm:pb-3">
                              <span className="text-white text-xs sm:text-sm font-bold bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                                {idx + 1}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={submitting}
                    className="flex-1 order-2 sm:order-1 border-2 border-slate-300 hover:border-slate-400 active:border-slate-500 text-slate-700 hover:text-slate-800 active:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 active:bg-slate-100 touch-manipulation"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex-1 order-1 sm:order-2 bg-gradient-to-r from-red-500 to-red-500 hover:from-red-600 hover:to-red-600 active:from-red-700 active:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg flex items-center justify-center gap-2 sm:gap-3 touch-manipulation"
                  >
                    {submitting && (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    <span className="text-sm sm:text-base">
                      {submitting 
                        ? (editingProject ? "Updating..." : "Creating...") 
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