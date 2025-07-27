"use client"
import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Eye,
  Loader2,
  X,
  Award,
  Users,
  Clock,
  Building,
  Home,
  Wrench,
  ArrowRight,
  CheckCircle,
  Globe,
  Phone,
  Mail,
} from "lucide-react";

// Project type - updated to match API response
type Project = {
  _id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  images: string[];
  category?: string;
  status?: "completed" | "ongoing" | "planned";
  budget?: string;
  duration?: string;
  client?: string;
  __v?: number;
};

// API Response type
type ApiResponse = {
  success: boolean;
  data: Project[];
};

// Stats data
const stats = [
  { icon: Building, label: "Projects Completed", value: "150+", color: "text-blue-600" },
  { icon: Users, label: "Happy Clients", value: "98%", color: "text-green-600" },
  { icon: Award, label: "Years Experience", value: "25+", color: "text-purple-600" },
  { icon: Globe, label: "Locations Served", value: "50+", color: "text-orange-600" },
];

// Hero Stats Component
const HeroStats = () => (
  <div className="bg-gradient-to-r from-[#CC3333] to-[#AA2828] text-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Excellence Since 1999</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          We&apos;ve been transforming spaces and exceeding expectations for over two decades
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <Icon className="w-8 h-8 mx-auto mb-4 text-white" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// Project image slider component
const ProjectImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) {
    return (
      <div className="h-80 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
        <span className="text-gray-400 font-medium">No images available</span>
      </div>
    );
  }

  return (
    <div className="relative h-80 md:h-120 w-full group overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Loader2 className="w-6 h-6 animate-spin text-[#CC3333]" />
        </div>
      )}
      {images.length > 1 && !isLoading && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white shadow-lg"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

// Enhanced Project Modal
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl relative overflow-hidden max-h-[95vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-[#CC3333] to-[#AA2828] text-white">
          <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div>
              <ProjectImageSlider images={project.images} title={project.title} />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#CC3333]">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#CC3333]" />
                    <span className="text-gray-700">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#CC3333]" />
                    <span className="text-gray-700">
                      {new Date(project.date).toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {project.duration && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#CC3333]" />
                      <span className="text-gray-700">{project.duration}</span>
                    </div>
                  )}
                  {project.status && (
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 capitalize">{project.status}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#CC3333]">Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Project Card
const ProjectCard = ({ project, onPreview }: { project: Project; onPreview: () => void }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const toggleDescription = () => setShowFullDesc(!showFullDesc);

  const shortDesc = project.description.slice(0, 200);
  const isLong = project.description.length > 200;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ">
      <div className="flex flex-col md:flex-row min-h-[28rem]">
        <div className="md:w-1/2 w-full">
          <ProjectImageSlider images={project.images} title={project.title} />
        </div>
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#CC3333] break-words">
                {project.title}
              </h3>
              {project.status === "completed" && (
                <CheckCircle className="w-6 h-6 text-green-500" />
              )}
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-4">
              {showFullDesc ? project.description : shortDesc}
              {isLong && (
                <button
                  onClick={toggleDescription}
                  className="text-[#CC3333] cursor-pointer font-medium ml-2 underline hover:text-[#AA2828] transition-colors"
                >
                  {showFullDesc ? "Show less" : "Learn more"}
                </button>
              )}
            </p>
            
            {/* Project metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="text-[#CC3333]" />
                <span className="text-sm">{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-[#CC3333]" />
                <span className="text-sm">
                  {new Date(project.date).toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              {project.duration && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} className="text-[#CC3333]" />
                  <span className="text-sm">{project.duration}</span>
                </div>
              )}
              {project.category && (
                <div className="flex items-center gap-2">
                  <span className="bg-[#CC3333]/10 text-[#CC3333] text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <button
            onClick={onPreview}
            className="bg-[#CC3333] text-white px-6 py-3 rounded-xl hover:bg-[#AA2828] transition-all duration-200 font-medium flex items-center gap-2 w-max group"
          >
            <Eye size={18} />
            View Project Details
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Call to Action Component
const CallToAction = () => (
  <div className="bg-gradient-to-r from-gray-50 to-white py-16">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Ready to Start Your Next Project?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Get in touch with our expert team for a free consultation and quote. 
        Let&apos;s bring your vision to life.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#CC3333] text-white px-8 py-4 rounded-xl hover:bg-[#AA2828] transition-all duration-200 font-semibold flex items-center gap-2 justify-center group">
          <Phone size={20} />
          Call Now: 01234 567890
        </button>
        <button className="border-2 border-[#CC3333] text-[#CC3333] px-8 py-4 rounded-xl hover:bg-[#CC3333] hover:text-white transition-all duration-200 font-semibold flex items-center gap-2 justify-center">
          <Mail size={20} />
          Get Free Quote
        </button>
      </div>
    </div>
  </div>
);

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const projectsPerPage = 5;

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Replace with your actual API endpoint
      const response = await fetch('/api/projects'); // Update this URL to your actual API endpoint
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      
      if (data.success && data.data) {
        setProjects(data.data);
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err instanceof Error ? err.message : "Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="mt-30 min-h-screen bg-gray-50">
      {/* Hero Stats Section */}
      <HeroStats />

      {/* Main Content */}
      <section className=" max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Project Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive portfolio of construction projects. From residential extensions to commercial developments, 
            each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-[#CC3333] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-medium">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 text-center p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="mb-4 font-semibold text-xl">Error Loading Projects</p>
            <p className="text-lg">{error}</p>
            <button 
              onClick={fetchProjects}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500 font-medium">No projects found</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <>
            {/* Projects Grid */}
            <div className="space-y-12">
              {currentProjects.map((project) => (
                <ProjectCard 
                  key={project._id} 
                  project={project} 
                  onPreview={() => setSelectedProject(project)} 
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium rounded-xl border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      currentPage === i + 1
                        ? "bg-[#CC3333] text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium rounded-xl border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}